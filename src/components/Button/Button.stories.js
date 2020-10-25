import React from 'react';
import Button from './Button';
import { Twitter, Twitch, DollarSign } from 'react-feather';

export default {
   component: Button,
   title: 'Button',
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   label: 'Primary',
   onClick: () => console.log('working!'),
};

export const PrimaryBlue = Template.bind({});
PrimaryBlue.args = {
   label: 'Primary',
   variant: 'primary',
   color: 'blue',
};

export const PrimaryRed = Template.bind({});
PrimaryRed.args = {
   label: 'Primary',
   variant: 'primary',
   color: 'red',
};

export const PrimaryGreen = Template.bind({});
PrimaryGreen.args = {
   label: 'Primary',
   variant: 'primary',
   color: 'green',
};

export const PrimaryPurple = Template.bind({});
PrimaryPurple.args = {
   label: 'Primary',
   variant: 'primary',
   color: 'purple',
};

export const PrimaryIndigo = Template.bind({});
PrimaryIndigo.args = {
   label: 'Primary',
   variant: 'primary',
   color: 'indigo',
};

export const PrimaryWithLeftIcon = Template.bind({});
PrimaryWithLeftIcon.args = {
   label: 'Tweet',
   variant: 'primary',
   color: 'blue',
   leftIcon: <Twitter />,
};

export const PrimaryIconOnly = Template.bind({});
PrimaryIconOnly.args = {
   label: <Twitch />,
   variant: 'primary',
   color: 'purple',
};

export const PrimarySmallWithRightIcon = Template.bind({});
PrimarySmallWithRightIcon.args = {
   label: 'Cash Out',
   variant: 'primary',
   color: 'green',
   isSmall: true,
   rightIcon: <DollarSign />,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
   label: 'Primary Small',
   variant: 'primary',
   isSmall: true,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
   label: 'Primary Disabled',
   variant: 'primary',
   isDisabled: true,
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
   label: 'Primary',
   variant: 'primary',
   isLoading: true,
};

export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
   label: 'Secondary',
   variant: 'secondary',
};

export const SecondaryBlue = Template.bind({});
SecondaryBlue.args = {
   label: 'Secondary',
   variant: 'secondary',
   color: 'blue',
};

export const SecondaryRed = Template.bind({});
SecondaryRed.args = {
   label: 'Secondary',
   variant: 'secondary',
   color: 'red',
};

export const SecondaryGreen = Template.bind({});
SecondaryGreen.args = {
   label: 'Secondary',
   variant: 'secondary',
   color: 'green',
};

export const SecondaryPurple = Template.bind({});
SecondaryPurple.args = {
   label: 'Secondary',
   variant: 'secondary',
   color: 'purple',
};

export const SecondaryIndigo = Template.bind({});
SecondaryIndigo.args = {
   label: 'Secondary',
   variant: 'secondary',
   color: 'indigo',
};

export const SecondaryWithLeftIcon = Template.bind({});
SecondaryWithLeftIcon.args = {
   label: 'Tweet',
   variant: 'secondary',
   color: 'blue',
   leftIcon: <Twitter />,
};

export const SecondarySmallWithRightIcon = Template.bind({});
SecondarySmallWithRightIcon.args = {
   label: 'Cash Out',
   variant: 'secondary',
   color: 'green',
   isSmall: true,
   rightIcon: <DollarSign />,
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
   label: 'Secondary Small',
   variant: 'secondary',
   isSmall: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
   label: 'Secondary Disabled',
   variant: 'secondary',
   isDisabled: true,
};

export const SecondaryLoading = Template.bind({});
SecondaryLoading.args = {
   label: 'Secondary',
   variant: 'secondary',
   isLoading: true,
};