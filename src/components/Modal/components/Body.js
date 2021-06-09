import React from 'react';
import PropTypes from 'prop-types';

const Body = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`modal--body ${className}`}
      {...props}
   >
      {children}
   </div>
);

Body.defaultProps = {
   className: '',
}

Body.propTypes = {
   className: PropTypes.string,
}

export { Body };
