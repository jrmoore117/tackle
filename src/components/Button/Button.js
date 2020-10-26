import React, { cloneElement } from 'react';
import { Button as Btn } from 'reakit/Button';
import { Loader } from 'react-feather';
import PropTypes from 'prop-types';

const Button = ({
   as,
   variant,
   color,
   label,
   isDisabled,
   isSmall,
   isLoading,
   className,
   leftIcon,
   rightIcon,
   ...props
}) => {
   return (
      <Btn
         as={as}
         className={`
            button button--${variant}--${color}
            ${isDisabled && `button--${variant}--disabled`}
            ${isSmall && 'button--primary--small'}
            ${className || null}
         `}
         onAnimationEnd={(e) => e.target.blur()}
         disabled={isDisabled || isLoading}
         {...props}
      >
         {leftIcon && !isLoading && 
            cloneElement(leftIcon, { className: "h-4 w-4 mr-2" })}
         {isLoading
            ? <Loader className="mx-2 text-gray-700 animate-spin" />
            : label}
         {rightIcon && !isLoading && 
            cloneElement(rightIcon, { className: "h-4 w-4 ml-2" })}
      </Btn>
   );
}

Button.defaultProps = {
   as: 'button',
   type: 'button',
   variant: 'primary',
   color: 'default',
   isDisabled: false,
   isSmall: false,
   isLoading: false,
}

Button.propTypes = {
   as: PropTypes.string,
   type: PropTypes.oneOf(['button', 'submit', 'reset']),
   variant: PropTypes.string,
   color: PropTypes.string,
   label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
   ]).isRequired,
   isDisabled: PropTypes.bool,
   isSmall: PropTypes.bool,
   isLoading: PropTypes.bool,
   className: PropTypes.string,
   leftIcon: PropTypes.object,
   rightIcon: PropTypes.object,
}

export default Button;