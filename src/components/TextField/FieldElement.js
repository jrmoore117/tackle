import React, { cloneElement } from 'react';

export const FieldElementLeft = ({ children, ...props }) => {
   const icon = cloneElement(children, { className: 'h-5 w-5 stroke-2 text-gray-900 mr-2' })
   return (
      <span {...props}>
         {icon}
      </span>
   );
}

FieldElementLeft.id = 'FieldElementLeft';

export const FieldElementRight = ({ children, ...props }) => {
   const icon = cloneElement(children, { className: 'h-5 w-5 stroke-2 text-gray-900 ml-2' })
   return (
      <span {...props}>
         {icon}
      </span>
   );
}

FieldElementRight.id = 'FieldElementRight';

export default FieldElementRight;