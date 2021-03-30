import React, {
   cloneElement,
   isValidElement,
} from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

const Drawer = ({
   hide,
   isOpen,
   children,
   className,
   ...props
}) => {
   const childrenWithProps = children.map((child, i) => {
      if (isValidElement(child)) {
         return cloneElement(child, {
            key: `drawerchild-${i}`,
            hide: hide
         });
      }
      return null;
   });

   return (
      <div
         onClick={hide}
         className={isOpen ? 'drawer--background' : 'hidden'}
      >
         <div
            onClick={(e) => e.stopPropagation()}
            variant="frame"
            className={`drawer ${isOpen ? 'animate-slide-in' : ''} ${className}`}
            {...props}
         >
            {childrenWithProps}
         </div>
      </div>
   );
}

Drawer.defaultProps = {
   className: '',
}

Drawer.propTypes = {
   hide: PropTypes.func.isRequired,
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
      className={`drawer--header ${className}`}
      {...props}
   >
      <Icon as="X" variant="clickable" color="blue" size={10} padding={2} isRounded onClick={hide} className="drawer--header-button" />
      {children}
   </div>
);

DrawerHeader.defaultProps = {
   className: ''
}

DrawerHeader.propTypes = {
   hide: PropTypes.func,
   children: PropTypes.node,
   className: PropTypes.string,
}

export const DrawerBody = ({
   hide,
   className,
   children,
   ...props
}) => (
   <div
      className={`drawer--body ${className}`}
      {...props}
   >
      {children}
   </div>
);

DrawerBody.defaultProps = {
   className: ''
}

DrawerBody.propTypes = {
   hide: PropTypes.func,
   children: PropTypes.node,
   className: PropTypes.string,
}

export const DrawerFooter = ({
   hide,
   className,
   children,
   ...props
}) => (
   <div
      className={`drawer--footer ${className}`}
      {...props}
   >
      {children}
   </div>
);

DrawerFooter.defaultProps = {
   className: ''
}

DrawerFooter.propTypes = {
   hide: PropTypes.func,
   children: PropTypes.node,
   className: PropTypes.string,
}
