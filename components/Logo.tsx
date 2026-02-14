
import React from 'react';
import { useMedia } from './MediaContext';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  const { brand } = useMedia();
  const sizeClasses = {
    sm: "w-10 h-10 text-xl",
    md: "w-16 h-16 text-3xl",
    lg: "w-24 h-24 text-5xl"
  };

  if (brand.logoUrl) {
    return (
      <div className={`overflow-hidden rounded-2xl flex items-center justify-center ${sizeClasses[size]} ${className}`}>
        <img 
          src={brand.logoUrl} 
          alt={brand.name} 
          className="w-full h-full object-contain" 
        />
      </div>
    );
  }

  return (
    <div 
      className={`rounded-2xl flex items-center justify-center shadow-xl font-black text-white ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: brand.primaryColor }}
    >
      {brand.shortName}
    </div>
  );
};

export default Logo;
