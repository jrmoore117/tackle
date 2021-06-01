import React, { useState, cloneElement } from 'react';
import { Icon } from '../Icon';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabLabel = ({
   icon,
   index,
   color,
   title,
   active,
   newTab,
   removeTab,
   setActiveTab,
   multipleTabs,
}) => {
   const [hover, setHover] = useState(false);

   const tabLabelClasses = classNames(
      'tab', {
      [`tab--active--${color}`]: active,
      [`tab--inactive--${color}`]: !active,
   });

   const tabDeleteClasses = classNames({
      'tab--delete--hover': multipleTabs && hover,
      'tab--delete--default': !multipleTabs || (multipleTabs && !hover),
   });

   const tabMarkerClasses = classNames(
      'tab--marker', {
      'tab--marker': !active,
      [`tab--marker--${color}`]: active,
   });

   return (
      <div
         onClick={() => setActiveTab(index)}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         className={tabLabelClasses}
      >
         {newTab && (
            <Icon
               as="X"
               isRounded
               color={color}
               variant="clickable"
               className={tabDeleteClasses}
               onClick={(e) => removeTab(e, index)}
            />
         )}
         <div className="tab--label">
            {icon && <Icon as={icon} className="mr-2" />}
            {title}
         </div>
         <div className={tabMarkerClasses} />
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

   const setActiveTab = onClick;

   const addTab = () => {
      setChildrenCopy([...childrenCopy, newTab]);
   }

   const removeTab = (event, tabIndex) => {
      event.stopPropagation();
      // delete active tab at index 0
      if (index === tabIndex && index - 1 === -1) {
         setActiveTab(0);
      }
      // delete active tab at index > 0 || delete inactive tab at lower index than active
      else if (index === tabIndex || tabIndex < index) {
         setActiveTab(index - 1);
      }
      setChildrenCopy(childrenCopy.filter((tab, i) => i !== tabIndex));
   }

   return (
      <div {...props}>
         <div className="tab--wrapper">
            {tabs.map((tab, i) => (
               <TabLabel
                  key={`tab-${i}`}
                  index={i}
                  color={color}
                  icon={tab.icon}
                  newTab={newTab}
                  title={tab.title}
                  setActiveTab={setActiveTab}
                  removeTab={removeTab}
                  active={index === i}
                  multipleTabs={tabs.length > 1}
               />
            ))}
            {newTab && (
               <Icon
                  as="Plus"
                  size="lg"
                  isRounded
                  color={color}
                  variant="clickable"
                  className="mb-2 p-1"
                  onClick={addTab}
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
