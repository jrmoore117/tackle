import React from 'react';
import Badge from './Badge';

export default {
   component: Badge,
   title: 'Badge',
};

const Template = args => <Badge {...args} />;

export const DefaultGray = Template.bind({});
DefaultGray.args = {
   label: 'Badge',
};

export const DefaultBlue = Template.bind({});
DefaultBlue.args = {
   label: 'Badge',
   color: 'blue',
};

export const DefaultRed = Template.bind({});
DefaultRed.args = {
   label: 'Live',
   color: 'red',
   pingColor: 'red',
};

export const DefaultGreen = Template.bind({});
DefaultGreen.args = {
   label: 'Badge',
   color: 'green',
   pingColor: 'green',
};

export const DefaultYellow = Template.bind({});
DefaultYellow.args = {
   label: 'Badge',
   color: 'yellow',
};

export const DefaultPurple = Template.bind({});
DefaultPurple.args = {
   label: 'Badge',
   color: 'purple',
};

export const DefaultIndigo = Template.bind({});
DefaultIndigo.args = {
   label: 'Badge',
   color: 'indigo',
};

export const SolidGray = Template.bind({});
SolidGray.args = {
   variant: 'solid',
   label: 'Badge',
};

export const SolidBlue = Template.bind({});
SolidBlue.args = {
   label: 'Badge',
   variant: 'solid',
   color: 'blue',
};

export const SolidRed = Template.bind({});
SolidRed.args = {
   label: 'Live',
   variant: 'solid',
   color: 'red',
   pingColor: 'red'
};

export const SolidGreen = Template.bind({});
SolidGreen.args = {
   label: 'Badge',
   variant: 'solid',
   color: 'green',
};

export const SolidYellow = Template.bind({});
SolidYellow.args = {
   label: 'Badge',
   variant: 'solid',
   color: 'yellow',
};

export const SolidPurple = Template.bind({});
SolidPurple.args = {
   label: 'Badge',
   variant: 'solid',
   color: 'purple',
   pingColor: 'purple',
};

export const SolidIndigo = Template.bind({});
SolidIndigo.args = {
   label: 'Badge',
   variant: 'solid',
   color: 'indigo',
};

export const BlueRounded = Template.bind({});
BlueRounded.args = {
   label: 'Badge',
   color: 'blue',
   isRounded: true,
};

export const BlueSolidSmall = Template.bind({});
BlueSolidSmall.args = {
   label: 'Badge',
   variant: 'solid',
   color: 'blue',
   isSmall: true,
};
