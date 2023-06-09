import React from 'react';

interface ReactSkeletonProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  borderRadius?: number;
  variant: "rectangle" | "circle" | "text";
  fontSize?: string;
  backgroundColorStart?: string;
  backgroundColorEnd?: string;
}

const ReactSkeleton: React.FC<ReactSkeletonProps> = ({ children, width, height, variant, borderRadius, backgroundColorStart, backgroundColorEnd, fontSize }) => {
  const rectangle = {
    borderRadius: "4px"
  }
  const circle = {
    borderRadius: "1000px"
  }
  const text = {
    width: "100%",
    borderRadius: "4px"
  }

  const fadeInAnimation = `
    @keyframes reactSkeletonAnimate{
          from {
              background: ${backgroundColorStart ? backgroundColorStart : '#efefef'};
          }
          to {
              background: ${backgroundColorEnd ? backgroundColorEnd : '#e4e4e4'};
          }
      }
  `;

  const animationStyle = {
    animation: 'reactSkeletonAnimate 1s 0s linear infinite alternate',
  };

  const findVariant = () => {
    switch (variant) {
      case 'circle':
        return circle;
      case 'rectangle':
        return rectangle;
      case 'text':
        return text;
      default:
        return rectangle;
    }
  }
  return (
    <>
      <style>{fadeInAnimation}</style>
      <div className='react-skeleton' style={
        {
          ...animationStyle,
          ...(findVariant()),
          ...(borderRadius ? { 'borderRadius': borderRadius + "px" } : {}),
          width: width,
          ...(fontSize ? { 'height': fontSize } : { height: height }),
        }
      }>
        {children}
      </div>
    </>
  );
};

export default ReactSkeleton;