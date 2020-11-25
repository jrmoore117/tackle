import React from 'react';
import Box from 'components/Box';

export default {
   component: Box,
   title: 'Box',
};

const Template = args => <Box {...args} />;

export const DefaultBox = Template.bind({});
DefaultBox.args = {
   className: 'p-4',
   children: 'Box',
};

export const Frame = Template.bind({});
Frame.args = {
   className: 'p-4',
   children: 'Frame',
   variant: 'frame',
};

export const Well = Template.bind({});
Well.args = {
   className: 'p-4',
   children: 'Well',
   variant: 'well',
};

export const Blue = Template.bind({});
Blue.args = {
   className: 'p-4',
   children: 'Box',
   color: 'blue',
};

export const Red = Template.bind({});
Red.args = {
   className: 'p-4',
   children: 'Box',
   color: 'red',
};

export const Green = Template.bind({});
Green.args = {
   className: 'p-4',
   children: 'Box',
   color: 'green',
};

export const Yellow = Template.bind({});
Yellow.args = {
   className: 'p-4',
   children: 'Box',
   color: 'yellow',
};

export const Purple = Template.bind({});
Purple.args = {
   className: 'p-4',
   children: 'Box',
   color: 'purple',
};

export const Indigo = Template.bind({});
Indigo.args = {
   className: 'p-4',
   children: 'Box',
   color: 'indigo',
};

export const BlueFrame = Template.bind({});
BlueFrame.args = {
   className: 'p-4',
   children: 'Frame',
   variant: 'frame',
   color: 'blue',
};

export const RedFrame = Template.bind({});
RedFrame.args = {
   className: 'p-4',
   children: 'Frame',
   variant: 'frame',
   color: 'red',
};

export const GreenFrame = Template.bind({});
GreenFrame.args = {
   className: 'p-4',
   children: 'Frame',
   variant: 'frame',
   color: 'green',
};

export const YellowFrame = Template.bind({});
YellowFrame.args = {
   className: 'p-4',
   children: 'Frame',
   variant: 'frame',
   color: 'yellow',
};

export const PurpleFrame = Template.bind({});
PurpleFrame.args = {
   className: 'p-4',
   children: 'Frame',
   variant: 'frame',
   color: 'purple',
};

export const IndigoFrame = Template.bind({});
IndigoFrame.args = {
   className: 'p-4',
   children: 'Frame',
   variant: 'frame',
   color: 'indigo',
};

export const GrayFrame = Template.bind({});
GrayFrame.args = {
   className: 'p-4',
   children: 'Frame',
   variant: 'frame',
   color: 'gray',
};

export const BlueWell = Template.bind({});
BlueWell.args = {
   className: 'p-4',
   children: 'Well',
   variant: 'well',
   color: 'blue',
};

export const RedWell = Template.bind({});
RedWell.args = {
   className: 'p-4',
   children: 'Well',
   variant: 'well',
   color: 'red',
};

export const GreenWell = Template.bind({});
GreenWell.args = {
   className: 'p-4',
   children: 'Well',
   variant: 'well',
   color: 'green',
};

export const YellowWell = Template.bind({});
YellowWell.args = {
   className: 'p-4',
   children: 'Well',
   variant: 'well',
   color: 'yellow',
};

export const PurpleWell = Template.bind({});
PurpleWell.args = {
   className: 'p-4',
   children: 'Well',
   variant: 'well',
   color: 'purple',
};

export const IndigoWell = Template.bind({});
IndigoWell.args = {
   className: 'p-4',
   children: 'Well',
   variant: 'well',
   color: 'indigo',
};

export const GrayWell = Template.bind({});
GrayWell.args = {
   className: 'p-4',
   children: 'Well (same as default well)',
   variant: 'well',
   color: 'gray',
};
