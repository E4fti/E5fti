import { useEffect, useState } from 'react';
import { profileConfig } from '@/config/profileConfig';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const { cursor } = profileConfig;

  useEffect(() => {
    if (!cursor.enabled) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
    };
  }, [cursor.enabled]);

  if (!cursor.enabled) return null;

  const renderCursor = () => {
    switch (cursor.style) {
      case 'dot':
        return (
          <>
            <div
              className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-100"
              style={{
                left: position.x - 4,
                top: position.y - 4,
                width: 8,
                height: 8,
                backgroundColor: cursor.primaryColor,
                transform: isClicking ? 'scale(0.8)' : 'scale(1)',
                opacity: isVisible ? 1 : 0,
              }}
            />
            <div
              className="fixed pointer-events-none z-[9998] rounded-full transition-all duration-300 ease-out"
              style={{
                left: position.x - 20,
                top: position.y - 20,
                width: 40,
                height: 40,
                border: `1px solid ${cursor.secondaryColor}`,
                transform: isPointer ? 'scale(1.5)' : isClicking ? 'scale(0.8)' : 'scale(1)',
                opacity: isVisible ? 0.5 : 0,
              }}
            />
          </>
        );

      case 'ring':
        return (
          <>
            <div
              className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference transition-transform duration-75"
              style={{
                left: position.x - 6,
                top: position.y - 6,
                width: 12,
                height: 12,
                backgroundColor: '#fff',
                transform: isClicking ? 'scale(0.6)' : 'scale(1)',
                opacity: isVisible ? 1 : 0,
              }}
            />
            <div
              className="fixed pointer-events-none z-[9998] rounded-full transition-all duration-200 ease-out"
              style={{
                left: position.x - 24,
                top: position.y - 24,
                width: 48,
                height: 48,
                background: `linear-gradient(135deg, ${cursor.primaryColor}, ${cursor.secondaryColor})`,
                transform: isPointer ? 'scale(1.3)' : isClicking ? 'scale(0.7)' : 'scale(1)',
                opacity: isVisible ? 0.3 : 0,
              }}
            />
          </>
        );

      case 'emoji':
        return (
          <div
            className="fixed pointer-events-none z-[9999] text-2xl transition-transform duration-100"
            style={{
              left: position.x - 12,
              top: position.y - 12,
              transform: isClicking ? 'scale(0.8) rotate(-10deg)' : isPointer ? 'scale(1.2)' : 'scale(1)',
              opacity: isVisible ? 1 : 0,
            }}
          >
            {cursor.emoji}
          </div>
        );

      default:
        return null;
    }
  };

  return renderCursor();
};

export default CustomCursor;
