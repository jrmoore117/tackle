import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import Icon from "components/Icon";

export const ActionMenu = ({
  icon,
  label,
  color,
  toggle,
  isOpen,
  variant,
  position,
  children,
  className,
  ...props
}) => {
  const actionMenuRef = useRef();

  useEffect(() => {
    const handleClickAway = (e) => {
      if (actionMenuRef.current.contains(e.target)) return;
      toggle(false);
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [toggle]);

  const childrenWithProps = children.map((child, i) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        key: `actionmenuitem-${i}`,
        color,
      });
    }
    return null;
  });

  return (
    <div
      ref={actionMenuRef}
      onClick={() => toggle(!isOpen)}
      className={`action-menu--wrapper ${className}`}
      {...props}
    >
      <Button
        color={color}
        variant={variant}
        label={icon ? <Icon as={icon} size={6} /> : label}
      />
      <div
        className={
          isOpen ? `action-menu action-menu--to-${position}` : "hidden"
        }
      >
        {childrenWithProps}
      </div>
    </div>
  );
};

ActionMenu.defaultProps = {
  isOpen: false,
  className: "",
  position: "bl",
};

ActionMenu.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  position: PropTypes.string,
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export const ActionMenuItem = ({
  icon,
  label,
  color,
  onClick,
  className,
  ...props
}) => (
  <div
    onClick={onClick}
    className={`action-menu--item action-menu--item--${color} ${className}`}
    {...props}
  >
    {icon && <Icon as={icon} className="action-menu--icon" />}
    {label}
  </div>
);

ActionMenuItem.defaultProps = {
  color: "blue",
  className: "",
};

ActionMenuItem.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};
