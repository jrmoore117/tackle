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

export const Well = Template.bind({});
Well.args = {
   children: 'Well',
   variant: 'well',
};

export const Blue = Template.bind({});
Blue.args = {
   children: 'Box',
   color: 'blue',
};

export const Red = Template.bind({});
Red.args = {
   children: 'Box',
   color: 'red',
};

export const Green = Template.bind({});
Green.args = {
   children: 'Box',
   color: 'green',
};

export const Purple = Template.bind({});
Purple.args = {
   children: 'Box',
   color: 'purple',
};

export const Indigo = Template.bind({});
Indigo.args = {
   children: 'Box',
   color: 'indigo',
};

export const BlueFrame = Template.bind({});
BlueFrame.args = {
   children: 'Frame',
   variant: 'frame',
   color: 'blue',
};

export const RedFrame = Template.bind({});
RedFrame.args = {
   children: 'Frame',
   variant: 'frame',
   color: 'red',
};

export const GreenFrame = Template.bind({});
GreenFrame.args = {
   children: 'Frame',
   variant: 'frame',
   color: 'green',
};

export const YellowFrame = Template.bind({});
YellowFrame.args = {
   children: 'Frame',
   variant: 'frame',
   color: 'yellow',
};

export const PurpleFrame = Template.bind({});
PurpleFrame.args = {
   children: 'Frame',
   variant: 'frame',
   color: 'purple',
};

export const IndigoFrame = Template.bind({});
IndigoFrame.args = {
   children: 'Frame',
   variant: 'frame',
   color: 'indigo',
};

export const GrayFrame = Template.bind({});
GrayFrame.args = {
   children: 'Frame',
   variant: 'frame',
   color: 'gray',
};

export const BlueWell = Template.bind({});
BlueWell.args = {
   children: 'Well',
   variant: 'well',
   color: 'blue',
};

export const RedWell = Template.bind({});
RedWell.args = {
   children: 'Well',
   variant: 'well',
   color: 'red',
};

export const GreenWell = Template.bind({});
GreenWell.args = {
   children: 'Well',
   variant: 'well',
   color: 'green',
};

export const YellowWell = Template.bind({});
YellowWell.args = {
   children: 'Well',
   variant: 'well',
   color: 'yellow',
};

export const PurpleWell = Template.bind({});
PurpleWell.args = {
   children: 'Well',
   variant: 'well',
   color: 'purple',
};

export const IndigoWell = Template.bind({});
IndigoWell.args = {
   children: 'Well',
   variant: 'well',
   color: 'indigo',
};

export const GrayWell = Template.bind({});
GrayWell.args = {
   children: 'Well (same as default well)',
   variant: 'well',
   color: 'gray',
};
