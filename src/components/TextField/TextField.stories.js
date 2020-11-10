import React from 'react';
import Field from './Field';
import TextField from './TextField';
import { FieldElementLeft, FieldElementRight} from './FieldElement';
import FieldMessage from './FieldMessage';
import Button from '../Button/Button';
import Checkbox from "../Checkbox/Checkbox";
import { Radio, RadioGroup } from '../Radio/Radio';
import { useRadioState } from "reakit/Radio";
import { Search, X } from 'react-feather';

import useForm from '../../hooks/useForm';

export default {
   component: TextField,
   title: 'Text Field',
};

export const FormExampleWithValidations = () => {
   const { set, reset, handleSubmit, helpers } = useForm({
      initialValues: {
         firstName: '',
         lastName: '',
         username: '',
         password: '',
         savePassword: false,
      },
      validators: {
         firstName: (value) => value.length < 5
            ? 'Your name must be at least 5 characters long. Sorry, Chad!'
            : null,
         username: (value) => helpers.checkIfAlphanumeric(value)
            ? 'Only letters or numbers allowed.'
            : null,
         password: (value) => helpers.checkPasswordStrength(value)
            ? 'Password requires 1 lowercase letter, 1 uppercase letter, 1 number, and at least 8 characters.'
            : null,
      },
   });
   const radio = useRadioState();
   const callback = (values) => {
      console.log("Callback working!", { ...values, radioValue: radio.state });
      reset();
   }
   return (
      <form onSubmit={(event) => handleSubmit(event, callback)} className="flex flex-col">
         <RadioGroup {...radio} aria-label="prefix">
            <Radio {...radio} label="Mr." value="Mr." />
            <Radio {...radio} label="Ms." value="Ms." />
            <Radio {...radio} label="Mrs." value="Mrs." />
         </RadioGroup>
         <div className="flex mt-2">
            <div className="mr-2 flex-1">
               <TextField placeholder="First Name" {...set("firstName")} className="w-full" />
               <FieldMessage {...set("firstName")} />
            </div>
            <div className="flex-1">
               <TextField placeholder="Last Name" {...set("lastName")} className="w-full" />
               <FieldMessage {...set("lastName")} />
            </div>
         </div>
         <TextField placeholder="Username" {...set("username")} className="w-full mt-2" />
         <FieldMessage {...set("username")} />
         <TextField type="password" placeholder="Password" {...set("password")} className="w-full mt-2" />
         <FieldMessage {...set("password")} />
         <Checkbox {...set("savePassword")} label="Save Password?" className="mt-2 mr-2" />
         <Button type="submit" label="Submit" color="blue" className="mt-2" />
      </form>
   );
}

export const FieldExample = () => {
   const { set, reset, handleSubmit } = useForm({
      initialValues: {
         firstName: '',
      },
      validators: {
         firstName: (value) => value.length < 5
            ? 'Your name must be at least 5 characters long. Sorry, Chad!'
            : null,
      },
   });
   const callback = (values) => {
      console.log("Callback working!", { ...values });
      reset();
   }
   return (
      <form onSubmit={(event) => handleSubmit(event, callback)} className="flex flex-col">
         <Field {...set("firstName")}>
            <FieldElementLeft>
               <Search />
            </FieldElementLeft>
            <TextField {...set("firstName")} placeholder="Search" />
            <FieldElementRight>
               <X />
            </FieldElementRight>
         </Field>
         <FieldMessage {...set("firstName")} />
         <Button type="submit" label="Submit" color="blue" className="mt-2" />
      </form>
   );
}
