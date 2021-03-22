import React from 'react';

const Divider = ({
   className,
   ...props
}) => (
   <hr className={`divider ${className || ''}`} />
);

export default Divider;