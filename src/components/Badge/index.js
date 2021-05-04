import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../css/tackle.output.css';

export const Badge = ({
   label,
   color,
   variant,
   isSmall,
   isRounded,
   pingColor,
   className,
   ...props
}) => {
   const badgeClasses = classNames(
      'badge',
      `badge--${variant}--${color}`,
      className, {
      'badge--small': isSmall,
      'badge--rounded': isRounded,
      [`animate-ping-${pingColor}`]: pingColor,
   });

   return (
      <span
         className={badgeClasses}
         {...props}
      >
         {label}
      </span>
   );
}

Badge.defaultProps = {
   color: 'gray',
   pingColor: '',
   isSmall: false,
   isRounded: false,
   variant: 'default',
   className: '',
}

Badge.propTypes = {
   color: PropTypes.string,
   isSmall: PropTypes.bool,
   isRounded: PropTypes.bool,
   variant: PropTypes.string,
   pingColor: PropTypes.string,
   className: PropTypes.string,
   label: PropTypes.string.isRequired,
}
