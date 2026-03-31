
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-6 sm:mb-8">
      {subtitle && (
        <span className={`text-[10px] sm:text-xs uppercase tracking-[0.3em] block mb-2 sm:mb-3 ${light ? 'text-gray-300' : 'text-mat-olive'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-xl sm:text-2xl md:text-3xl font-serif ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className={`w-12 sm:w-16 h-[1px] mt-3 sm:mt-4 ${light ? 'bg-white/30' : 'bg-mat-olive/50'}`} />
    </div>
  );
};

export default SectionHeading;
