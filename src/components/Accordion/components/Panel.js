import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../../Icon';
import { useAccordionContext } from "../useAccordionContext";

const Panel = ({
   icon,
   label,
   children,
   ...props
}) => {

   const { color } = useAccordionContext();
   const [isOpen, setIsOpen] = useState(false);

   const panelHeaderClasses = classNames(
      'accordion--panel--header',
      `accordion--panel--header--${color}`
   );

   const panelIconClasses = classNames(
      'mr-2', {
      'transform rotate-90': isOpen,
   });

   const panelContentClasses = classNames({
      'hidden': !isOpen,
      'accordion--panel--content': isOpen,
   });

   return (
      <div className="accordion--panel">
         <div
            onClick={() => setIsOpen(!isOpen)}
            className={panelHeaderClasses}
            {...props}
         >
            {icon
               ? <Icon as={icon} color={color} variant="shaded" size="xl" className="mr-2 p-1" />
               : <Icon as="ChevronRight" className={panelIconClasses} />}
            {label}
         </div>
         <div className={panelContentClasses}>
            {children}
         </div>
      </div>
   );
}

Panel.defaultProps = {
   icon: '',
   color: 'blue',
}

Panel.propTypes = {
   icon: PropTypes.string,
   color: PropTypes.string,
   children: PropTypes.node,
   label: PropTypes.string.isRequired,
}

export { Panel };
