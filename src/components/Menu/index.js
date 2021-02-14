import React, { isValidElement, cloneElement } from 'react';
import PropTypes from 'prop-types';

export const Menu = ({
   color,
   children,
   className,
   ...props
}) => {
   
   const childrenWithProps = children.map((child, i) => {
      
      if (isValidElement(child) && child.type.id === 'MenuItem') {
         return cloneElement(child, {
            key: `menuitem-${i}`,
            color,
         });
      }

      if (isValidElement(child) && child.type.id === 'MenuCategory') {
         return cloneElement(child, {
            key: `menucategory-${i}`,
         });
      }

      return null;
   });
   
   return (
      <div
         className={`menu ${className || ''}`}
         {...props}
      >
         {childrenWithProps}
      </div>
   );
}

Menu.defaultProps = {
   color: 'blue'
}

Menu.propTypes = {
   color: PropTypes.string,
   className: PropTypes.string,
}

export const MenuItem = ({
   label,
   color,
   onClick,
   isActive,
   className,
   ...props
}) => (
   <div
      onClick={onClick}
      className={`menuitem ${isActive ? `menuitem--active--${color}` : 'menuitem--inactive'} ${className || ''}`}
      {...props}
   >
      {label}
   </div>
);

MenuItem.id = 'MenuItem';

MenuItem.propTypes = {
   onClick: PropTypes.func,
   className: PropTypes.string,
   label: PropTypes.string.isRequired,
}

export const MenuCategory = ({
   label,
   onClick,
   className,
   ...props
}) => (
   <div
      onClick={onClick}
      className={`menucategory ${className || ''}`}
      {...props}
   >
      {label}
   </div>
);

MenuCategory.id = 'MenuCategory';

MenuItem.propTypes = {
   onClick: PropTypes.func,
   className: PropTypes.string,
   label: PropTypes.string.isRequired,
}
