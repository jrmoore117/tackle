import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'react-feather';
import PropTypes from 'prop-types';

export const Accordion = ({
   children,
   ...props
}) => {
   const [panels, setPanels] = useState(children.map(c => false));
   const togglePanel = (index) => {
      setPanels(panels.map((panel, i) => i === index ? !panel : panel));
   }
   const childrenWithProps = React.Children.map(children, (child, i) => {
      if (React.isValidElement(child)) {
         return React.cloneElement(child, { 
            togglePanel,
            index: i,
            isOpen: panels[i],
            isLast: i === children.length - 1 ? true : false,
         });
      }
   });
   return (
      <div className="accordion">
         {childrenWithProps}
      </div>
   );
}

Accordion.propTypes = {
   children: PropTypes.array,
}

export const Panel = ({
   label,
   children,
   togglePanel,
   icon,
   index,
   isOpen,
   isLast,
   ...props
}) => (
   <div>
      <div
         className={`accordion-panel-header ${isLast && !isOpen ? '' : 'border-b-1'}`}
         onClick={() => togglePanel(index)}
      >
         {icon
            ? React.cloneElement(icon, { className: 'h-4 w-4 mr-2' })
            : isOpen
               ? <ChevronRight className="h-4 w-4 mr-2 transform rotate-90" />
               : <ChevronRight className="h-4 w-4 mr-2" />}
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

Panel.propTypes = {
   label: PropTypes.string.isRequired,
   children: PropTypes.array.isRequired,
   togglePanel: PropTypes.func.isRequired,
   index: PropTypes.number.isRequired,
   isOpen: PropTypes.bool.isRequired,
   isLast: PropTypes.bool.isRequired,
}
