import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Box = ({
   color,
   variant,
   isRounded,
   pingColor,
   className,
   children,
   ...props
}) => {
   const boxClasses = classNames(
      'box',
      `box--${variant}--${color}`,
      className, {
      'box--rounded': isRounded,
      [`animate-ping-${pingColor}`]: pingColor,
   });

   return (
      <div
         className={boxClasses}
         {...props}
      >
         {children}
      </div>
   );
}

Box.defaultProps = {
   color: 'white',
   variant: 'default',
   className: '',
}

Box.propTypes = {
   color: PropTypes.string,
   variant: PropTypes.string,
   pingColor: PropTypes.string,
   className: PropTypes.string,
}

export default Box;
