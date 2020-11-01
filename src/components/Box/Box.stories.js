import React from 'react';
import Box from './Box';

export default {
   component: Box,
   title: 'Box',
};

const Template = args => <Box {...args} />;

export const DefaultBox = Template.bind({});
DefaultBox.args = {
   children: 'Box',
};

export const Frame = Template.bind({});
Frame.args = {
   children: 'Frame',
   variant: 'frame',
};

export const TintedFrame = Template.bind({});
TintedFrame.args = {
   children: 'Tinted Frame',
   variant: 'tinted-frame',
};

export const Well = Template.bind({});
Well.args = {
   children: 'Well',
   variant: 'well',
};

export const PingBlue = Template.bind({});
PingBlue.args = {
   children: 'Box',
   variant: 'ping',
   color: 'blue',
};

export const PingRed = Template.bind({});
PingRed.args = {
   children: 'Box',
   variant: 'ping',
   color: 'red',
};

export const PingGreen = Template.bind({});
PingGreen.args = {
   children: 'Box',
   variant: 'ping',
   color: 'green',
};

export const PingYellow = Template.bind({});
PingYellow.args = {
   children: 'Box',
   variant: 'ping',
   color: 'yellow',
};

export const PingPurple = Template.bind({});
PingPurple.args = {
   children: 'Box',
   variant: 'ping',
   color: 'purple',
};

export const PingIndigo = Template.bind({});
PingIndigo.args = {
   children: 'Box',
   variant: 'ping',
   color: 'indigo',
};

export const PingGray = Template.bind({});
PingGray.args = {
   children: 'Box',
   variant: 'ping',
   color: 'gray',
};
