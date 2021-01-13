import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/Box';

export const Modal = ({
   hide,
   visible,
   children,
   className,
   ...props
}) => (
   <div
      onClick={hide}
      className={visible ? 'modal-background' : 'hidden'}
   >
      <Box
         onClick={(e) => e.stopPropagation()}
         variant="frame"
         className={`modal ${visible ? 'animate-fade-in' : ''}`}
         {...props}
      >
         {children}
      </Box>
   </div>
);

Modal.defaultProps = {
   visible: false,
}

Modal.propTypes = {
   visible: PropTypes.bool.isRequired,
   className: PropTypes.string,
}

export const ModalHeader = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`modal-header ${className}`}
      {...props}
   >
      {children}
   </div>
);

export const ModalBody = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`modal-body ${className}`}
      {...props}
   >
      {children}
   </div>
);

export const ModalFooter = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`modal-footer ${className}`}
      {...props}
   >
      {children}
   </div>
);
