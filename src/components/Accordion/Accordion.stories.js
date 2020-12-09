import React from 'react';
import { Accordion, Panel } from 'components/Accordion';
import Box from 'components/Box';
import useForm from 'hooks/useForm';
import Switch from 'components/Switch';

export default {
   component: Accordion,
   title: 'Accordion',
};

export const DefaultAccordion = () => {
   const { set, values: { notifications, security } } = useForm({
      initialValues: {
         notifications: false,
         security: false,
      },
   })
   return (
      <Accordion>
         <Panel label="Profile">
            <Box variant="frame" className="p-4">
               Profile Info
            </Box>
         </Panel>
         <Panel label="Notifications">
            <Box variant="frame" className="p-4">
               <Switch {...set("notifications")} label={`Notifications ${notifications ? 'on' : 'off'}`} />
            </Box>
         </Panel>
         <Panel label="Security">
            <Box variant="frame" className="p-4">
               <Switch {...set("security")} label={`2FA ${security ? 'enabled' : 'disabled'}`} />
            </Box>
         </Panel>
      </Accordion>
   );
}

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
