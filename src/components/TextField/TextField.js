import React from 'react';
import { Input } from "reakit/Input";
import PropTypes from 'prop-types';

const TextField = ({ type, className, errors, ...props }) => {
  return (
    <Input
      type={type}
      className={`
        textfield textfield--${errors ? 'error' : 'default'}
        ${className}
      `}
      {...props}
    />
  );
}

TextField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
}

export default TextField;