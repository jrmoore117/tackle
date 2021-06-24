import React from 'react';
import { Avatar } from 'components/Avatar';

export default {
   component: Avatar,
   title: 'Avatar',
};

const Template = args => <Avatar {...args} />;

export const Blue = Template.bind({});
Blue.args = {
   label: 'TK',
   color: 'blue',
};

export const XSRed = Template.bind({});
XSRed.args = {
   label: 'TK',
   color: 'red',
   size: 'xs',
};

export const SmallGreen = Template.bind({});
SmallGreen.args = {
   label: 'TK',
   color: 'green',
   size: 'sm',
};

export const LargePurple = Template.bind({});
LargePurple.args = {
   label: 'TK',
   color: 'purple',
   size: 'lg',
};

export const XLIndigo = Template.bind({});
XLIndigo.args = {
   label: 'TK',
   color: 'indigo',
   size: 'xl',
};

export const XLImage = Template.bind({});
XLImage.args = {
   src: 'https://i.pravatar.cc/200',
   size: 'xl',
};

export const XXLImage = Template.bind({});
XXLImage.args = {
   src: 'https://i.pravatar.cc/200',
   size: '2xl',
};

export const XXXLImage = Template.bind({});
XXXLImage.args = {
   src: 'https://i.pravatar.cc/200',
   size: '3xl',
};

// export const LargeYellow = Template.bind({});
// LargeYellow.args = {
//    label: 'TK',
//    color: 'yellow',
//    size: 'lg',
// };

// export const Gray = Template.bind({});
// Gray.args = {
//    label: 'TK',
// };