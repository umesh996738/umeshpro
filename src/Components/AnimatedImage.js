import React, { useState, useEffect } from 'react';

const AnimatedImage = ({ src, alt, className = '', animationType = 'float' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`animated-img-${src}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [src]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animationType) {
      case 'float':
        return 'float-animation fade-in-up';
      case 'pulse':
        return 'pulse-animation fade-in-up';
      case 'slideLeft':
        return 'slide-in-left';
      case 'slideRight':
        return 'slide-in-right';
      case 'rotateIn':
        return 'rotate-in';
      case 'zoom':
        return 'fade-in-up hover-lift';
      default:
        return 'fade-in-up';
    }
  };

  return (
    <div 
      id={`animated-img-${src}`}
      className={`image-hover-zoom ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`img-fluid ${getAnimationClass()} ${isLoaded ? '' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        style={{
          transition: 'opacity 0.5s ease',
          opacity: isLoaded ? 1 : 0
        }}
      />
      {!isLoaded && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default AnimatedImage;