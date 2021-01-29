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
   children,
   className,
   ...props
}) => {

   const menuRef = useRef();

   const handleClickOut = (e) => {
      if (menuRef.current.contains(e.target)) return;
      toggle(false);
   }

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOut);
      return () => {
         document.removeEventListener("mousedown", handleClickOut);
      };
   }, []);

   return (
      <div
         ref={menuRef}
         onClick={() => toggle(!isOpen)}
         className={`relative inline-block ${className}`}
      >
         <Button
            color={color}
            variant={variant}
            label={icon
               ? <Icon as={icon} size={6} />
               : label}
            {...props}
         />
         <div className={isOpen ? "mt-2 py-2 font-sans text-sm text-gray-900 bg-white border-1 border-gray-100 shadow-md rounded inline-block absolute left-0 top-full z-10" : "hidden"}>
            {children}
         </div>
      </div>
   );
}

Menu.defaultProps = {
   isOpen: false,
}

Menu.propTypes = {
   open: PropTypes.bool.isRequired,
   toggle: PropTypes.func.isRequired,
   className: PropTypes.string,
}

export const MenuItem = ({
   label,
   onClick,
   className,
   ...props
}) => (
   <div
      onClick={onClick}
      className={`h-8 px-2 flex items-center cursor-pointer select-none hover:bg-gray-0 ${className}`}
      {...props}
   >
      {label}
   </div>
);

MenuItem.propTypes = {
   label: PropTypes.string.isRequired,
   className: PropTypes.string,
}
