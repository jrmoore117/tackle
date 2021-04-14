import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box } from 'components/Box';

export const Tooltip = ({
   color,
   content,
   isSmall,
   position,
   children,
   className,
   ...props
}) => {
   const [visible, setVisible] = useState(false);

   const wrapperPositionClasses = classNames({
      'hidden': !visible,
      [`tooltip--wrapper--${position}`]: visible,
   });

   const tooltipClasses = classNames(
      'tooltip',
      `tooltip--${color}`,
      `animate-fade-in-to-${position}`, {
      'tooltip--small': isSmall,
   });

   return (
      <div
         onMouseEnter={() => setVisible(true)}
         onMouseLeave={() => setVisible(false)}
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
   color: 'blue',
   position: 'r',
   className: '',
}

Tooltip.propTypes = {
   color: PropTypes.string,
   isSmall: PropTypes.bool,
   position: PropTypes.string,
   className: PropTypes.string,
}
