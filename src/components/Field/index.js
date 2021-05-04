import React, {
   useState,
   cloneElement,
   isValidElement,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../css/tackle.output.css';

export const Field = ({
   errors,
   isSmall,
   isFocused,
   isDisabled,
   className,
   children,
   ...props
}) => {
   const [focused, setFocused] = useState(false);   
   const toggleFocus = (e) => {
      e.type === 'focus'
         ? setFocused(true)
         : setFocused(false)
   }

   // if isFocused prop has value, assign its value to fieldFocus to control classes; otherwise, built-in state controls classes.
   const fieldFocus = typeof isFocused !== 'undefined' ? isFocused : focused;

   const childrenWithProps = children.map((child, i) => {
      if (isValidElement(child) && (child.type.id === 'TextField' || child.type.id === 'Select')) {
         return cloneElement(child, {
            key: `${child.type.id}-${i}`,
            onBlur: toggleFocus,
            onFocus: toggleFocus,
            // Used in TextField index.js and Select index.js
            withElements: true,
            isDisabled,
         });
      }

      if (isValidElement(child) && child.type.id === 'FieldElementLeft') {
         return cloneElement(child, {
            key: `field-element-left-${i}`,
            ...child.props,
         });
      }

      if (isValidElement(child) && child.type.id === 'FieldElementRight') {
         return cloneElement(child, {
            key: `field-element-right-${i}`,
            ...child.props,
         });
      }

      return child;
   });

   const fieldClasses = classNames(
      'field',
      className, {
      'field--small': isSmall,
      'field--disabled': isDisabled,
      'field--focused': !isDisabled && fieldFocus && !errors,
      'field--focused--errror': !isDisabled && fieldFocus && errors,
   });

   return (
      <div
         className={fieldClasses}
         {...props}
      >
         {childrenWithProps}
      </div>
   );
}

Field.defaultProps = {
   isSmall: false,
   isDisabled: false,
   className: '',
}

Field.propTypes = {
   errors: PropTypes.string,
   isSmall: PropTypes.bool,
   isFocused: PropTypes.bool,
   isDisabled: PropTypes.bool,
   className: PropTypes.string,
   children: PropTypes.node,
}
