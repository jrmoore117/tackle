import React from "react";
import PropTypes from "prop-types";

const Badge = ({
  label,
  color,
  variant,
  isSmall,
  isRounded,
  pingColor,
  className,
  ...props
}) => (
  <span
    className={`badge badge--${variant}--${color} ${
      isSmall ? "badge--small" : ""
    } ${isRounded ? "badge--rounded" : ""} ${
      pingColor ? `animate-ping-${pingColor}` : ""
    } ${className}`}
    {...props}
  >
    {label}
  </span>
);

Badge.defaultProps = {
  color: "gray",
  variant: "default",
  className: "",
};

Badge.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
};

export default Badge;
