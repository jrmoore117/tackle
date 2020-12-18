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

   const defaultChildrenCopyState = children.length > 1 ? [...children] : [children];
   const [childrenCopy, setChildrenCopy] = useState(defaultChildrenCopyState);

   const tabs = childrenCopy.map(child => ({
      title: child.props.tabTitle,
      icon: child.props.icon,
   }));

   const addNewTab = () => {
      setChildrenCopy([...childrenCopy, newTab]);
   }

   return (
      <div {...props}>
         <div className="tabswrapper">
            {tabs.map((tab, i) => (
               <div
                  key={`tab-${i}`}
                  onClick={() => onClick(i)}
                  className={index === i ? `tab tab--active--${color}` : `tab tab--inactive--${color}`}
               >
                  <div className="tablabel">
                     {tab.icon && <Icon as={tab.icon} className="mr-2" />}
                     {tab.title}
                  </div>
                  {index === i && <div className={`tabmarker tabmarker--${color}`}></div>}
               </div>
            ))}
            {newTab !== undefined ? (
               <Icon
                  as="Plus"
                  size={5}
                  isRounded
                  color={color}
                  variant="clickable"
                  className="newTabButton"
                  onClick={addNewTab}
               />
            ) : null}
         </div>
         <div>
            {childrenCopy.map((panel, i) => index === i
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
   index: PropTypes.number.isRequired,
   onClick: PropTypes.func.isRequired,
}

export const Tab = ({
   icon,
   tabTitle,
   children,
   ...props
}) => {
   return (
      <div tabTitle={tabTitle} icon={icon} {...props}>
         {children}
      </div>
   );
}

Tab.propTypes = {
   icon: PropTypes.string,
   tabTitle: PropTypes.string.isRequired,
}
