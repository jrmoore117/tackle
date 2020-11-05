import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({
   label,
   color,
   variant,
   isSmall,
   isRounded,
   pingColor,
   className,
   ...props
}) => (
   <span
      className={`
         badge badge--${variant}--${color}
         ${isSmall && 'badge--small'}
         ${isRounded && 'badge--rounded'}
         ${pingColor && `animate-ping-${pingColor}`}
         ${className}`}
      {...props}
   >
      {label}
   </span>
);

Badge.defaultProps = {
   variant: 'default',
   color: 'gray',
}

Badge.propTypes = {
   variant: PropTypes.string,
   label: PropTypes.string,
}

export default Badge;