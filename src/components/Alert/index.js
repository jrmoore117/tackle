import React from 'react';
import Box from 'components/Box';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';
import classNames from 'classnames';


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
}) => {
   const alertClasses = classNames(
      'alert',
      className, {
      [`animate-ping-${pingColor}`]: pingColor,
   });
   
   const alertHeadingClasses = classNames(
      'alert--heading',
      `alert--heading--${color}`, {
      'ml-3': icon,
   });
   
   const alertMessageClasses = classNames(
      'alert--message',
      `alert--message--${color}`, {
      'ml-3': icon,
   });

   return (
      <Box
         color={color}
         variant="frame"
         className={alertClasses}
         {...props}
      >
         {icon && (
            <Box color={color} className="inline-block" isRounded={true}>
               <Icon as={icon} size={6} color="white" />
            </Box>
         )}
         <div className="alert--content">
            {heading && (
               <span className={alertHeadingClasses}>
                  {heading}
               </span>
            )}
            <span className={alertMessageClasses}>
               {message}
            </span>
         </div>
         <div className="alert--action">
            {action}
         </div>
      </Box>
   );
}

Alert.defaultProps = {
   icon: '',
   heading: '',
   color: 'gray',
   className: '',
   isSmall: false,
   pingColor: '',
}

Alert.propTypes = {
   icon: PropTypes.string,
   action: PropTypes.node,
   color: PropTypes.string,
   isSmall: PropTypes.bool,
   heading: PropTypes.string,
   pingColor: PropTypes.string,
   className: PropTypes.string,
   message: PropTypes.string.isRequired,
}

export default Alert;
