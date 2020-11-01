import React from 'react';
import PropTypes from 'prop-types';

const Box = ({
   children,
   variant,
   color,
   ...props
}) => (
   <div
      className={variant === 'ping'
         ? `box box--ping--${color}`
         : `box box--${variant}`}
      {...props}
   >
      {children}
   </div>
);

Box.defaultProps = {
   variant: 'default',
}

Box.propTypes = {
   variant: PropTypes.string,
   label: PropTypes.string,
}

export default Box;