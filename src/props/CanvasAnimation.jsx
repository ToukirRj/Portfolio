

import { useRef, useEffect } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    const scale = window.devicePixelRatio;
    canvas.width = width * scale;
    canvas.height = height * scale;
    ctx.scale(scale, scale);

    const colors = ['#FF0000','#D000FF','#17b057'];
    const mousePosition = {
      x: undefined,
      y: undefined
    }

    function Circle(x, y, radius, dx, dy) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.dx = dx;
      this.dy = dy;
      this.color = colors[Math.floor(Math.random() * 5)]
      this.scale = this.radius;
      this.draw = () => {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.scale, 0, Math.PI * 2);
        ctx.fill();
      };
    }

    const circles = []

    function create() {
      for (let i = 0; i < 8; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        const size = Math.floor(Math.random() * 250)
        const dx = Math.floor(Math.random() * 2) - 0;
        const dy = Math.floor(Math.random() * 4) - 0;
        let c1 = new Circle(x, y, size, dx, dy);
        c1.draw();
        circles.push(c1);
      }
      update();
    }
    create()

    function update() {
      ctx.clearRect(0, 0, width, height);
      circles.forEach(circle => {
        if (circle.x > width) {
          circle.dx = -circle.dx;
        }
        if (circle.x < 0) {
          circle.dx = -circle.dx;
        }

        if (circle.y > height) {
          circle.dy = -circle.dy;
        }
        if (circle.y < 0) {
          circle.dy = -circle.dy;
        }

        circle.x += circle.dx;
        circle.y += circle.dy;

        circle.draw();
      })
      requestAnimationFrame(update)
    }

    document.addEventListener('mousemove', (event) => {
      mousePosition.x = event.x;
      mousePosition.y = event.y;
    })

    document.addEventListener('touchmove', (event) => {
      mousePosition.x = event.touches[0].clientX;
      mousePosition.y = event.touches[0].clientY;
    })

    // Clean-up
    return () => {
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('touchmove', () => {});
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas"></canvas>;
}

export default CanvasAnimation;
