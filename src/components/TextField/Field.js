import React, { useState } from 'react';

const Field = ({
   errors,
   children,
   className,
   ...props
}) => {

   const [focused, setFocused] = useState(false);   
   const toggleFocus = (e) => {
      e.type === 'focus'
         ? setFocused(true)
         : setFocused(false)
   }

   const childrenWithProps = children.map((child, i) => {

      if (React.isValidElement(child) && child.type.id === 'TextField') {
         return React.cloneElement(child, {
            key: `textfield-${i}`,
            onBlur: toggleFocus,
            onFocus: toggleFocus,
            // Used in TextField.js
            withElements: true,
         });
      }

      if (React.isValidElement(child) && child.type.id === 'FieldElementLeft') {
         return React.cloneElement(child, {
            key: `field-element-left-${i}`,
            ...child.props,
         });
      }

      if (React.isValidElement(child) && child.type.id === 'FieldElementRight') {
         return React.cloneElement(child, {
            key: `field-element-right-${i}`,
            ...child.props,
         });
      }

      return child;

   });
   return (
      <div
         className={`
            field
            ${focused && !errors && 'field--focused'}
            ${focused && errors && 'field--focused--error'}
            ${className}
         `}
         {...props}
      >
         {childrenWithProps}
      </div>
   );
}

export default Field;
