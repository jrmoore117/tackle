import React from "react";
import { Checkbox as ReakitCheckbox } from "reakit/Checkbox";
import PropTypes from "prop-types";

const Checkbox = ({ label, className, ...props }) => (
  <label className={`checkboxwrapper ${className}`}>
    <ReakitCheckbox className="checkbox" {...props} />
    <span className="checkboxlabel">{label}</span>
  </label>
);

Checkbox.propTypes = {
  className: PropTypes.string,
};

export default Checkbox;
