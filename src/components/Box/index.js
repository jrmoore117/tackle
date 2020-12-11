import React from 'react';
import PropTypes from 'prop-types';

const Box = ({
   color,
   variant,
   isRounded,
   pingColor,
   className,
   children,
   ...props
}) => (
   <div
      className={`box box--${variant}--${color} ${isRounded ? 'rounded-full' : 'rounded'} ${pingColor ? `animate-ping-${pingColor}` : ''} ${className || ''}`}
      {...props}
   >
      {children}
   </div>
);

Box.defaultProps = {
   color: 'white',
   variant: 'default',
}

Box.propTypes = {
   color: PropTypes.string,
   variant: PropTypes.string,
   pingColor: PropTypes.string,
   className: PropTypes.string,
}

export default Box;