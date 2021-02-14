import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  type,
  errors,
  isSmall,
  isDisabled,
  withElements,
  className,
  ...props
}) => (
  <input
    type={type}
    className={`${withElements ? 'textfield--with-elements' : `textfield textfield--${errors ? 'error' : 'default'}`} ${isSmall ? 'textfield--small' : ''} ${className || ''}`}
    disabled={isDisabled}
    {...props}
  />
);

TextField.id = 'TextField';

TextField.defaultProps = {
  type: 'text',
}

TextField.propTypes = {
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  withElements: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
}

export default TextField;