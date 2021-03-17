import React, { useState } from "react";

const Field = ({
  errors,
  isSmall,
  isFocused,
  isDisabled,
  className,
  children,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const toggleFocus = (e) => {
    e.type === "focus" ? setFocused(true) : setFocused(false);
  };

  // if isFocused prop has value, assign its value to fieldFocus to control classes; otherwise, built-in state controls classes.
  const fieldFocus = typeof isFocused !== "undefined" ? isFocused : focused;

  const childrenWithProps = children.map((child, i) => {
    if (
      React.isValidElement(child) &&
      (child.type.id === "TextField" || child.type.id === "Select")
    ) {
      return React.cloneElement(child, {
        key: `${child.type.id}-${i}`,
        onBlur: toggleFocus,
        onFocus: toggleFocus,
        // Used in TextField index.js and Select index.js
        withElements: true,
        isDisabled,
      });
    }

    if (React.isValidElement(child) && child.type.id === "FieldElementLeft") {
      return React.cloneElement(child, {
        key: `field-element-left-${i}`,
        ...child.props,
      });
    }

    if (React.isValidElement(child) && child.type.id === "FieldElementRight") {
      return React.cloneElement(child, {
        key: `field-element-right-${i}`,
        ...child.props,
      });
    }

    return child;
  });
  return (
    <div
      className={`field ${
        isDisabled
          ? "field--disabled"
          : `${fieldFocus && !errors ? "field--focused" : ""} ${
              fieldFocus && errors ? "field--focused--error" : ""
            }`
      } ${isSmall ? "field--small" : ""} ${className || ""}`}
      {...props}
    >
      {childrenWithProps}
    </div>
  );
};

export default Field;
