import React, { useState, cloneElement } from 'react';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';

/*
   Todo: Add logic for removing a tab - make sure unique keys enable Tabs component to maintain proper tab order after one is deleted.
*/

const TabLabel = ({
   icon,
   index,
   color,
   title,
   active,
   newTab,
   removeTab,
   changeTab,
   multipleTabs,
}) => {
   const [hover, setHover] = useState(false);
   return (
      <div
         onClick={() => changeTab(index)}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         className={active ? `tab tab--active--${color}` : `tab tab--inactive--${color}`}
      >
         {newTab && (
            <Icon
               as="X"
               isRounded
               color={color}
               variant="clickable"
               className={hover && multipleTabs ? 'mb-1' : 'hidden'}
               onClick={removeTab}
            />
         )}
         <div className="tablabel">
            {icon && <Icon as={icon} className="mr-2" />}
            {title}
         </div>
         {<div className={`tabmarker ${active ? `tabmarker--${color}` : ''}`} />}
      </div>
   );
}

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
               <TabLabel
                  key={`tab-${i}`}
                  index={i}
                  color={color}
                  newTab={newTab}
                  icon={tab.icon}
                  title={tab.title}
                  changeTab={onClick}
                  active={index === i}
                  multipleTabs={tabs.length > 1}
                  removeTab={() => console.log('removed!')}
               />
            ))}
            {newTab && (
               <Icon
                  as="Plus"
                  size={5}
                  isRounded
                  color={color}
                  variant="clickable"
                  className="mb-2"
                  onClick={addNewTab}
               />
            )}
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
      <div {...props}>
         {children}
      </div>
   );
}

Tab.propTypes = {
   icon: PropTypes.string,
   tabTitle: PropTypes.string.isRequired,
}
