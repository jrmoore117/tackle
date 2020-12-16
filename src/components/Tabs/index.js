import React, { useState, cloneElement } from 'react';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';

export const Tabs = ({
   index,
   color,
   newTab,
   onClick,
   children,
   ...props
}) => {
   
   const [tabs, setTabs] = useState({
      tabs: children[0].props.children,
      panels: children[1].props.children,
   });
   
   const defaultNewTab = tabs.tabs[newTab];
   const defaultNewPanel = tabs.panels[newTab];
   
   const addNewTab = () => {
      setTabs({
         tabs: [...tabs.tabs, defaultNewTab],
         panels: [...tabs.panels, defaultNewPanel]  
      });
   }
   
   return (
      <div {...props}>
         <div className="tabswrapper">
            {tabs.tabs.map((tab, i) => (
               cloneElement(tab, {
                  color,
                  key: `tab-${i}`,
                  active: index === i,
                  onClick: () => onClick(i),
                  className: index === i ? `tab tab--active--${color}` : `tab tab--inactive--${color}`,
               })
            ))}
            {newTab !== undefined ? (
               <Icon
                  as="Plus"
                  size={5}
                  isRounded
                  color="blue"
                  variant="clickable"
                  className="newTabButton"
                  onClick={addNewTab}
               />
            ) : null}
         </div>
         <div>
            {tabs.panels.map((panel, i) => index === i
               ? cloneElement(panel, { key: `panel-${i}`, className: 'pt-4' })
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
   newTab: PropTypes.number,
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
         <div className="tablabel">
            {icon && <Icon as={icon} className="mr-2" />}
            {label}
         </div>
         {active && <div className={`tabmarker tabmarker--${color}`}></div>}
      </div>
   );
}

Tab.propTypes = {
   active: PropTypes.bool,
   icon: PropTypes.string,
   color: PropTypes.string,
   label: PropTypes.string.isRequired,
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
