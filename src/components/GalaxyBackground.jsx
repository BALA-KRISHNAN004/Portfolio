import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = [];
    const numStars = 800;
    const centerX = width / 2;
    const centerY = height / 2;

    let mouseX = centerX;
    let mouseY = centerY;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - centerX,
        y: Math.random() * height - centerY,
        z: Math.random() * width,
        o: '0.' + Math.floor(Math.random() * 99) + 1
      });
    }

    const handleResize = () => {
      // Improve resize performance: only resize if dimensions actually changed
      // On mobile, scrolling often triggers resize due to address bar. 
      // We can optionally ignore small vertical changes if strictly needed, 
      // but standard check is usually enough if we don't reset unless changed.
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      if (width !== newWidth || height !== newHeight) {
        width = newWidth;
        height = newHeight;
        canvas.width = width;
        canvas.height = height;
        // Re-center on resize
        // center coordinates need to be updated inside the loop or refer to width/height
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchMove);

    const moveStars = () => {
      // Clear canvas with white background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);

      // Re-calculate center in draw loop in case of resize
      const cx = width / 2;
      const cy = height / 2;

      // Calculate parallax offset based on mouse position
      const offsetX = (mouseX - cx) * 0.05;
      const offsetY = (mouseY - cy) * 0.05;

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        
        // Move star towards viewer
        star.z -= 2; // Speed

        // Reset star if it passes the viewer
        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - cx;
          star.y = Math.random() * height - cy;
        }

        // Project 3D coordinates to 2D
        const k = 128.0 / star.z;
        const px = (star.x + offsetX * (width/star.z)*2) * k + cx;
        const py = (star.y + offsetY * (width/star.z)*2) * k + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = (1 - star.z / width) * 2.5;
          const shade = parseInt((1 - star.z / width) * 255);
          
          // Invert shade for dark stars on white background
          const inverseShade = 255 - shade;
          
          ctx.fillStyle = `rgb(${inverseShade},${inverseShade},${inverseShade})`;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(moveStars);
    };

    moveStars();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0, // Shorthand for top/left/right/bottom: 0
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#ffffff',
        pointerEvents: 'none' // Allow clicks to pass through
      }}
    />
  );
};

export default GalaxyBackground;
