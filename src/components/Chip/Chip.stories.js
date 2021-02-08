import React from 'react';
import Chip from 'components/Chip';

export default {
   component: Chip,
   title: 'Chip',
};

const Template = args => <Chip {...args} />;

export const DefaultBlue = Template.bind({});
DefaultBlue.args = {
   label: 'Chip',
   color: 'blue',
};