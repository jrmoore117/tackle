import React from 'react';

export const FieldElementLeft = ({ children, ...props }) => (
   <div className="fieldelement--left">
      {children}
   </div>
);

FieldElementLeft.id = 'FieldElementLeft';

export const FieldElementRight = ({ children, ...props }) => (
   <div className="fieldelement--right">
      {children}
   </div>
);

FieldElementRight.id = 'FieldElementRight';
