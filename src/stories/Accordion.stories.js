import React from 'react';
import { Accordion } from 'components/Accordion';

export default {
   component: Accordion,
   title: 'Accordion',
};

export const DefaultAccordion = () => (
   <Accordion>
      <Accordion.Panel label="Profile">
         <div>Profile information</div>
      </Accordion.Panel>
      <Accordion.Panel label="Notifications">
         <div>Notifications settings</div>
      </Accordion.Panel>
      <Accordion.Panel label="Security">
         <div>Security settings</div>
      </Accordion.Panel>
   </Accordion>
);

export const PurpleAccordionWithIcons = () => (
   <Accordion color="purple">
      <Accordion.Panel icon="User" label="Profile">
         <div>Profile information</div>
      </Accordion.Panel>
      <Accordion.Panel icon="Bell" label="Notifications">
         <div>Notifications settings</div>
      </Accordion.Panel>
      <Accordion.Panel icon="Shield" label="Security">
         <div>Security settings</div>
      </Accordion.Panel>
   </Accordion>
);
