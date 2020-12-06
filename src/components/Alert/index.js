import React from 'react';
import Box from 'components/Box';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';

const Alert = ({
   icon,
   color,
   action,
   heading,
   message,
   isSmall,
   pingColor,
   className,
   ...props
}) => (
   <Box
      color={color}
      variant="frame"
      className={`
         alert
         ${pingColor && `animate-ping-${pingColor}`}
         ${className}`}
      {...props}
   >
      {icon && (
         <Box color={color} className="inline-block" isRounded={true}>
            <Icon as={icon} size={6} color="white" />
         </Box>
      )}
      <div className="alertcontent">
         {heading && (
            <span className={`alertheading--${color} ${icon && 'ml-3'}`}>
               {heading}
            </span>
         )}
         <span className={`alertmessage--${color} ${icon && 'ml-3'}`}>
            {message}
         </span>
      </div>
      <div className="alertaction">
         {action}
      </div>
   </Box>
);

Alert.defaultProps = {
   color: 'gray',
}

Alert.propTypes = {
   message: PropTypes.string,
   variant: PropTypes.string,
}

export default Alert;
