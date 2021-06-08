import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePopover } from 'hooks/usePopover';

export const Popover = ({
   position,
   popoverContent,
   className,
   children,
   ...props
}) => {
   const popoverRef = useRef();
   const [isOpen, setIsOpen] = usePopover(popoverRef);

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
   position: PropTypes.string,
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
   popoverContent: PropTypes.node.isRequired,
}
