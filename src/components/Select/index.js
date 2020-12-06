import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({
   type,
   value,
   errors,
   children,
   className,
   withElements,
   ...props
}) => (
   <select
      type={type}
      className={`
         ${withElements
            ? 'select--with-elements'
            : `select select--${errors ? 'error' : 'default'}`}
         ${value ? 'text-gray-900' : 'text-gray-600'}
         ${className}
      `}
      value={value}
      {...props}
   >
      {children}
   </select>
);

Select.id = 'Select';

Select.propTypes = {
   className: PropTypes.string,
   type: PropTypes.oneOf(['text', 'password']), // add other types later.
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
}
