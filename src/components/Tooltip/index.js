import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'components/Box';

const Tooltip = ({
   color,
   content,
   position,
   children,
   className,
   ...props
}) => {
   
   const [visible, setVisible] = useState(false);

   return (
      <div
         onMouseEnter={() => setVisible(true)}
         onMouseLeave={() => setVisible(false)}
         className={`tooltipwrapper ${className || ''}`}
         {...props}
      >
         <div className={visible ? `tooltipwrapper--${position}` : 'hidden'}>
            <Box color={color} variant="frame" className={`tooltip tooltip--${color} animate-fade-in-to-${position}`}>
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
}

Tooltip.propTypes = {
   color: PropTypes.string,
   position: PropTypes.string,
   className: PropTypes.string,
}

export default Tooltip;
