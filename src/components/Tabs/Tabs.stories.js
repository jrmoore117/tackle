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
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
            <Tab label="Tab 3" />
         </TabList>
         <PanelList>
            <Panel>
               1
            </Panel>
            <Panel>
               2
            </Panel>
            <Panel>
               3
            </Panel>
         </PanelList>
      </Tabs>
   );
}
