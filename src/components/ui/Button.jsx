import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full px-8 py-4 text-sm tracking-wide transform active:scale-95";
    const variants = {
        primary: "bg-black text-white hover:bg-[#5e17eb] hover:border-[#5e17eb] border-2 border-black",
        secondary: "bg-transparent text-black border-2 border-black hover:bg-[#5e17eb] hover:border-[#5e17eb] hover:text-white",
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
