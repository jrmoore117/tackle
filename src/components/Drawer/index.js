import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DrawerProvider } from './useDrawerContext';
import {
   Header,
   Body,
   Footer
} from './components';

const Drawer = ({
   hide,
   isOpen,
   children,
   className,
   ...props
}) => {

   const drawerClasses = classNames(
      'drawer',
      className
   );

   const drawerBackgroundClasses = classNames({
      'hidden': !isOpen,
      'drawer--background': isOpen
   });

   return (
      <DrawerProvider value={{ hide }}>
         <div
            onClick={hide}
            className={drawerBackgroundClasses}
         >
            <div
               onClick={(e) => e.stopPropagation()}
               variant="frame"
               className={drawerClasses}
               {...props}
            >
               {children}
            </div>
         </div>
      </DrawerProvider>
   );
}

Drawer.defaultProps = {
   className: '',
}

Drawer.propTypes = {
   className: PropTypes.string,
   hide: PropTypes.func.isRequired,
   isOpen: PropTypes.bool.isRequired,
   children: PropTypes.node.isRequired,
}

Drawer.Header = Header;
Drawer.Body = Body;
Drawer.Footer = Footer;

export { Drawer };
