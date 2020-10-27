import React from 'react';
import { Checkbox as ReakitCheckbox, } from "reakit/Checkbox";
import PropTypes from 'prop-types';

const Checkbox = ({ className, ...props }) => {
   return (
      <ReakitCheckbox
         className={`checkbox checkbox--default ${className}`}
         {...props}
      />
   );
}

Checkbox.propTypes = {
   className: PropTypes.string,
}

export default Checkbox;
