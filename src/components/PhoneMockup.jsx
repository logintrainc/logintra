import React from 'react';

const PhoneMockup = ({ children, size = 'default', className = '', showHomeIndicator = false, scale = 1 }) => {
    // Size variants
    const sizeClasses = {
        small: 'max-w-xs aspect-[9/19] rounded-[2rem] p-2 border-4',
        default: 'max-w-sm aspect-[9/19] rounded-[3rem] p-3 border-8',
        large: 'max-w-md aspect-[9/19] rounded-[3.5rem] p-4 border-8'
    };

    const screenSizes = {
        small: 'rounded-[1.5rem]',
        default: 'rounded-[2rem]',
        large: 'rounded-[2.5rem]'
    };

    return (
        <div className={`relative mx-auto w-full ${sizeClasses[size]} bg-white transform transition-transform duration-500 border-gray-900 shadow-2xl ${className}`}>
            {/* PHONE SCREEN CONTAINER */}
            <div className={`h-full w-full ${screenSizes[size]} overflow-hidden relative flex flex-col font-sans transition-all duration-300`}>
                <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center', width: '100%', height: `${100 / scale}%` }}>
                    {children}
                </div>

                {/* Home Indicator Bar (Optional) */}
                {showHomeIndicator && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/50 rounded-full z-30"></div>
                )}
            </div>
        </div>
    );
};

export default PhoneMockup;
