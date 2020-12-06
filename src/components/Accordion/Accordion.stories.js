import React from 'react';
import { Accordion, Panel } from 'components/Accordion';
import Icon from 'components/Icon';

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

export const GreenAccordionWithIcons = () => (
   <Accordion color="green">
      <Panel icon="User" label="Profile">
         <div>Profile information</div>
      </Panel>
      <Panel icon="Bell" label="Notifications">
         <div>Notifications settings</div>
      </Panel>
      <Panel icon="Lock" label="Security">
         <div>Security settings</div>
      </Panel>
   </Accordion>
);
