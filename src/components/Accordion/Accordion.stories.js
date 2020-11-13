import React from 'react';
import { Accordion, Panel } from 'components/Accordion';
import { User, Key, Bell } from 'react-feather';

export default {
   component: Accordion,
   title: 'Accordion',
};

export const DefaultAccordion = () => (
   <Accordion>
      <Panel label="About">
         <div>Info about something</div>
      </Panel>
      <Panel label="Notifications">
         <div>Notifications settings</div>
      </Panel>
      <Panel label="Security">
         <div>Security settings</div>
      </Panel>
   </Accordion>
);

export const AccordionWithIcons = () => (
   <Accordion color="purple">
      <Panel icon={<User />} label="Profile">
         <div>Profile information</div>
      </Panel>
      <Panel icon={<Bell />} label="Notifications">
         <div>Notifications settings</div>
      </Panel>
      <Panel icon={<Key />} label="Security">
         <div>Security settings</div>
      </Panel>
   </Accordion>
);
