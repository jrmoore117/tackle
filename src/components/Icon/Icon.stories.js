import React from 'react';
import Icon from 'components/Icon';
import { 
   Check,
   Twitch,
   DollarSign,
   AlertCircle,
   X,
} from 'react-feather';

export default {
   component: Icon,
   title: 'Icon',
};

const Template = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
   as: AlertCircle,
};

export const SmallDefaultGreen = Template.bind({});
SmallDefaultGreen.args = {
   as: DollarSign,
   size: '4',
   color: 'green',
};

export const LargeShadedPurple = Template.bind({});
LargeShadedPurple.args = {
   as: Twitch,
   size: '10',
   color: 'purple',
   variant: 'shaded',
};

export const ShadedGreenRounded = Template.bind({});
ShadedGreenRounded.args = {
   as: Check,
   size: 6,
   rounded: true,
   color: 'green',
   variant: 'shaded',
};

export const ClickableRounded = Template.bind({});
ClickableRounded.args = {
   as: X,
   size: 6,
   color: 'blue',
   rounded: true,
   variant: 'clickable',
   onClick: () => console.log("Deleted!"),
};
