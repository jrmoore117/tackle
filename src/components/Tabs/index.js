import React, { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({
   index,
   onClick,
   children,
   ...props
}) => {
   const tabs = children[0].props.children;
   const panels = children[1].props.children;
   return (
      <div>
         <div className="flex border-b-1 border-gray-200">
            {tabs.map((tab, i) => (
               cloneElement(tab, {
                  key: `tab-${i}`,
                  onClick: () => onClick(i),
                  className: index === i ? 'py-2 px-4 border-b-2 border-blue-500 cursor-pointer select-none rounded-tr rounded-tl transition-colors duration-150 hover:bg-blue-0' : 'py-2 px-4 cursor-pointer select-none rounded-tr rounded-tl transition-colors duration-150 hover:bg-blue-0',
               })
            ))}
         </div>
         <div>
            {panels.map((panel, i) => index === i
               ? cloneElement(panel, { key: `panel-${i}`, className: 'p-4' })
               : cloneElement(panel, { key: `panel-${i}`, className: 'hidden' })
            )}
         </div>
      </div>
   );
}

Tabs.propTypes = {

}

export const TabList = ({
   children,
   ...props
}) => {
   return (
      <div>
         {children}
      </div>
   );
}

TabList.propTypes = {

}

export const Tab = ({
   children,
   ...props
}) => {
   return (
   <div {...props}>{children}</div>
   );
}

Tab.propTypes = {

}

export const PanelList = ({
   children,
   ...props
}) => {
   return (
      <div></div>
   );
}

PanelList.propTypes = {

}

export const Panel = ({
   children,
   ...props
}) => {
   return (
      <div {...props}>{children}</div>
   );
}

Panel.propTypes = {

}
