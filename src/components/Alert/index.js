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
         alert p-4 flex items-center
         ${pingColor && `animate-ping-${pingColor}`}
         ${className}`}
      {...props}
   >
      {icon && (
         <Box color={color} className="inline-block" isRounded={true}>
            <Icon as={icon} size={6} color="white" />
         </Box>
      )}
      <div className={`flex flex-col`}>
         {heading && (
            <span className={`font-semibold text-${color}-600 ${icon && 'ml-3'}`}>
               {heading}
            </span>
         )}
         <span className={`text-${color}-600 text-sm ${icon && 'ml-3'}`}>
            {message}
         </span>
      </div>
      <div className="flex flex-grow flex-row-reverse">
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
