import React, { useState, cloneElement } from 'react';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';

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
   return (
      <div
         onClick={() => setActiveTab(index)}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         className={active ? `tab tab--active--${color}` : `tab tab--inactive--${color}`}
      >
         {newTab && (
            <Icon
               as="X"
               isRounded
               padding={1}
               color={color}
               variant="clickable"
               className={hover && multipleTabs ? 'tab--delete--hover' : 'tab--delete--default'}
               onClick={(e) => removeTab(e, index)}
            />
         )}
         <div className="tab--label">
            {icon && <Icon as={icon} className="mr-2" />}
            {title}
         </div>
         <div className={active ? `tab--marker tab--marker--${color}` : 'tab--marker'} />
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
                  size={5}
                  isRounded
                  padding={1}
                  color={color}
                  variant="clickable"
                  className="mb-2"
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
