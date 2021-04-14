import React from 'react';
import PropTypes from 'prop-types';

export const Divider = ({
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
