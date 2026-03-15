'use client';

import { useState, useCallback, useEffect } from 'react';

export default function Lightbox({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goToPrevious, goToNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&times;</button>
      
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-nav prev" onClick={goToPrevious}>&#10094;</button>
        
        <div className="lightbox-img-container">
          <img 
            src={images[currentIndex]} 
            alt={`Görsel ${currentIndex + 1}`} 
            className="lightbox-main-img" 
          />
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
        
        <button className="lightbox-nav next" onClick={goToNext}>&#10095;</button>
      </div>

      <style jsx>{`
        .lightbox-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }
        .lightbox-close {
          position: absolute;
          top: 20px; right: 30px;
          color: white;
          font-size: 3rem;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 10000;
        }
        .lightbox-content {
          display: flex;
          align-items: center;
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
        }
        .lightbox-nav {
          background: rgba(255,255,255,0.1);
          color: white;
          border: none;
          padding: 1.5rem 1rem;
          font-size: 2rem;
          cursor: pointer;
          transition: background 0.3s;
          border-radius: 8px;
        }
        .lightbox-nav:hover {
          background: rgba(255,255,255,0.3);
        }
        .lightbox-nav.prev { margin-right: 20px; }
        .lightbox-nav.next { margin-left: 20px; }
        
        .lightbox-img-container {
          position: relative;
          text-align: center;
        }
        .lightbox-main-img {
          max-height: 80vh;
          max-width: 75vw;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .lightbox-counter {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          color: #ccc;
          font-family: var(--font-inter);
          letter-spacing: 2px;
        }
        
        @media (max-width: 768px) {
          .lightbox-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            padding: 0.5rem;
          }
          .lightbox-nav.prev { left: -10px; margin-right: 0; }
          .lightbox-nav.next { right: -10px; margin-left: 0; }
          .lightbox-main-img { max-width: 100vw; }
        }
      `}</style>
    </div>
  );
}
