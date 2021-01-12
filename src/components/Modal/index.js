import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/Box';

const Modal = ({
   hide,
   visible,
   children,
   className,
   ...props
}) => (
   <div
      onClick={hide}
      className={visible ? "bg-opacity-50 bg-gray-0 fixed top-0 left-0 flex justify-center items-center h-screen w-screen" : "hidden"}
   >
      <Box
         onClick={(e) => e.stopPropagation()}
         variant="frame"
         className="w-96 p-4"
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

export default Modal;

export const ModalHeader = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`text-xl font-medium ${className}`}
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
      className={`mt-1 text-sm ${className}`}
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
      className={`mt-4 ${className}`}
      {...props}
   >
      {children}
   </div>
);
