import React, {
   useRef,
   useState,
   useEffect,
   cloneElement,
   isValidElement,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../Button';
import { Icon } from '../Icon';

import '../../css/tackle.output.css';

export const ActionMenu = ({
   icon,
   label,
   color,
   variant,
   isSmall,
   position,
   children,
   className,
   ...props
}) => {
   const actionMenuRef = useRef();
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const handleClickAway = (e) => {
         if (actionMenuRef.current.contains(e.target)) return;
         setIsOpen(false);
      }

      document.addEventListener("mousedown", handleClickAway);
      
      return () => {
         document.removeEventListener("mousedown", handleClickAway);
      };
   }, [setIsOpen]);

   const childrenWithProps = children.map((child, i) => {
      if (isValidElement(child)) {
         return cloneElement(child, {
            key: `actionmenuitem-${i}`,
            color,
            isSmall,
         });
      }
      return null;
   });

   const actionMenuClasses = classNames({
      [`action-menu action-menu--to-${position}`]: isOpen,
      'hidden': !isOpen,
   });

   return (
      <div
         ref={actionMenuRef}
         onClick={() => setIsOpen(!isOpen)}
         className={`action-menu--wrapper ${className}`}
         {...props}
      >
         <Button
            color={color}
            variant={variant}
            isSmall={isSmall}
            label={icon
               ? <Icon as={icon} size={6} />
               : label}
         />
         <div className={actionMenuClasses}>
            {childrenWithProps}
         </div>
      </div>
   );
}

ActionMenu.defaultProps = {
   className: '',
   position: "bl",
   isSmall: false,
}

ActionMenu.propTypes = {
   icon: PropTypes.string,
   label: PropTypes.string,
   color: PropTypes.string,
   isSmall: PropTypes.bool,
   children: PropTypes.node,
   variant: PropTypes.string,
   position: PropTypes.string,
   className: PropTypes.string,
}

export const ActionMenuItem = ({
   icon,
   label,
   color,
   onClick,
   isSmall,
   className,
   ...props
}) => {
   const itemClasses = classNames(
      'action-menu--item',
      `action-menu--item--${color}`,
      className, {
      'action-menu--item--small': isSmall,
   });

   return (
      <div
         onClick={onClick}
         className={itemClasses}
         {...props}
      >
         {icon && <Icon as={icon} className="action-menu--icon" />}
         {label}
      </div>
   );
}

ActionMenuItem.defaultProps = {
   color: 'blue',
   className: '',
   isSmall: false,
}

ActionMenuItem.propTypes = {
   icon: PropTypes.string,
   isSmall: PropTypes.bool,
   onClick: PropTypes.func,
   className: PropTypes.string,
   label: PropTypes.string.isRequired,
}
