import React, { useState } from 'react';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';

export const Accordion = ({
   color,
   children,
   className,
   ...props
}) => {
   const [panels, setPanels] = useState(children.map(c => false));
   const togglePanel = (index) => {
      setPanels(panels.map((panel, i) => i === index ? !panel : panel));
   }
   const childrenWithProps = children.map((child, i) => {
      if (React.isValidElement(child)) {
         return React.cloneElement(child, {
            key: `panel-${i}`,
            color,
            index: i,
            togglePanel,
            isOpen: panels[i],
            isLast: i === children.length - 1 ? true : false,
         });
      }
      return null;
   });
   return (
      <div className={`accordion ${className || ''}`}>
         {childrenWithProps}
      </div>
   );
}

Accordion.defaultProps = {
   color: 'blue',
}

Accordion.propTypes = {
   color: PropTypes.string,
   children: PropTypes.array,
}

export const Panel = ({
   icon,
   label,
   color,
   index,
   isOpen,
   isLast,
   children,
   togglePanel,
   ...props
}) => {
   return (
      <div>
         <div
            className={`accordion-panel-header hover:text-${color}-500 ${isLast && !isOpen ? '' : 'border-b-1'}`}
            onClick={() => togglePanel(index)}
         >
            {icon
               ? <Icon as={icon} className="mr-2" />
               : <Icon as="ChevronRight" className={`mr-2 ${isOpen ? 'transform rotate-90' : ''}`} />}
            {label}
         </div>
         <div
            className={isOpen
               ? `accordion-panel-content ${!isLast ? 'border-b-1 border-gray-200' : ''}`
               : 'hidden'}
         >
            {children}
         </div>
      </div>
   );
}

Panel.propTypes = {
   label: PropTypes.string,
   togglePanel: PropTypes.func,
   index: PropTypes.number,
   isOpen: PropTypes.bool,
   isLast: PropTypes.bool,
}
