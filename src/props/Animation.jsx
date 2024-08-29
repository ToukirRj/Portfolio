import { useEffect } from 'react';

const Animation = () => {
    useEffect(() => {
        const animatedBoxes = document.querySelectorAll('.animatable');
        let lastScrollTop = 0;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                } else {
                    entry.target.classList.remove('animated');
                }
            });
        }, { threshold: 0.5 });

        animatedBoxes.forEach((box) => {
            observer.observe(box);
        });

        const handleScroll = () => {
            const st = window.scrollY || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                animatedBoxes.forEach((box) => {
                    const rect = box.getBoundingClientRect();
                    if (rect.bottom <= window.innerHeight) {
                        box.classList.add('animated');
                    }
                });
            } else {
                if (st === 10) {
                    animatedBoxes.forEach((box) => {
                        box.classList.remove('animated');
                    });
                }
            }
            lastScrollTop = st <= 0 ? 0 : st;
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return null; // This component doesn't render anything
};

export default Animation;
