import React from 'react';
import { Icon } from 'components/Icon';
import { Field } from 'components/Field';
import { FieldMessage } from 'components/FieldMessage';
import { FieldElementLeft } from 'components/FieldElement';
import { Select, Option } from 'components/Select';
import { useForm } from 'hooks/useForm';

export default {
   component: Select,
   title: 'Select',
};

export const DefaultSelect = () => {
   const { set } = useForm({
      initialValues: {
         tackle: '',
      }
   });
   return (
      <Select {...set("tackle")}>
         <Option defaultValue value="">Select an option</Option>
         <Option value="hook">Hook</Option>
         <Option value="line">Line</Option>
         <Option value="sinker">Sinker</Option>
      </Select>
   );
}

export const SmallSelect = () => {
   const { set } = useForm({
      initialValues: {
         tackle: '',
      }
   });
   return (
      <Select isSmall {...set("tackle")}>
         <Option defaultValue value="">Select an option</Option>
         <Option value="hook">Hook</Option>
         <Option value="line">Line</Option>
         <Option value="sinker">Sinker</Option>
      </Select>
   );
}

export const DisabledSelect = () => {
   const { set } = useForm({
      initialValues: {
         tackle: '',
      }
   });
   return (
      <Select isDisabled {...set("tackle")}>
         <Option defaultValue value="">Select an option</Option>
         <Option value="hook">Hook</Option>
         <Option value="line">Line</Option>
         <Option value="sinker">Sinker</Option>
      </Select>
   );
}

export const SelectWithLeftElement = () => {
   const { set } = useForm({
      initialValues: {
         tackle: '',
      }
   });
   return (
      <Field>
         <FieldElementLeft>
            <Icon as="Anchor" />
         </FieldElementLeft>
         <Select {...set("tackle")}>
            <Option defaultValue value="">Select an option</Option>
            <Option value="hook">Hook</Option>
            <Option value="line">Line</Option>
            <Option value="sinker">Sinker</Option>
         </Select>
      </Field>
   );
}

export const SelectWithValidator = () => {
   const { set } = useForm({
      initialValues: {
         tackle: '',
      },
      validators: {
         tackle: (value) => value === 'hook'
            ? 'Ouch! Select something else.'
            : null,
      }
   });
   return (
      <div>
         <p className="mb-2 text-sm text-gray-900">Select Hook.</p>
         <Select {...set("tackle")}>
            <Option defaultValue value="">Select an option</Option>
            <Option value="hook">Hook</Option>
            <Option value="line">Line</Option>
            <Option value="sinker">Sinker</Option>
         </Select>
         <FieldMessage {...set("tackle")} />
      </div>
   );
}
