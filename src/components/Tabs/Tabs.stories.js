import React, { useState } from 'react';
import { Tabs, Tab } from 'components/Tabs';

export default {
   component: Tabs,
   title: 'Tabs',
};

/*
   Todo:
      - Add delete tab buttons (Will need to work out how to provide better key props so maintain order of tabs)
*/

export const DefaultTabs = () => {
   const [index, setIndex] = useState(0);
   return (
      <Tabs index={index} onClick={setIndex}>
         <Tab tabTitle="Profile">
            Profile Settings
         </Tab>
         <Tab tabTitle="Notifications">
            Notifications Settings
         </Tab>
         <Tab tabTitle="Security">
            Security Settings
         </Tab>
      </Tabs>
   );
}

export const PurpleTabsWithIcons = () => {
   const [index, setIndex] = useState(0);
   return (
      <Tabs color="purple" index={index} onClick={setIndex}>
         <Tab tabTitle="Profile" icon="User">
            Profile Settings
         </Tab>
         <Tab tabTitle="Notifications" icon="Bell">
            Notifications Settings
         </Tab>
         <Tab tabTitle="Security" icon="Shield">
            Security Settings
         </Tab>
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
            <Tab tabTitle="New Tab">
               This is a new tab.
            </Tab>
         }
      >
         <Tab tabTitle="Tab 1">
            Tab 1
         </Tab>
      </Tabs>
   );
}
