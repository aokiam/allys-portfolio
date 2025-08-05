import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    navigateTo,
    onClick,
    className = "",
    color = "yellow",
    size = "medium", 
    customSize = null,
    image = null, 
    imageSize = "medium", 
    customImageSize = null,
    children,
    shape = 'circular'
}) => {
    const colorClasses = {
        yellow: {
            bg: 'bg-yellow-50',
            shadowColor: '#EEB43C'
        },
        aqua: {
            bg: 'bg-aqua-50',
            shadowColor: '#3EC1D3'
        },
        scarlet: {
            bg: 'bg-scarlet-50',
            shadowColor: '#E26042'
        },
        pink: {
            bg: 'bg-pink-50',
            shadowColor: '#F78FB3'
        },
        orange: {
            bg: 'bg-orange-50',
            shadowColor: '#D97040'
        }
    };

    const sizeClasses = {
        small: 'w-28 h-28',
        medium: 'w-32 h-32',
        large: 'w-48 h-48',
        xlarge: 'w-64 h-64',
        'rect-small': 'w-62 h-10 px-4',
        'rect-medium': 'w-48 h-16 px-6',
        'rect-large': 'w-64 h-20 px-8',
        'rect-xlarge': 'w-80 h-24 px-10',

    };

    const imageSizeClasses = {
        small: 'w-16 h-16',
        medium: 'w-24 h-24',
        large: 'w-32 h-32',
        xlarge: 'w-40 h-40'
    };

    const shadowSizes = {
        small: { normal: 8, hover: 4, tap: 2 },
        medium: { normal: 12, hover: 6, tap: 4 },
        large: { normal: 16, hover: 8, tap: 6 },
        xlarge: { normal: 20, hover: 10, tap: 8 },

        'rect-small': { normal: 6, hover: 3, tap: 2 },
        'rect-medium': { normal: 8, hover: 4, tap: 3 },
        'rect-large': { normal: 10, hover: 5, tap: 4 },
        'rect-xlarge': { normal: 12, hover: 6, tap: 5 },

    };

    const colors = colorClasses[color] || colorClasses.yellow;
    const sizeClass = sizeClasses[size] || sizeClasses.medium;
    const imageSizeClass = imageSizeClasses[imageSize] || imageSizeClasses.medium;
    const shadowSize = shadowSizes[size] || shadowSizes.medium;

    const isExternalUrl = navigateTo && (navigateTo.startsWith('http://') || navigateTo.startsWith('https://'));

    const isRectangular = size.startsWith('rect-') || shape === 'rectangular';

    const handleClick = () => {
        if (isExternalUrl) {
            window.open(navigateTo, '_blank');
        } else if (onClick) {
            onClick(navigateTo);
        }
    };

    // Custom size styles
    const customSizeStyle = customSize ? {
        width: customSize.width,
        height: customSize.height
    } : {};

    const customImageSizeStyle = customImageSize ? {
        width: customImageSize.width,
        height: customImageSize.height
    } : {};

    // Create shadow strings
    const normalShadow = `0 ${shadowSize.normal}px 0 ${colors.shadowColor}, 0 ${shadowSize.normal}px 20px rgba(0,0,0,0.2)`;
    const hoverShadow = `0 ${shadowSize.hover}px 0 ${colors.shadowColor}, 0 ${shadowSize.hover + 2}px 12px rgba(0,0,0,0.25)`;
    const tapShadow = `0 ${shadowSize.tap}px 0 ${colors.shadowColor}, 0 ${shadowSize.tap + 4}px 12px rgba(0,0,0,0.3)`;

    const renderImage = () => {
        if (!image) return null;

        // If image is a string (URL), render as img
        if (typeof image === 'string') {
            return (
                <img 
                    src={image} 
                    alt="Button icon" 
                    className={`${imageSizeClass} object-contain`}
                    style={customImageSize ? customImageSizeStyle : {}}
                />
            );
        }

        // If image is JSX element, render it directly with size classes
        if (React.isValidElement(image)) {
            return React.cloneElement(image, {
                className: `${image.props.className || ''} ${imageSizeClass}`.trim(),
                style: { ...image.props.style, ...(customImageSize ? customImageSizeStyle : {}) }
            });
        }

        return image;
    };

    return (
        <motion.button 
            className={`relative ${size === 'custom' ? '' : sizeClass} ${isRectangular ? 'rounded-none' : 'rounded-full'} ${colors.bg} cursor-pointer flex items-center justify-center ${className}`}
            style={{
                boxShadow: normalShadow,
                ...customSizeStyle
            }}
            whileHover={{
                y: shadowSize.normal / 2,
                boxShadow: hoverShadow,
                transition: {
                    type: "spring",
                    stiffness: 900
                }
            }}
            whileTap={{
                y: shadowSize.normal - 2,
                boxShadow: tapShadow,
                transition: {
                    type: "spring",
                    stiffness: 200
                }
            }}
            onClick={handleClick}
        >
            <div className={`flex items-center justify-center ${isRectangular ? 'flex-row gap-3' : 'flex-col gap-2'}`}>
                {renderImage()}
                {children && (
                    <span className="text-orange-100 font-jersey text-3xl text-center">
                        {children}
                    </span>
                )}
            </div>
        </motion.button>
    );
};

export default Button;