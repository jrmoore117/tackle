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

   useEffect(() => {

      const handleClickAway = (e) => {
         if (menuRef.current.contains(e.target)) return;
         toggle(false);
      }

      document.addEventListener("mousedown", handleClickAway);
      
      return () => {
         document.removeEventListener("mousedown", handleClickAway);
      };

   }, [toggle]);

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
   icon: PropTypes.string,
   label: PropTypes.string,
   color: PropTypes.string,
   variant: PropTypes.string,
   position: PropTypes.string,
   className: PropTypes.string,
   isOpen: PropTypes.bool.isRequired,
   toggle: PropTypes.func.isRequired,
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
   icon: PropTypes.string,
   onClick: PropTypes.func,
   className: PropTypes.string,
   label: PropTypes.string.isRequired,
}
