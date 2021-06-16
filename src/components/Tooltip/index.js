import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box } from '../Box';
import { useHover } from '../../hooks/useHover';

export const Tooltip = ({
   size,
   color,
   content,
   position,
   children,
   className,
   ...props
}) => {
   const [hoverRef, isHovered] = useHover();

   const wrapperPositionClasses = classNames(
      `tooltip--wrapper--${size}`, {
      'hidden': !isHovered,
      [`tooltip--wrapper--${position}`]: isHovered,
   });

   const tooltipClasses = classNames(
      'tooltip',
      `tooltip--${color}`,
      `tooltip--fade-in-to-${position}`,
   );

   return (
      <div
         ref={hoverRef}
         className={`tooltip--wrapper ${className}`}
         {...props}
      >
         <div className={wrapperPositionClasses}>
            <Box color={color} variant="frame" className={tooltipClasses}>
               {content}
            </Box>
         </div>
         {children}
      </div>
   );
}

Tooltip.defaultProps = {
   size: 'sm',
   color: 'blue',
   position: 'r',
   className: '',
}

Tooltip.propTypes = {
   size: PropTypes.string,
   color: PropTypes.string,
   isSmall: PropTypes.bool,
   position: PropTypes.string,
   className: PropTypes.string,
}
