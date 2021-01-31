import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Icon from 'components/Icon';

export const Menu = ({
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

   const menuRef = useRef();

   const handleClickAway = (e) => {
      if (menuRef.current.contains(e.target)) return;
      toggle(false);
   }

   useEffect(() => {
      document.addEventListener("mousedown", handleClickAway);
      return () => {
         document.removeEventListener("mousedown", handleClickAway);
      };
   }, [handleClickAway]);

   return (
      <div
         ref={menuRef}
         onClick={() => toggle(!isOpen)}
         className={`menuwrapper ${className || ''}`}
      >
         <Button
            color={color}
            variant={variant}
            label={icon
               ? <Icon as={icon} size={6} />
               : label}
            {...props}
         />
         <div className={isOpen ? `menu menu-to-${position}` : 'hidden'}>
            {children}
         </div>
      </div>
   );
}

Menu.defaultProps = {
   isOpen: false,
   position: "bl",
}

Menu.propTypes = {
   open: PropTypes.bool.isRequired,
   toggle: PropTypes.func.isRequired,
   className: PropTypes.string,
}

export const MenuItem = ({
   icon,
   label,
   onClick,
   className,
   ...props
}) => (
   <div
      onClick={onClick}
      className={`menuitem ${className}`}
      {...props}
   >
      {icon && <Icon as={icon}  className="menuicon" />}
      {label}
   </div>
);

MenuItem.propTypes = {
   label: PropTypes.string.isRequired,
   className: PropTypes.string,
}
