import React from 'react';
import { Accordion, Panel } from 'components/Accordion';

export default {
   component: Accordion,
   title: 'Accordion',
};

export const DefaultAccordion = () => (
   <Accordion>
      <Panel  label="Profile">
         <div>Profile information</div>
      </Panel>
      <Panel  label="Notifications">
         <div>Notifications settings</div>
      </Panel>
      <Panel label="Security">
         <div>Security settings</div>
      </Panel>
   </Accordion>
);

export const PurpleAccordionWithIcons = () => (
   <Accordion color="purple">
      <Panel icon="User" label="Profile">
         <div>Profile information</div>
      </Panel>
      <Panel icon="Bell" label="Notifications">
         <div>Notifications settings</div>
      </Panel>
      <Panel icon="Shield" label="Security">
         <div>Security settings</div>
      </Panel>
   </Accordion>
);
