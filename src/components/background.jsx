import { useEffect } from 'react';
import '../styles/space.css';

const Space = ({ children }) => {
  useEffect(() => {
    const createStars = () => {
      const stars = document.getElementById('stars');
      stars.innerHTML = ''; 
      Array.from({ length: 1000 }).forEach(() => {
        const star = document.createElement('div');
        star.className = 'star';

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100;
        const x = 50 + Math.cos(angle) * distance;
        const y = 50 + Math.sin(angle) * distance;

        Object.assign(star.style, {
          left: `${x}%`,
          top: `${y}%`,
          width: `${Math.random() * 2 + (distance > 80 ? 0.5 : 1.5)}px`,
          height: `${Math.random() * 2 + (distance > 80 ? 0.5 : 1.5)}px`,
          opacity: Math.min(1, 0.3 + (100 - distance) / 100),
          animationDelay: `${Math.random() * 3}s`,
        });

        stars.appendChild(star);
      });
    };

    createStars();
    window.addEventListener('resize', createStars);
    return () => window.removeEventListener('resize', createStars);
  }, []);

  return (
    <div className="starry-container">
      <div className="night-sky">
        <div className="stars" id="stars"></div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Space;
