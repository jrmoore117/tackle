import React from 'react';
import Checkbox from './Checkbox';
import useForm from '../../hooks/useForm';

export default {
   component: Checkbox,
   title: 'Checkbox',
};

export const ExampleCheckbox = () => {
   const { set } = useForm({
      initialValues: {
         hello: '',
         demoCheckbox: false,
      },
   });
   return(
      <form>
         <Checkbox {...set("demoCheckbox")} />
      </form>
   );
}
