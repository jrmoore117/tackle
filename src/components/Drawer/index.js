import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

const Drawer = ({
   hide,
   visible,
   children,
   className,
   ...props
}) => (
   <div
      onClick={hide}
      className={visible ? "bg-opacity-50 bg-gray-200 fixed top-0 left-0 flex justify-end h-screen w-screen z-10" : "hidden"}
   >
      <div
         onClick={(e) => e.stopPropagation()}
         variant="frame"
         className={`bg-white h-screen min-w-120 shadow-dark-gray-left flex flex-col ${visible ? "animate-slide-in" : ""}`}
         {...props}
      >
         {children.map(child => cloneElement(child, { hide: hide }))}
      </div>
   </div>
);

Drawer.defaultProps = {
   visible: false,
}

Drawer.propTypes = {
   visible: PropTypes.bool.isRequired,
   className: PropTypes.string,
}

export default Drawer;

export const DrawerHeader = ({
   hide,
   className,
   children,
   ...props
}) => (
   <div
      className={`h-20 p-10 text-xl font-semibold border-l-2 border-b-1 border-gray-200 relative flex-shrink-0 flex items-center ${className}`}
      {...props}
   >
      <Icon as="X" variant="clickable" color="blue" size={10} isRounded onClick={hide} className="absolute -left-5 top-5 shadow-blue" />
      {children}
   </div>
);

export const DrawerBody = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`bg-white flex-grow p-4 border-l-2 border-b-1 border-gray-200 overflow-y-scroll ${className}`}
      {...props}
   >
      {children}
   </div>
);

export const DrawerFooter = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`h-20 p-4 border-l-2 border-gray-200 flex-shrink-0 flex items-center ${className}`}
      {...props}
   >
      {children}
   </div>
);
