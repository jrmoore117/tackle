import React from 'react';
import { Checkbox as ReakitCheckbox, } from "reakit/Checkbox";
import PropTypes from 'prop-types';

export const Checkbox = ({
   label,
   className,
   ...props
}) => (
   <label className={`checkbox--wrapper ${className}`}>
      <ReakitCheckbox
         className="checkbox"
         {...props}
      />
      <span className="checkbox--label">
         {label}
      </span>
   </label>
);

Checkbox.propTypes = {
   className: PropTypes.string,
}
