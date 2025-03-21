import React from 'react';
import { DollarSign } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', showText = true }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'w-8 h-8';
      case 'large':
        return 'w-12 h-12';
      case 'medium':
      default:
        return 'w-10 h-10';
    }
  };

  const getTextClass = () => {
    switch (size) {
      case 'small':
        return 'text-lg';
      case 'large':
        return 'text-2xl';
      case 'medium':
      default:
        return 'text-xl';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 18;
      case 'large':
        return 28;
      case 'medium':
      default:
        return 22;
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div className={`${getSizeClass()} rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center relative overflow-hidden`}>
        {/* Circular glow effect */}
        <div className="absolute w-full h-full bg-cyan-400 rounded-full opacity-30 blur-md"></div>
        
        {/* Bull silhouette shape using CSS */}
        <div className="absolute w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-300 opacity-40 rounded-full"></div>
        </div>
        
        {/* Dollar sign icon */}
        <DollarSign size={getIconSize()} className="text-white relative z-10" />
      </div>
      
      {showText && (
        <span className={`font-bold ${getTextClass()}`}>BullCircle</span>
      )}
    </div>
  );
};

export default Logo;