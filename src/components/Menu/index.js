import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

export const Menu = ({
   color,
   variant,
   children,
   className,
   ...props
}) => (
   <div
      className={`menu flex flex-col ${className || ''}`}
      {...props}
   >
      {children.map((child, i) => cloneElement(child, {
         key: `menuitem-${i}`,
         color,
      }))}
   </div>
);

Menu.defaultProps = {
   color: 'blue'
}

Menu.propTypes = {
   color: PropTypes.string,
   variant: PropTypes.string,
   className: PropTypes.string,
}

export const MenuItem = ({
   icon,
   label,
   color,
   onClick,
   isActive,
   className,
   ...props
}) => (
   <div
      onClick={onClick}
      className={`menuitem px-2 py-1 mb-1 text-sm font-medium rounded flex items-center cursor-pointer hover:bg-gray-0 ${isActive ? `rounded bg-${color}-0 text-${color}-500` : ''} ${className}`}
      {...props}
   >
      {icon && <Icon as={icon} color={isActive ? color : "gray"} variant="shaded" size={5} padding={1} className="menuicon" />}
      {label}
   </div>
);

MenuItem.propTypes = {
   icon: PropTypes.string,
   onClick: PropTypes.func,
   className: PropTypes.string,
   label: PropTypes.string.isRequired,
}

export const MenuCategory = ({
   icon,
   label,
   color,
   onClick,
   isActive,
   className,
   ...props
}) => (
   <div
      onClick={onClick}
      className={`menuitem text-sm text-gray-700 font-medium pr-2 py-1 rounded ${isActive ? 'rounded bg-blue-0' : ''} ${className}`}
      {...props}
   >
      {icon && <Icon as={icon} color={color} variant="shaded" className="menuicon" />}
      {label}
   </div>
);

MenuItem.propTypes = {
   icon: PropTypes.string,
   onClick: PropTypes.func,
   className: PropTypes.string,
   label: PropTypes.string.isRequired,
}
