'use client';

import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ percentage, pathStrokeWidth, trailStrokeWidth }) => {
    const [displayPercentage, setDisplayPercentage] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const startAnimation = () => {
            const animate = () => {
                if (displayPercentage < percentage) {
                    setDisplayPercentage((prev) => Math.min(prev + 1, percentage));
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation();
                } else {
                    setDisplayPercentage(0);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is in view
        );

        const currentRef = ref.current; // Copy ref.current to a variable

        if (currentRef) {
            observer.observe(currentRef);
        }

        // Cleanup function
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [percentage, displayPercentage]);

    return (
        <div
            ref={ref}
            className="circular-progress-wrapper"
            style={{
                width: 120,
                height: 120,
                '--path-stroke-width': `${pathStrokeWidth}px`,
                '--trail-stroke-width': `${trailStrokeWidth}px`,
            }}
        >
            <CircularProgressbar
                value={displayPercentage}
                text={`${displayPercentage}%`}
                styles={buildStyles({
                    rotation: 0.604,
                    strokeLinecap: 'round',
                    // pathColor: `rgba(62, 152, 199, ${displayPercentage / 100})`,
                    pathColor: '#17B057',
                    textColor: '#000',
                    trailColor: '#ddd',
                    pathTransitionDuration: 0.5,
                })}
                strokeWidth={pathStrokeWidth}
                circleRatio={0.8}
            />
        </div>
    );
};

CircularProgress.propTypes = {
    percentage: PropTypes.number.isRequired,
    pathStrokeWidth: PropTypes.number,
    trailStrokeWidth: PropTypes.number,
};

CircularProgress.defaultProps = {
    pathStrokeWidth: 8,
    trailStrokeWidth: 3,
};

export default CircularProgress;
