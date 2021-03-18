import React from 'react';

export const FieldElementLeft = ({
   children,
   className,
   ...props
}) => (
   <div className={`fieldelement--left ${className || ''}`} {...props}>
      {children}
   </div>
);

FieldElementLeft.id = 'FieldElementLeft';

export const FieldElementRight = ({
   children,
   className,
   ...props
}) => (
   <div className={`fieldelement--right ${className || ''}`} {...props}>
      {children}
   </div>
);

FieldElementRight.id = 'FieldElementRight';
