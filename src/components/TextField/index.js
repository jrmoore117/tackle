import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextField = ({
  type,
  errors,
  isSmall,
  isDisabled,
  withElements,
  className,
  ...props
}) => {
  const textFieldClasses = classNames({
    'textfield': !withElements,
    'textfield--default': !withElements && !errors,
    'textfield--error': !withElements && errors,
    'textfield--with-elements': withElements,
    'textfield--small': isSmall,
  }, className);

  return (
    <input
      type={type}
      className={textFieldClasses}
      disabled={isDisabled}
      {...props}
    />
  );
}

TextField.id = 'TextField';

TextField.defaultProps = {
  type: 'text',
  className: '',
  isSmall: false,
  isDisabled: false,
  withElements: false,
}

TextField.propTypes = {
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  withElements: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
}

export default TextField;
