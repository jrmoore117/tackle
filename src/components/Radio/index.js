import React from "react";
import {
  Radio as RadioButton,
  RadioGroup as RadioButtonGroup,
} from "reakit/Radio";
import PropTypes from "prop-types";

export const Radio = ({ label, className, ...props }) => (
  <label className={`radiowrapper ${className || ""}`}>
    <RadioButton className="radio" {...props} />
    <span className="radiolabel">{label}</span>
  </label>
);

Radio.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};

export const RadioGroup = ({ className, ...props }) => {
  return (
    <RadioButtonGroup className={`radiogroup flex ${className}`} {...props} />
  );
};

RadioGroup.propTypes = {
  className: PropTypes.string,
};
