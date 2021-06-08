import React from 'react';
import PropTypes from 'prop-types';

const Body = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`drawer--body ${className}`}
      {...props}
   >
      {children}
   </div>
);

Body.defaultProps = {
   className: ''
}

Body.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
}

export { Body };
