import React from 'react';
import Button from './Button';

export default {
   component: Button,
   title: 'Button',
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   label: 'Save changes',
};

export const PrimaryBlue = Template.bind({});
PrimaryBlue.args = {
   label: 'Save changes',
   variant: 'primary',
   color: 'blue',
};

export const PrimaryRed = Template.bind({});
PrimaryRed.args = {
   label: 'Save changes',
   variant: 'primary',
   color: 'red',
};

export const PrimaryGreen = Template.bind({});
PrimaryGreen.args = {
   label: 'Save changes',
   variant: 'primary',
   color: 'green',
};

export const PrimaryPurple = Template.bind({});
PrimaryPurple.args = {
   label: 'Save changes',
   variant: 'primary',
   color: 'purple',
};

export const PrimaryIndigo = Template.bind({});
PrimaryIndigo.args = {
   label: 'Save changes',
   variant: 'primary',
   color: 'indigo',
};

export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
   label: 'Save changes',
   variant: 'secondary',
};

export const SecondaryBlue = Template.bind({});
SecondaryBlue.args = {
   label: 'Save changes',
   variant: 'secondary',
   color: 'blue',
};

export const SecondaryRed = Template.bind({});
SecondaryRed.args = {
   label: 'Save changes',
   variant: 'secondary',
   color: 'red',
};

export const SecondaryGreen = Template.bind({});
SecondaryGreen.args = {
   label: 'Save changes',
   variant: 'secondary',
   color: 'green',
};

export const SecondaryPurple = Template.bind({});
SecondaryPurple.args = {
   label: 'Save changes',
   variant: 'secondary',
   color: 'purple',
};

export const SecondaryIndigo = Template.bind({});
SecondaryIndigo.args = {
   label: 'Save changes',
   variant: 'secondary',
   color: 'indigo',
};
