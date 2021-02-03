import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'components/Box';

const Tooltip = ({
   color,
   content,
   children,
   className
}) => {
   
   const [visible, setVisible] = useState(false);

   return (
      <div className={`tooltipwrapper relative inline-block ${className || ''}`} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
         <div className={visible ? 'ml-2 absolute left-full top-1/2 transform -translate-y-1/2 text-sm w-80' : 'hidden'}>
            <Box color={color} variant="frame" className={`inline-block p-4 shadow-md-${color} animate-fade-in-to-r`}>
               {content}
            </Box>
         </div>
         {children}
      </div>
   );
}

Tooltip.defaultProps = {
   color: 'blue',
}

Tooltip.propTypes = {
   color: PropTypes.string,
   className: PropTypes.string,
}

export default Tooltip;
