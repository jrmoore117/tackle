import React from 'react';
import { Checkbox as ReakitCheckbox, } from "reakit/Checkbox";
import PropTypes from 'prop-types';

const Checkbox = ({
   label,
   className,
   ...props
}) => (
   <label className={`flex items-center ${className}`}>
      <ReakitCheckbox
         className="checkbox checkbox--default"
         {...props}
      />
      <span className="cursor-pointer select-none">
         {label}
      </span>
   </label>
);

Checkbox.propTypes = {
   className: PropTypes.string,
}

export default Checkbox;
