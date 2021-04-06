import React from 'react';
import Button from 'components/Button';
import Icon from 'components/Icon';
export default {
   component: Button,
   title: 'Button',
};

const Template = args => <Button {...args} />;

export const Blue = () => (
   <div className="flex">
      <Button
         label="Primary"
         variant="primary"
         color="blue"
         className="mr-2"
      />
      <Button
         label="Secondary"
         variant="secondary"
         color="blue"
      />
   </div>
);

export const Red = () => (
   <div className="flex">
      <Button
         label="Primary"
         variant="primary"
         color="red"
         className="mr-2"
      />
      <Button
         label="Secondary"
         variant="secondary"
         color="red"
      />
   </div>
);

export const Green = () => (
   <div className="flex">
      <Button
         label="Primary"
         variant="primary"
         color="green"
         className="mr-2"
      />
      <Button
         label="Secondary"
         variant="secondary"
         color="green"
      />
   </div>
);

// export const Yellow = () => (
//    <div className="flex">
//       <Button
//          label="Primary"
//          variant="primary"
//          color="yellow"
//          className="mr-2"
//       />
//       <Button
//          label="Secondary"
//          variant="secondary"
//          color="yellow"
//       />
//    </div>
// );

export const Purple = () => (
   <div className="flex">
      <Button
         label="Primary"
         variant="primary"
         color="purple"
         className="mr-2"
      />
      <Button
         label="Secondary"
         variant="secondary"
         color="purple"
      />
   </div>
);

export const Indigo = () => (
   <div className="flex">
      <Button
         label="Primary"
         variant="primary"
         color="indigo"
         className="mr-2"
      />
      <Button
         label="Secondary"
         variant="secondary"
         color="indigo"
      />
   </div>
);

export const Default = () => (
   <div className="flex">
      <Button
         label="Primary"
         variant="primary"
         className="mr-2"
      />
      <Button
         label="Secondary"
         variant="secondary"
      />
   </div>
);

export const PrimaryWithLeftIcon = Template.bind({});
PrimaryWithLeftIcon.args = {
   label: 'Disconnect?',
   variant: 'primary',
   color: 'red',
   leftIcon: "Zap",
};

export const PrimarySmallWithRightIcon = Template.bind({});
PrimarySmallWithRightIcon.args = {
   label: 'Cash Out',
   variant: 'primary',
   color: 'green',
   isSmall: true,
   rightIcon: "DollarSign",
};

export const PrimaryIconOnly = Template.bind({});
PrimaryIconOnly.args = {
   label: <Icon as="Twitch" size={6} />,
   variant: 'primary',
   color: 'purple',
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

export const SecondaryWithLeftIcon = Template.bind({});
SecondaryWithLeftIcon.args = {
   label: 'Tweet',
   variant: 'secondary',
   color: 'blue',
   leftIcon: "Twitter",
};

export const SecondarySmallWithRightIcon = Template.bind({});
SecondarySmallWithRightIcon.args = {
   label: 'Cash Out',
   variant: 'secondary',
   color: 'green',
   isSmall: true,
   rightIcon: "DollarSign",
};

export const SecondaryIconOnly = Template.bind({});
SecondaryIconOnly.args = {
   label: <Icon as="Twitch" size={6} />,
   variant: 'secondary',
   color: 'purple',
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

// export const TertiaryBlue = Template.bind({});
// TertiaryBlue.args = {
//    label: 'Tertiary',
//    variant: 'tertiary',
//    color: 'blue'
// };
