import React from 'react';
import { Accordion, Panel } from 'components/Accordion';
import Icon from 'components/Icon';

export default {
   component: Accordion,
   title: 'Accordion',
};

export const DefaultAccordion = () => (
   <div>
      <p className="flex items-center text-offwhite">If you default to dark theme, click <Icon as="Image" className="mx-2" /> above to select light theme.</p>
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
   </div>
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
