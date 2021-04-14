import React from 'react';
import { Switch } from 'components/Switch';
import { useForm } from 'hooks/useForm';

export default {
   component: Switch,
   title: 'Switch',
};

export const SwitchBlue = () => {
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

export const SwitchRed = () => {
   const { set, values } = useForm({
      initialValues: {
         checked: false,
      },
   });
   return(
      <Switch
         {...set("checked")}
         color="red"
         label={values.checked ? 'On' : 'Off'}
      />
   );
}

export const SwitchGreen = () => {
   const { set, values } = useForm({
      initialValues: {
         checked: false,
      },
   });
   return(
      <Switch
         {...set("checked")}
         color="green"
         label={values.checked ? 'On' : 'Off'}
      />
   );
}

// export const SwitchYellow = () => {
//    const { set, values } = useForm({
//       initialValues: {
//          checked: false,
//       },
//    });
//    return(
//       <Switch
//          {...set("checked")}
//          color="yellow"
//          label={values.checked ? 'On' : 'Off'}
//       />
//    );
// }

export const SwitchPurple = () => {
   const { set, values } = useForm({
      initialValues: {
         checked: false,
      },
   });
   return(
      <Switch
         {...set("checked")}
         color="purple"
         label={values.checked ? 'On' : 'Off'}
      />
   );
}

export const SwitchIndigo = () => {
   const { set, values } = useForm({
      initialValues: {
         checked: false,
      },
   });
   return(
      <Switch
         {...set("checked")}
         color="indigo"
         label={values.checked ? 'On' : 'Off'}
      />
   );
}
