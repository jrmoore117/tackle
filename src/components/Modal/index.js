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
      className={visible ? 'modalbackground' : 'hidden'}
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
   hide: PropTypes.func.isRequired,
   visible: PropTypes.bool.isRequired,
   className: PropTypes.string,
}

export const ModalHeader = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`modalheader ${className}`}
      {...props}
   >
      {children}
   </div>
);

ModalHeader.propTypes = {
   className: PropTypes.string,
}

export const ModalBody = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`modalbody ${className}`}
      {...props}
   >
      {children}
   </div>
);

ModalBody.propTypes = {
   className: PropTypes.string,
}

export const ModalFooter = ({
   className,
   children,
   ...props
}) => (
   <div
      className={`modalfooter ${className}`}
      {...props}
   >
      {children}
   </div>
);

ModalFooter.propTypes = {
   className: PropTypes.string,
}
