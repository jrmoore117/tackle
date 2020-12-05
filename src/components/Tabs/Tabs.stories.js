import React, { useState } from 'react';
import { Tabs, TabList, Tab, PanelList, Panel } from 'components/Tabs';
import Icon from 'components/Icon';

export default {
   component: Tabs,
   title: 'Tabs',
};

export const DefaultTabs = () => {
   const [index, setIndex] = useState(0);
   return (
      <Tabs color="blue" index={index} onClick={setIndex}>
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
