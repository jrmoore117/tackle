import React from 'react';
import { Accordion, Panel } from './Accordion';
import { Key, Bell } from 'react-feather';

export default {
   component: Accordion,
   title: 'Accordion',
};

export const ExampleAccordion = () => (
   <Accordion>
      <Panel label="About">
         <div>Info about something</div>
      </Panel>
      <Panel icon={<Bell />} label="Notifications">
         <div>Notifications settings</div>
      </Panel>
      <Panel icon={<Key />} label="Security">
         <div>Security settings</div>
      </Panel>
   </Accordion>
);
