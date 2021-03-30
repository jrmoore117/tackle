import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

export const Modal = ({
   size,
   hide,
   isVisible,
   children,
   className,
   ...props
}) => {
   const modalClasses = classNames(
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
   size: "small",
   isVisible: false,
}

Modal.propTypes = {
   hide: PropTypes.func.isRequired,
   isVisible: PropTypes.bool.isRequired,
   className: PropTypes.string,
}

export const ModalHeader = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`modal--header ${className}`}
      {...props}
   >
      {children}
   </div>
);

ModalHeader.defaultProps = {
   className: '',
}

ModalHeader.propTypes = {
   className: PropTypes.string,
}

export const ModalBody = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`modal--body ${className}`}
      {...props}
   >
      {children}
   </div>
);

ModalBody.defaultProps = {
   className: '',
}

ModalBody.propTypes = {
   className: PropTypes.string,
}

export const ModalFooter = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`modal--footer ${className}`}
      {...props}
   >
      {children}
   </div>
);

ModalFooter.defaultProps = {
   className: '',
}

ModalFooter.propTypes = {
   className: PropTypes.string,
}
