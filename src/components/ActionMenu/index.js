import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Icon from 'components/Icon';

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
      }

      document.addEventListener("mousedown", handleClickAway);
      
      return () => {
         document.removeEventListener("mousedown", handleClickAway);
      };

   }, [toggle]);

   return (
      <div
         ref={actionMenuRef}
         onClick={() => toggle(!isOpen)}
         className={`actionmenuwrapper ${className || ''}`}
         {...props}
      >
         <Button
            color={color}
            variant={variant}
            label={icon
               ? <Icon as={icon} size={6} />
               : label}
         />
         <div className={isOpen ? `actionmenu actionmenu-to-${position}` : 'hidden'}>
            {children}
         </div>
      </div>
   );
}

ActionMenu.defaultProps = {
   isOpen: false,
   position: "bl",
}

ActionMenu.propTypes = {
   icon: PropTypes.string,
   label: PropTypes.string,
   color: PropTypes.string,
   variant: PropTypes.string,
   position: PropTypes.string,
   className: PropTypes.string,
   isOpen: PropTypes.bool.isRequired,
   toggle: PropTypes.func.isRequired,
}

export const ActionMenuItem = ({
   icon,
   label,
   onClick,
   className,
   ...props
}) => (
   <div
      onClick={onClick}
      className={`actionmenuitem ${className}`}
      {...props}
   >
      {icon && <Icon as={icon}  className="actionmenuicon" />}
      {label}
   </div>
);

ActionMenuItem.propTypes = {
   icon: PropTypes.string,
   onClick: PropTypes.func,
   className: PropTypes.string,
   label: PropTypes.string.isRequired,
}
