import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`drawer--footer ${className}`}
      {...props}
   >
      {children}
   </div>
);

Footer.defaultProps = {
   className: ''
}

Footer.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
}

export { Footer };
