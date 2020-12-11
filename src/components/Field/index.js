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

      if (React.isValidElement(child) && (child.type.id === 'TextField' || child.type.id === 'Select')) {
         return React.cloneElement(child, {
            key: `${child.type.id}-${i}`,
            onBlur: toggleFocus,
            onFocus: toggleFocus,
            // Used in TextField index.js and Select index.js
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
         className={`field ${focused && !errors ? 'field--focused' : ''} ${focused && errors ? 'field--focused--error' : ''} ${className || ''}`}
         {...props}
      >
         {childrenWithProps}
      </div>
   );
}

export default Field;
