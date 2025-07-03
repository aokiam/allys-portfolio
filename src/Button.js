import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    navigateTo,
    onClick,
    className = "",
    color = "yellow",
    size = "medium", // small, medium, large, custom
    customSize = null, // { width: "128px", height: "128px" }
    image = null, // URL string or JSX element
    imageSize = "medium", // small, medium, large, custom
    customImageSize = null, // { width: "48px", height: "48px" }
    children // For text or other content
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
        blue: {
            bg: 'bg-blue-50',
            shadowColor: '#3B82F6'
        },
        green: {
            bg: 'bg-green-50',
            shadowColor: '#10B981'
        },
        purple: {
            bg: 'bg-purple-50',
            shadowColor: '#8B5CF6'
        },
        orange: {
            bg: 'bg-orange-50',
            shadowColor: '#F97316'
        },
        red: {
            bg: 'bg-red-50',
            shadowColor: '#EF4444'
        },
        gray: {
            bg: 'bg-gray-50',
            shadowColor: '#6B7280'
        }
    };

    const sizeClasses = {
        small: 'w-20 h-20',
        medium: 'w-32 h-32',
        large: 'w-48 h-48',
        xlarge: 'w-64 h-64'
    };

    const imageSizeClasses = {
        small: 'w-6 h-6',
        medium: 'w-12 h-12',
        large: 'w-16 h-16',
        xlarge: 'w-24 h-24'
    };

    const shadowSizes = {
        small: { normal: 8, hover: 4, tap: 2 },
        medium: { normal: 12, hover: 6, tap: 4 },
        large: { normal: 16, hover: 8, tap: 6 },
        xlarge: { normal: 20, hover: 10, tap: 8 }
    };

    const colors = colorClasses[color] || colorClasses.yellow;
    const sizeClass = sizeClasses[size] || sizeClasses.medium;
    const imageSizeClass = imageSizeClasses[imageSize] || imageSizeClasses.medium;
    const shadowSize = shadowSizes[size] || shadowSizes.medium;

    const isExternalUrl = navigateTo && (navigateTo.startsWith('http://') || navigateTo.startsWith('https://'));

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
            className={`relative ${size === 'custom' ? '' : sizeClass} rounded-full ${colors.bg} cursor-pointer flex items-center justify-center ${className}`}
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
            <div className="flex flex-col items-center justify-center gap-2">
                {renderImage()}
                {children && (
                    <span className="text-gray-700 font-medium text-center">
                        {children}
                    </span>
                )}
            </div>
        </motion.button>
    );
};

export default Button;