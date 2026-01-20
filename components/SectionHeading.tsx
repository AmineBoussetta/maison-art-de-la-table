
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-16">
      {subtitle && (
        <span className={`text-xs uppercase tracking-[0.4em] block mb-4 ${light ? 'text-gray-300' : 'text-mat-olive'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className={`w-24 h-[1px] mt-8 ${light ? 'bg-white/30' : 'bg-mat-olive/50'}`} />
    </div>
  );
};

export default SectionHeading;
