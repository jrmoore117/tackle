import React from 'react';
import { Accordion, AccordionPanel } from 'components/Accordion';

export default {
   component: Accordion,
   title: 'Accordion',
};

export const DefaultAccordion = () => (
   <Accordion>
      <AccordionPanel label="Profile">
         <div>Profile information</div>
      </AccordionPanel>
      <AccordionPanel label="Notifications">
         <div>Notifications settings</div>
      </AccordionPanel>
      <AccordionPanel label="Security">
         <div>Security settings</div>
      </AccordionPanel>
   </Accordion>
);

export const PurpleAccordionWithIcons = () => (
   <Accordion color="purple">
      <AccordionPanel icon="User" label="Profile">
         <div>Profile information</div>
      </AccordionPanel>
      <AccordionPanel icon="Bell" label="Notifications">
         <div>Notifications settings</div>
      </AccordionPanel>
      <AccordionPanel icon="Shield" label="Security">
         <div>Security settings</div>
      </AccordionPanel>
   </Accordion>
);
