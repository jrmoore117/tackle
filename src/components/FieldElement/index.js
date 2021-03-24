import React from 'react';

export const FieldElementLeft = ({
   children,
   className,
   ...props
}) => (
   <div className={`field-element field-element--left ${className || ''}`} {...props}>
      {children}
   </div>
);

FieldElementLeft.id = 'FieldElementLeft';

export const FieldElementRight = ({
   children,
   className,
   ...props
}) => (
   <div className={`field-element field-element--right ${className || ''}`} {...props}>
      {children}
   </div>
);

FieldElementRight.id = 'FieldElementRight';
