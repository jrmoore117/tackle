import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`modal--footer ${className}`}
      {...props}
   >
      {children}
   </div>
);

Footer.defaultProps = {
   className: '',
}

Footer.propTypes = {
   className: PropTypes.string,
}

export { Footer };
