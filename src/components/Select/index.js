import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Select = ({
   value,
   errors,
   isSmall,
   isDisabled,
   withElements,
   className,
   children,
   ...props
}) => {
   const selectClasses = classNames({
      'select': !withElements,
      'select--default': !withElements && !errors,
      'select--error': !withElements && errors,
      'select--with-elements': withElements,
      'text-gray-1000': value,
      'text-gray-600': !value,
      'select--small': isSmall,
   }, className);

   return (
      <select
         value={value}
         className={selectClasses}
         disabled={isDisabled}
         {...props}
      >
         {children}
      </select>
   );
}

Select.id = 'Select';

Select.defaultProps = {
   className: '',
}

Select.propTypes = {
   isSmall: PropTypes.bool,
   isDisabled: PropTypes.bool,
   withElements: PropTypes.bool,
   className: PropTypes.string,
   children: PropTypes.node,
}

export const Option = ({
   value,
   children,
   isDisabled,
   ...props
}) => (
   <option
      value={value}
      disabled={isDisabled}
      className={value ? 'text-gray-900' : 'text-gray-600'}
      {...props}
   >
      {children}
   </option>
);

Option.id = 'Option';

Option.propTypes = {
   isDisabled: PropTypes.bool,
   children: PropTypes.node,
}
