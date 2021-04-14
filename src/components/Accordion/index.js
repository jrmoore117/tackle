import React, { 
   useState,
   cloneElement,
   isValidElement,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'components/Icon';

export const Accordion = ({
   color,
   children,
   className,
   ...props
}) => {
   const [panelStates, setPanelStates] = useState(children.map(c => false));

   const togglePanel = (index) => {
      setPanelStates(panelStates.map((state, i) => i === index ? !state : state));
   }

   const childrenWithProps = children.map((child, i) => {
      if (isValidElement(child)) {
         return cloneElement(child, {
            key: `panel-${i}`,
            color,
            index: i,
            togglePanel,
            isOpen: panelStates[i],
            isLast: i === children.length - 1 ? true : false,
         });
      }
      return null;
   });

   return (
      <div
         className={`accordion ${className}`}
         {...props}
      >
         {childrenWithProps}
      </div>
   );
}

Accordion.defaultProps = {
   color: 'blue',
   className: '',
}

Accordion.propTypes = {
   color: PropTypes.string,
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
}

export const AccordionPanel = ({
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
   const panelHeaderClasses = classNames(
      'accordion--panel-header',
      `hover:text-${color}-500`, {
      'border-b-1': !isLast || (isLast && isOpen),
   });

   const panelIconClasses = classNames(
      'mr-2', {
      'transform rotate-90': isOpen,
   });

   const panelContentClasses = classNames(
      'accordion--panel-content', {
      'border-b-1 border-gray-200': !isLast,
   });

   return (
      <div>
         <div
            onClick={() => togglePanel(index)}
            className={panelHeaderClasses}
            {...props}
         >
            {icon
               ? <Icon as={icon} color={color} variant="shaded" size={6} padding={1} className="mr-2" />
               : <Icon as="ChevronRight" className={panelIconClasses} />}
            {label}
         </div>
         <div className={isOpen ? panelContentClasses : 'hidden'}>
            {children}
         </div>
      </div>
   );
}

AccordionPanel.defaultProps = {
   icon: '',
   color: 'blue',
}

AccordionPanel.propTypes = {
   icon: PropTypes.string,
   isOpen: PropTypes.bool,
   isLast: PropTypes.bool,
   index: PropTypes.number,
   color: PropTypes.string,
   children: PropTypes.node,
   togglePanel: PropTypes.func,
   label: PropTypes.string.isRequired,
}
