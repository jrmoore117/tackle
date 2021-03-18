import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({
   value,
   errors,
   isSmall,
   isDisabled,
   withElements,
   className,
   children,
   ...props
}) => (
   <select
      value={value}
      className={`${withElements ? 'select--with-elements' : `select select--${errors ? 'error' : 'default'}`} ${isSmall ? 'select--small' : ''} ${value ? 'text-gray-900' : 'text-gray-600'} ${className || ''}`}
      disabled={isDisabled}
      {...props}
   >
      {children}
   </select>
);

Select.id = 'Select';

Select.propTypes = {
   isSmall: PropTypes.bool,
   isDisabled: PropTypes.bool,
   withElements: PropTypes.bool,
   className: PropTypes.string,
}

export const Option = ({
   isDisabled,
   children,
   ...props
}) => (
   <option
      disabled={isDisabled}
      {...props}
   >
      {children}
   </option>
);

Option.id = 'Option';

Option.propTypes = {
   value: PropTypes.string,
   isDisabled: PropTypes.bool,
}
