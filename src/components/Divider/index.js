import React from 'react';
import PropTypes from 'prop-types';

import '../../css/tackle.output.css';

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
