import React, { useState } from 'react';
import { Tabs } from 'components/Tabs';

export default {
   component: Tabs,
   title: 'Tabs',
};

export const DefaultTabs = () => {
   const [index, setIndex] = useState(0);
   return (
      <Tabs index={index} onClick={setIndex}>
         <Tabs.Tab tabTitle="Profile">
            Profile Settings
         </Tabs.Tab>
         <Tabs.Tab tabTitle="Notifications">
            Notifications Settings
         </Tabs.Tab>
         <Tabs.Tab tabTitle="Security">
            Security Settings
         </Tabs.Tab>
      </Tabs>
   );
}

export const PurpleTabsWithIcons = () => {
   const [index, setIndex] = useState(0);
   return (
      <Tabs color="purple" index={index} onClick={setIndex}>
         <Tabs.Tab tabTitle="Profile" icon="User">
            Profile Settings
         </Tabs.Tab>
         <Tabs.Tab tabTitle="Notifications" icon="Bell">
            Notifications Settings
         </Tabs.Tab>
         <Tabs.Tab tabTitle="Security" icon="Shield">
            Security Settings
         </Tabs.Tab>
      </Tabs>
   );
}

export const TabsWithAddNewTab = () => {
   const [index, setIndex] = useState(0);
   return (
      <Tabs
         index={index}
         onClick={setIndex}
         newTab={
            <Tabs.Tab tabTitle="New Tab">
               This is a new tab.
            </Tabs.Tab>
         }
      >
         <Tabs.Tab tabTitle="Tab 1">
            Tab 1
         </Tabs.Tab>
      </Tabs>
   );
}
