'use client';
import { useState } from 'react';
import Lightbox from './Lightbox';

export default function ClientGallery({ images, title }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="gallery-grid">
        {images.map((imgSrc, idx) => (
          <div key={idx} className="gallery-item" onClick={() => openLightbox(idx)}>
            <img src={imgSrc} alt={`${title} Görseli ${idx + 1}`} className="gallery-img" />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox 
          images={images} 
          initialIndex={photoIndex} 
          onClose={() => setLightboxOpen(false)} 
        />
      )}
    </>
  );
}
