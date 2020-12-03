import React from 'react';
import Icon from 'components/Icon';

export default {
   component: Icon,
   title: 'Icon',
};

const Template = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
   as: 'Edit',
};

export const Red = Template.bind({});
Red.args = {
   as: 'Heart',
   color: 'red',
   size: 6,
   className: 'fill-current',
};

export const Green = Template.bind({});
Green.args = {
   as: 'DollarSign',
   color: 'green',
};

export const Yellow = Template.bind({});
Yellow.args = {
   as: 'Shield',
   size: 10,
   color: 'yellow',
   variant: 'clickable',
   onClick: () => {},
   className: 'fill-current',
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

export const ClickableBlueRounded = Template.bind({});
ClickableBlueRounded.args = {
   as: 'X',
   size: 6,
   color: 'blue',
   isRounded: true,
   variant: 'clickable',
   onClick: () => console.log("Deleted!"),
};
