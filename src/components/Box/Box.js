import React from 'react';
import PropTypes from 'prop-types';

const Box = ({
   children,
   variant,
   color,
   pingColor,
   ...props
}) => (
   <div
      className={`
         box box--${variant}--${color}
         ${pingColor && `animate-ping-${pingColor}`}
      `}
      {...props}
   >
      {children}
   </div>
);

Box.defaultProps = {
   variant: 'default',
   color: 'white',
}

Box.propTypes = {
   variant: PropTypes.string,
   label: PropTypes.string,
}

export default Box;