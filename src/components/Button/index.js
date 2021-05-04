import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../Icon';

import '../../css/tackle.output.css';

export const Button = ({
   label,
   color,
   variant,
   isSmall,
   leftIcon,
   rightIcon,
   isLoading,
   isDisabled,
   className,
   ...props
}) => {
   const buttonClasses = classNames(
      'button',
      className, {
      'button--small': isSmall,
      [`button--${variant}--disabled`]: isDisabled,
      [`button--${variant}--${color}`]: !isDisabled,
   });

   return (
      <button
         className={buttonClasses}
         onAnimationEnd={(e) => e.target.blur()}
         disabled={isDisabled || isLoading}
         {...props}
      >
         {leftIcon && !isLoading && 
            <Icon as={leftIcon} className="button--left-icon" />}
         {isLoading
            ? <Icon as="Loader" size={6} className="button--loader" />
            : label}
         {rightIcon && !isLoading && 
            <Icon as={rightIcon} className="button--right-icon" />}
      </button>
   );
}

Button.defaultProps = {
   type: 'button',
   color: 'default',
   variant: 'primary',
   className: '',
   leftIcon: '',
   rightIcon: '',
   isSmall: false,
   isLoading: false,
   isDisabled: false,
}

Button.propTypes = {
   type: PropTypes.oneOf(['button', 'submit', 'reset']),
   variant: PropTypes.string,
   color: PropTypes.string,
   label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
   ]).isRequired,
   isDisabled: PropTypes.bool,
   isSmall: PropTypes.bool,
   isLoading: PropTypes.bool,
   className: PropTypes.string,
   leftIcon: PropTypes.string,
   rightIcon: PropTypes.string,
}
