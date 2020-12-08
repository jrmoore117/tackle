import React from 'react';
import Switch from 'components/Switch';
import useForm from 'hooks/useForm';

export default {
   component: Switch,
   title: 'Switch',
};

export const ExampleSwitch = () => {
   const { set, values } = useForm({
      initialValues: {
         checked: false,
      },
   });
   return(
      <Switch
         {...set("checked")}
         label={values.checked ? 'On' : 'Off'}
      />
   );
}
