import React from 'react';

const Divider = ({
   className,
   ...props
}) => (
   <hr className={`border-gray-200 ${className || ''}`} />
);

export default Divider;