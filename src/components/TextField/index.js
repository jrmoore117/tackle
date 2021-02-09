import React from 'react';
import { Input } from "reakit/Input";
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
  <Input
    type={type}
    className={`${withElements ? 'textfield--with-elements' : `textfield textfield--${errors ? 'error' : 'default'}`} ${isSmall ? 'textfield--small' : ''} ${className || ''}`}
    disabled={isDisabled}
    {...props}
  />
);

TextField.id = 'TextField';

TextField.propTypes = {
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  withElements: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
}

export default TextField;