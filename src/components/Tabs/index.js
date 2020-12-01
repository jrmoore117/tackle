import React, { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({
   index,
   color,
   onClick,
   children,
   ...props
}) => {
   const tabs = children[0].props.children;
   const panels = children[1].props.children;
   return (
      <div {...props}>
         <div className="flex border-b-1 border-gray-200">
            {tabs.map((tab, i) => (
               cloneElement(tab, {
                  color,
                  key: `tab-${i}`,
                  active: index === i,
                  onClick: () => onClick(i),
                  className: index === i ? `pr-8 text-blue-500 cursor-pointer select-none transition-colors duration-150 text-${color}-500` : `pr-8 text-gray-900 cursor-pointer select-none transition-colors duration-150 hover:text-${color}-500`,
               })
            ))}
         </div>
         <div>
            {panels.map((panel, i) => index === i
               ? cloneElement(panel, { key: `panel-${i}`, className: 'py-4 text-gray-900 ' })
               : cloneElement(panel, { key: `panel-${i}`, className: 'hidden' })
            )}
         </div>
      </div>
   );
}

Tabs.defaultProps = {
   color: 'blue',
}

Tabs.propTypes = {
   color: PropTypes.string,
   index: PropTypes.number.isRequired,
   onClick: PropTypes.func.isRequired,
}

export const TabList = ({ children }) => {
   return (
      <div>
         {children}
      </div>
   );
}

export const Tab = ({
   icon,
   color,
   label,
   active,
   ...props
}) => {
   return (
   <div {...props}>
      <div className="mb-1 flex items-center">
         {icon && cloneElement(icon, { className: 'stroke-2 mr-2' })}
         {label}
      </div>
      {active && <div className={`h-0.5 bg-${color}-500 rounded-tr rounded-tl animate-radio-ping-blue`}></div>}
   </div>
   );
}

Tab.propTypes = {
   color: PropTypes.string,
   label: PropTypes.string.isRequired,
   active: PropTypes.bool.isRequired,
}

export const PanelList = ({ children }) => {
   return (
      <div></div>
   );
}

export const Panel = ({
   children,
   ...props
}) => {
   return (
      <div {...props}>
         {children}
      </div>
   );
}

Panel.propTypes = {

}
