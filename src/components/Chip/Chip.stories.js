import React from 'react';
import Chip from 'components/Chip';

export default {
   component: Chip,
   title: 'Chip',
};

const Template = args => <Chip {...args} />;

export const DefaultChip = Template.bind({});
DefaultChip.args = {
   label: 'Chip',
};

export const RedChip = Template.bind({});
RedChip.args = {
   label: 'Chip',
   color: 'red',
};

export const GreenChip = Template.bind({});
GreenChip.args = {
   label: 'Chip',
   color: 'green',
};

export const PurpleChip = Template.bind({});
PurpleChip.args = {
   label: 'Chip',
   color: 'purple',
};

export const IndigoChip = Template.bind({});
IndigoChip.args = {
   label: 'Chip',
   color: 'indigo',
};

export const GrayChip = Template.bind({});
GrayChip.args = {
   label: 'Chip',
   color: 'gray',
};
