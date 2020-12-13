import React from 'react';
import Divider from 'components/Divider';

export default {
   component: Divider,
   title: 'Divider',
};

const Template = args => <Divider {...args} />;

export const DefaultDivider = () => (
   <Divider />
);
