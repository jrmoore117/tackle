import React from 'react';
import TextField from './TextField';
import FormMessage from './FormMessage';
import Button from '../Button/Button';
import useForm from '../../hooks/useForm';

export default {
   component: TextField,
   title: 'Text Field',
};

export const FormExampleWithValidations = () => {
   const { set, reset, handleSubmit } = useForm({ 
      initialValues: { 
         firstName: '',
         lastName: '',
         username: '',
         password: '',
      },
      validators: {
         firstName: (value) => value.length < 5
            ? 'Your name must be at least 5 characters long. Sorry, Chad!'
            : null,
         username: (value) => value.length < 5
            ? 'Your username must be at least 5 characters long.'
            : null,
         password: (value) => value.length < 8
            ? 'Your password must be at least 8 characters long.'
            : null,
      },
   });
   const callback = (values) => {
      console.log("Callback working!", values);
      reset();
   }
   return (
      <form onSubmit={(event) => handleSubmit(event, callback)} className="flex flex-col">
         <div className="flex">
            <div className="mr-2 flex-1">
               <TextField placeholder="First Name" {...set("firstName")} className="w-full" />
               <FormMessage {...set("firstName")} />
            </div>
            <div className="flex-1">
               <TextField placeholder="Last Name" {...set("lastName")} className="w-full" />
               <FormMessage {...set("lastName")} />
            </div>
         </div>
         <TextField placeholder="Username" {...set("username")} className="w-full mt-2" />
         <FormMessage {...set("username")} />
         <TextField type="password" placeholder="Password" {...set("password")} className="w-full mt-2" />
         <FormMessage {...set("password")} />
         <Button type="submit" label="Sumbit" color="blue" className="mt-2" />
      </form>
   );
}