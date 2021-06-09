import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`modal--header ${className}`}
      {...props}
   >
      {children}
   </div>
);

Header.defaultProps = {
   className: '',
}

Header.propTypes = {
   className: PropTypes.string,
}

export { Header };
