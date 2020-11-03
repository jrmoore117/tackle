import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({
   label,
   color,
   variant,
   isRounded,
   isSmall,
   className,
   ...props
}) => (
   <span
      className={`
         badge badge--${variant}--${color}
         ${isSmall && 'badge--small'}
         ${isRounded && 'badge--rounded'}
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