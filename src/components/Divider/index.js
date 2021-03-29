import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({
   className,
   ...props
}) => (
   <hr className={`divider ${className}`} />
);

Divider.defaultProps = {
   className: '',
}

Divider.propTypes = {
   className: PropTypes.string,
}

export default Divider;
