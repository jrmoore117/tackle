import React from 'react';
import { Accordion, Panel } from './Accordion';
import { Key } from 'react-feather';

export default {
   component: Accordion,
   title: 'Accordion',
};

export const ExampleAccordion = () => (
   <Accordion>
      <Panel icon={<Key />} label="Security">
         <div>Ready...</div>
      </Panel>
      <Panel label="Panel 2">
         <div>Set...</div>
      </Panel>
      <Panel label="Panel 3">
         <div>Go!</div>
      </Panel>
   </Accordion>
);
