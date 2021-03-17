import React from "react";
import PropTypes from "prop-types";

const Switch = ({
  name,
  value,
  label,
  color,
  checked,
  onChange,
  className,
  ...props
}) => (
  <label className={`flex items-center ${className}`}>
    <div
      name={name}
      value={value}
      data-type="switch"
      className="switch"
      onClick={onChange}
      {...props}
    >
      <div
        name={name}
        value={value}
        data-type="switch"
        onClick={onChange}
        className={`switchbutton transform ${
          checked ? `switchbutton--active--${color}` : "switchbutton--inactive"
        }`}
      />
    </div>
    <span className="switchlabel">{label}</span>
  </label>
);

Switch.defaultProps = {
  color: "blue",
};

Switch.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Switch;
