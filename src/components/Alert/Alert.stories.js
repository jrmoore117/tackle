import React from 'react';
import Alert from 'components/Alert';
import Button from 'components/Button';
import Icon from 'components/Icon';

export default {
   component: Alert,
   title: 'Alert',
};

const Template = args => <Alert {...args} />;

export const AlertBlue = Template.bind({});
AlertBlue.args = {
   color: 'blue',
   icon: 'ArrowUpCircle',
   heading: 'Update Available',
   message: 'Please update to the latest version of Tackle.',
   action: <Button color="blue" label="Update" />,
};

export const AlertRed = Template.bind({});
AlertRed.args = {
   color: 'red',
   icon: 'AlertCircle',
   message: 'An error has occurred!',
   action: <Icon as="X" color="red" variant="clickable" size={6} padding={1} />,
};

export const AlertYellow = Template.bind({});
AlertYellow.args = {
   color: 'yellow',
   icon: 'AlertCircle',
   message: 'Warning! This cannot be undone.',
   action: <Icon as="X" color="yellow" variant="clickable" size={6} padding={1} />,
};

export const AlertGreen = Template.bind({});
AlertGreen.args = {
   color: 'green',
   icon: 'CheckCircle',
   message: 'Your transaction has been approved!',
   action: <Icon as="X" color="green" variant="clickable" size={6} padding={1} />,
};

export const AlertPurple = Template.bind({});
AlertPurple.args = {
   color: 'purple',
   icon: 'Info',
   message: "A new version of Tackle will be available when it's available.",
   action: <Icon as="X" color="purple" variant="clickable" size={6} padding={1} />,
};

export const AlertIndigo = Template.bind({});
AlertIndigo.args = {
   color: 'indigo',
   icon: 'Clock',
   heading: 'Update Scheduled',
   message: "Your update has been scheduled for tomorrow.",
   action: <Icon as="X" color="indigo" variant="clickable" size={6} padding={1} />,
};
