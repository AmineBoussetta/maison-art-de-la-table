
import React from 'react';

interface LogoProps {
  className?: string;
  textColor?: string;
  circleColor?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-24 h-24", textColor = "white", circleColor = "#A8A24F" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Sunburst effect represented by lines */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-[1px]"
            style={{
              backgroundColor: circleColor,
              transform: `rotate(${i * (360 / 40)}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Central Circle */}
      <div 
        className="relative w-3/5 h-3/5 rounded-full flex items-center justify-center z-10 shadow-sm"
        style={{ backgroundColor: circleColor }}
      >
        <span 
          className="font-serif text-xl tracking-widest font-bold"
          style={{ color: textColor }}
        >
          MAT
        </span>
      </div>
    </div>
  );
};

export default Logo;
