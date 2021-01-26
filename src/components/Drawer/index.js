import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

const Drawer = ({
   hide,
   isOpen,
   children,
   className,
   ...props
}) => (
   <div
      onClick={hide}
      className={isOpen ? 'drawerbackground' : 'hidden'}
   >
      <div
         onClick={(e) => e.stopPropagation()}
         variant="frame"
         className={`drawer ${isOpen ? 'animate-slide-in' : ''}`}
         {...props}
      >
         {children.map((child, i) => cloneElement(child, { key: `drawerchild-${i}`, hide: hide }))}
      </div>
   </div>
);

Drawer.defaultProps = {
   isOpen: false,
}

Drawer.propTypes = {
   isOpen: PropTypes.bool.isRequired,
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
      className={`drawerheader ${className}`}
      {...props}
   >
      <Icon as="X" variant="clickable" color="blue" size={10} isRounded onClick={hide} className="drawerheaderbutton" />
      {children}
   </div>
);

DrawerHeader.propTypes = {
   hide: PropTypes.func,
   className: PropTypes.string,
}

export const DrawerBody = ({
   hide,
   className,
   children,
   ...props
}) => (
   <div
      className={`drawerbody ${className}`}
      {...props}
   >
      {children}
   </div>
);

DrawerBody.propTypes = {
   hide: PropTypes.func,
   className: PropTypes.string,
}

export const DrawerFooter = ({
   hide,
   className,
   children,
   ...props
}) => (
   <div
      className={`drawerfooter ${className}`}
      {...props}
   >
      {children}
   </div>
);

DrawerFooter.propTypes = {
   hide: PropTypes.func,
   className: PropTypes.string,
}
