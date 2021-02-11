import React from 'react';
import Icon from 'components/Icon';

export default {
   component: Icon,
   title: 'Icon',
};

const Template = args => <Icon {...args} />;

export const FeatherIcons = () => (
   <div className="flex items-center font-medium">
      Tackle uses Feather <Icon as="Feather" size={5} className="mx-1" /> icons.
   </div>
);

export const SolidRed = Template.bind({});
SolidRed.args = {
   as: 'Heart',
   color: 'red',
   isSolid: true,
};

export const Green = Template.bind({});
Green.args = {
   as: 'DollarSign',
   color: 'green',
};

export const LargeShadedBlue = Template.bind({});
LargeShadedBlue.args = {
   as: 'Calendar',
   size: 10,
   padding: 2,
   color: 'blue',
   variant: 'shaded',
   onClick: () => {},
};

export const LargeShadedGray = Template.bind({});
LargeShadedGray.args = {
   as: 'MapPin',
   size: 10,
   padding: 2,
   color: 'gray',
   variant: 'shaded',
   onClick: () => {},
};

export const LargeShadedPurple = Template.bind({});
LargeShadedPurple.args = {
   as: 'Twitch',
   size: 10,
   padding: 2,
   color: 'purple',
   variant: 'shaded',
};

export const ShadedGreenRounded = Template.bind({});
ShadedGreenRounded.args = {
   as: 'Check',
   size: 6,
   padding: 1,
   isRounded: true,
   color: 'green',
   variant: 'shaded',
};

export const ClickableBlueRounded = Template.bind({});
ClickableBlueRounded.args = {
   as: 'X',
   size: 6,
   padding: 1,
   color: 'blue',
   isRounded: true,
   variant: 'clickable',
   onClick: () => console.log("Deleted!"),
};
