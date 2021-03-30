import React, {
   cloneElement,
   isValidElement,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from "@reach/router";

export const Menu = ({
   color,
   children,
   className,
   withLinks,
   ...props
}) => {
   const childrenWithProps = children.map((child, i) => {
      if (isValidElement(child) && child.type.id === 'MenuItem') {
         return cloneElement(child, {
            key: `menuitem-${i}`,
            color,
            withLinks,
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
         className={`menu ${className}`}
         {...props}
      >
         {childrenWithProps}
      </div>
   );
}

Menu.defaultProps = {
   color: 'blue',
   className: '',
   withLinks: false,
}

Menu.propTypes = {
   color: PropTypes.string,
   withLinks: PropTypes.bool,
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
}

export const MenuItem = ({
   label,
   color,
   onClick,
   isActive,
   className,
   withLinks,
   ...props
}) => {
   const menuItemClasses = classNames(
      'menu--item',
      className, {
      'menu--item--inactive': !isActive,
      [`menu--item--active--${color}`]: isActive,
   });

   if (withLinks) {
      return (
         <Link
            onClick={onClick}
            className={menuItemClasses}
            {...props}
         >
            {label}
         </Link>
      );
   }

   return (
      <div
         onClick={onClick}
         className={menuItemClasses}
         {...props}
      >
         {label}
      </div>
   );
}

MenuItem.id = 'MenuItem';

MenuItem.defaultProps = {
   className: '',
}

MenuItem.propTypes = {
   onClick: PropTypes.func,
   withLinks: PropTypes.bool,
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
      className={`menu--category ${className}`}
      {...props}
   >
      {label}
   </div>
);

MenuCategory.id = 'MenuCategory';

MenuCategory.defaultProps = {
   className: '',
}

MenuCategory.propTypes = {
   onClick: PropTypes.func,
   className: PropTypes.string,
   label: PropTypes.string.isRequired,
}
