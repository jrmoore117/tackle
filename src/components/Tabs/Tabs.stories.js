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
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
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
