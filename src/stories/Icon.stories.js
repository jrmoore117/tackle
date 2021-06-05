import React from 'react';
import { Icon } from 'components/Icon';

export default {
   component: Icon,
   title: 'Icon',
};

const Template = args => <Icon {...args} />;

export const FeatherIcons = () => (
   <div className="flex items-center font-medium">
      Tackle uses Feather <Icon as="Feather" className="mx-1" /> icons.
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
   size: '3xl',
   color: 'blue',
   variant: 'shaded',
   className: 'p-2',
   onClick: () => {},
};

export const LargeShadedGray = Template.bind({});
LargeShadedGray.args = {
   as: 'MapPin',
   size: '3xl',
   color: 'gray',
   variant: 'shaded',
   className: 'p-2',
   onClick: () => {},
};

export const LargeShadedPurple = Template.bind({});
LargeShadedPurple.args = {
   as: 'Twitch',
   size: '3xl',
   color: 'purple',
   variant: 'shaded',
   className: 'p-2',
};

export const ShadedGreenRounded = Template.bind({});
ShadedGreenRounded.args = {
   as: 'Check',
   size:'xl',
   isRounded: true,
   color: 'green',
   variant: 'shaded',
   className: 'p-1',
};

export const ClickableBlueRounded = Template.bind({});
ClickableBlueRounded.args = {
   as: 'X',
   size: 'xl',
   color: 'blue',
   isRounded: true,
   variant: 'clickable',
   className: 'p-1',
   onClick: () => console.log("Deleted!"),
};
