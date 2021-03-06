import React from 'react';
import { Icon } from 'components/Icon';
import { Button } from 'components/Button';
import { Checkbox } from "components/Checkbox";
import { useRadioState } from "reakit/Radio";
import { Radio, RadioGroup } from 'components/Radio';
import { Select, Option } from 'components/Select'
import { Field } from 'components/Field';
import { TextField } from 'components/TextField';
import { FieldMessage } from 'components/FieldMessage';
import { FieldElementLeft, FieldElementRight } from 'components/FieldElement';

import { useForm } from 'hooks/useForm';

export default {
   component: TextField,
   title: 'Text Field',
};

export const DefaultTextField = () => (
   <TextField placeholder="Text Field" />
);

export const SmallTextField = () => (
   <TextField placeholder="Text Field" isSmall />
);

export const DisabledTextField = () => (
   <TextField placeholder="Text Field" isDisabled />
);

export const SmallTextFieldWithLeftElement = () => (
   <Field isSmall>
      <FieldElementLeft>
         <Icon as="Search" />
      </FieldElementLeft>
      <TextField placeholder="Search" />
   </Field>
);

export const TextFieldWithRightElement = () => (
   <Field>
      <TextField placeholder="Search" />
      <FieldElementRight>
         <Icon
            as="Check"
            isRounded
            size={6}
            className="p-1"
            color="green"
            variant="shaded"
         />
      </FieldElementRight>
   </Field>
);

export const TextFieldWithConditionalRightElement = () => {
   const { set, reset, values, setValues } = useForm({
      initialValues: {
         search: '',
      },
   });
   const handleSearch = () => {
      alert(`Searching for "${values.search}"`);
      reset();
   }
   return (
      <div className="flex">
         <Field {...set("search")}>
            <FieldElementLeft>
               <Icon as="Search" />
            </FieldElementLeft>
            <TextField {...set("search")} placeholder="Search" />
            {values.search && (
               <FieldElementRight>
                  <Icon
                     as="X"
                     size="lg"
                     color="blue"
                     variant="clickable"
                     className="p-1"
                     isRounded
                     onClick={() => setValues({ search: '' })}
                  />
               </FieldElementRight>
            )}
         </Field>
         <Button
            color="blue"
            label="Search"
            className="ml-2"
            onClick={handleSearch}
         />
      </div>
   );
}

export const FormExampleWithValidations = () => {
   const { set, reset, getValidatedSubmission, helpers } = useForm({
      initialValues: {
         firstName: '',
         lastName: '',
         username: '',
         password: '',
         tackle: '',
         savePassword: false,
      },
      validators: {
         username: (value) => helpers.checkIfAlphanumeric(value)
            ? 'Only letters or numbers allowed.'
            : null,
         password: (value) => helpers.checkPasswordStrength(value)
            ? 'Password requires 1 lowercase letter, 1 uppercase letter, 1 number, and at least 8 characters.'
            : null,
         tackle: (value) => value === 'hook'
            ? 'Ouch! Select something else.'
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
            </div>
            <div className="flex-1">
               <TextField placeholder="Last Name" {...set("lastName")} className="w-full" />
            </div>
         </div>
         <TextField placeholder="Username" {...set("username")} className="w-full mt-2" />
         <FieldMessage {...set("username")} />
         <TextField type="password" placeholder="Password" {...set("password")} className="w-full mt-2" />
         <FieldMessage {...set("password")} />
         <Select {...set("tackle")} className="mt-2">
            <Option defaultValue value="">Select an option</Option>
            <Option value="hook">Hook</Option>
            <Option value="line">Line</Option>
            <Option value="sinker">Sinker</Option>
         </Select>
         <FieldMessage {...set("tackle")} />
         <Checkbox {...set("savePassword")} label="Save Password?" className="mt-2" />
         <Button type="submit" label="Submit" color="blue" className="mt-2" />
      </form>
   );
}
