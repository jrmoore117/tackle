import React, { cloneElement } from 'react';

export const FieldElementLeft = ({ children, ...props }) => (
   cloneElement(children, { className: 'h-5 w-5 stroke-2 text-gray-900 mr-2' })
);

FieldElementLeft.id = 'FieldElementLeft';

export const FieldElementRight = ({ children, ...props }) => (
   cloneElement(children, { className: 'h-5 w-5 stroke-2 text-gray-900 ml-2' })
);

FieldElementRight.id = 'FieldElementRight';

export default FieldElementRight;