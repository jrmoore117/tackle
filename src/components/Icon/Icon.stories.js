import React from 'react';
import Icon from 'components/Icon';

export default {
   component: Icon,
   title: 'Icon',
};

const Template = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
   as: 'AlertCircle',
};

export const DefaultGreen = Template.bind({});
DefaultGreen.args = {
   as: 'DollarSign',
   color: 'green',
};

export const LargeShadedPurple = Template.bind({});
LargeShadedPurple.args = {
   as: 'Twitch',
   size: 10,
   color: 'purple',
   variant: 'shaded',
};

export const ShadedGreenRounded = Template.bind({});
ShadedGreenRounded.args = {
   as: 'Check',
   size: 6,
   isRounded: true,
   color: 'green',
   variant: 'shaded',
};

export const ClickableRounded = Template.bind({});
ClickableRounded.args = {
   as: 'X',
   size: 6,
   color: 'blue',
   isRounded: true,
   variant: 'clickable',
   onClick: () => console.log("Deleted!"),
};
