import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box } from '../Box';
import { Header, Body, Footer } from './components';

const Modal = ({
   size,
   hide,
   isVisible,
   children,
   className,
   ...props
}) => {
   const modalClasses = classNames(
      'modal',
      `modal--${size}`, {
      'animate-fade-in': isVisible
   });

   const modalBackgroundClasses = classNames({
      'hidden': !isVisible,
      'modal--background': isVisible,
   });

   return (
      <div
         onClick={hide}
         className={modalBackgroundClasses}
      >
         <Box
            onClick={(e) => e.stopPropagation()}
            variant="frame"
            className={modalClasses}
            {...props}
         >
            {children}
         </Box>
      </div>
   );
}

Modal.defaultProps = {
   size: "sm",
   isVisible: false,
}

Modal.propTypes = {
   hide: PropTypes.func.isRequired,
   isVisible: PropTypes.bool.isRequired,
   className: PropTypes.string,
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export { Modal };
