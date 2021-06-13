import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Popover = ({
   isOpen,
   setIsOpen,
   position,
   popoverContent,
   className,
   children,
   ...props
}) => {
   const popoverRef = useRef();

   useEffect(() => {
      const handleClickAway = (e) => {
         if (popoverRef.current.contains(e.target)) return;
         setIsOpen(false);
      }
      document.addEventListener("mousedown", handleClickAway);      
      return () => document.removeEventListener("mousedown", handleClickAway);
   }, [setIsOpen]);

   const popoverClasses = classNames({
      'hidden': !isOpen,
      [`popover popover--to-${position}`]: isOpen,
   });

   return (
      <div
         ref={popoverRef}
         onClick={() => setIsOpen(!isOpen)}
         className={`popover--wrapper ${className}`}
         {...props}
      >
         {children}
         <div className={popoverClasses}>
            {popoverContent}
         </div>
      </div>
   );
}

Popover.defaultProps = {
   className: '',
   position: 'bl',
}

Popover.propTypes = {
   isOpen: PropTypes.bool,
   setIsOpen: PropTypes.func,
   position: PropTypes.string,
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
   popoverContent: PropTypes.node.isRequired,
}
