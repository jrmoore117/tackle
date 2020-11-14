import React from 'react';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Checkbox from "components/Checkbox";
import { useRadioState } from "reakit/Radio";
import { Radio, RadioGroup } from 'components/Radio';
import Field from 'components/Field';
import TextField from 'components/TextField';
import FieldMessage from 'components/FieldMessage';
import { FieldElementLeft, FieldElementRight } from 'components/FieldElement';
import { Search, X } from 'react-feather';

import useForm from 'hooks/useForm';

export default {
   component: TextField,
   title: 'Text Field',
};

export const FormExampleWithValidations = () => {
   const { set, reset, getValidatedSubmission, helpers } = useForm({
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
   const handleSubmit = (event) => {
      event.preventDefault();
      
      const submission = getValidatedSubmission();

      if (submission.errors) {
         console.log("Errors: ", submission.errors);
      } else if (submission.values) {
         console.log("Form submitted: ", { ...submission.values, radioValue: radio.state });
         reset();
      }
   }
   return (
      <form onSubmit={handleSubmit} className="flex flex-col">
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
   const { set, reset, values, setValues } = useForm({
      initialValues: {
         search: '',
      },
   });
   const handleSearch = (values) => {
      alert(`Searching...`);
      reset();
   }
   return (
      <div className="flex items-center">
         <Field {...set("search")}>
            <FieldElementLeft>
               <Icon as={Search} />
            </FieldElementLeft>
            <TextField {...set("search")} placeholder="Search" />
            {values.search && (
               <FieldElementRight>
                  <Icon as={X} onClick={() => setValues({ search: '' })}/>
               </FieldElementRight>
            )}
         </Field>
         <Button onClick={handleSearch} label="Search" color="blue" className="ml-2" />
      </div>
   );
}
