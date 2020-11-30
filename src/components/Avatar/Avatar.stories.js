import React from 'react';
import Avatar from 'components/Avatar';

export default {
   component: Avatar,
   title: 'Avatar',
};

const Template = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
   label: 'TK',
   color: 'blue',
};

export const Blue = Template.bind({});
Blue.args = {
   label: 'TK',
   color: 'blue',
};

export const Red = Template.bind({});
Red.args = {
   label: 'TK',
   color: 'red',
};

export const Yellow = Template.bind({});
Yellow.args = {
   label: 'TK',
   color: 'yellow',
};

export const Green = Template.bind({});
Green.args = {
   label: 'TK',
   color: 'green',
};

export const Purple = Template.bind({});
Purple.args = {
   label: 'TK',
   color: 'purple',
};

export const Indigo = Template.bind({});
Indigo.args = {
   label: 'TK',
   color: 'indigo',
};

export const Image = Template.bind({});
Image.args = {
   src: 'https://i.pravatar.cc/200',
};