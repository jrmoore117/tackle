import React, { useState } from 'react';
import { Tabs, TabList, Tab, PanelList, Panel } from 'components/Tabs';

export default {
   component: Tabs,
   title: 'Tabs',
};

export const DefaultTabs = () => {
   const [index, setIndex] = useState(0);
   return (
      <Tabs index={index} onClick={setIndex}>
         <TabList>
            <Tab label="Profile" />
            <Tab label="Notifications" />
            <Tab label="Security" />
         </TabList>
         <PanelList>
            <Panel>
               Profile Settings
            </Panel>
            <Panel>
               Notifications Settings
            </Panel>
            <Panel>
               Security Settings
            </Panel>
         </PanelList>
      </Tabs>
   );
}

export const IconTabs = () => {
   const [index, setIndex] = useState(0);
   return (
      <Tabs index={index} onClick={setIndex}>
         <TabList>
            <Tab icon="User" label="Profile" />
            <Tab icon="Bell" label="Notifications" />
            <Tab icon="Lock" label="Security" />
         </TabList>
         <PanelList>
            <Panel>
               Profile Settings
            </Panel>
            <Panel>
               Notifications Settings
            </Panel>
            <Panel>
               Security Settings
            </Panel>
         </PanelList>
      </Tabs>
   );
}

export const GreenIconTabs = () => {
   const [index, setIndex] = useState(0);
   return (
      <Tabs color="green" index={index} onClick={setIndex}>
         <TabList>
            <Tab icon="User" label="Profile" />
            <Tab icon="Bell" label="Notifications" />
            <Tab icon="Lock" label="Security" />
         </TabList>
         <PanelList>
            <Panel>
               Profile Settings
            </Panel>
            <Panel>
               Notifications Settings
            </Panel>
            <Panel>
               Security Settings
            </Panel>
         </PanelList>
      </Tabs>
   );
}
