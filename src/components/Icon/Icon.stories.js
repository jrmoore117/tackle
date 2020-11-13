import React from 'react';
import Icon from 'components/Icon';
import { 
   Twitch,
   Twitter,
   DollarSign,
   AlertCircle,
} from 'react-feather';

export default {
   component: Icon,
   title: 'Icon',
};

const Template = args => <Icon {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {
   as: AlertCircle,
};

export const Large = Template.bind({});
Large.args = {
   as: Twitch,
   size: '7',
   className: 'text-purple-500',
};

export const Small = Template.bind({});
Small.args = {
   as: DollarSign,
   size: '4',
   className: 'text-green-500',
};

export const Clickable = Template.bind({});
Clickable.args = {
   as: Twitter,
   clickable: true,
   onClick: () => alert("Tweet!"),
};
