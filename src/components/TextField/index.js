import React from 'react';
import { Input } from "reakit/Input";
import PropTypes from 'prop-types';

const TextField = ({
  type,
  errors,
  className,
  withElements,
  ...props
}) => (
  <Input
    type={type}
    className={`
      ${withElements
        ? 'textfield--with-elements'
        : `textfield textfield--${errors ? 'error' : 'default'}`}
      placeholder-gray-600
      ${className}
    `}
    {...props}
  />
);

TextField.id = 'TextField';

TextField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']), // add other types later.
}

export default TextField;