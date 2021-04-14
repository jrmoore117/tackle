import React from 'react';
import { MultiSelect } from 'components/MultiSelect';
import { Button } from 'components/Button';
import { useForm } from 'hooks/useForm';

export default {
   component: MultiSelect,
   title: 'MultiSelect',
};

export const DefaultMultiSelect = () => {
   const { set, values } = useForm();
   return (
      <div>
         <Button color="blue" label="Print values to console" onClick={() => console.log(values)} className="mb-4" />
         <MultiSelect
            {...set("multiselect")}
            className="mb-48"
            placeholder="Select your tackle"
            items={[
               { label: 'Hook', value: 'hook' },
               { label: 'Line', value: 'line' },
               { label: 'Sinker', value: 'sinker' },
               { label: 'Bobber', value: 'bobber' },
               { label: 'Lure', value: 'lure' },
               // items with duplicate labels get filtered out
               { label: 'Sinker', value: 'sinker' },
            ]}
         />
      </div>
   );
}

export const SmallMultiSelect = () => {
   const { set } = useForm();
   return (
      <MultiSelect
         {...set("multiselect")}
         isSmall
         className="mb-32"
         placeholder="Select your tackle"
         items={[
            { label: 'Hook', value: 'hook' },
            { label: 'Line', value: 'line' },
            { label: 'Sinker', value: 'sinker' },
            // items with duplicate labels get filtered out
            { label: 'Sinker', value: 'sinker' },
         ]}
      />
   )
}

export const MultiSelectWithValidator = () => {

   const { set } = useForm({
      validators: {
         multiselect: value => value.length < 3
            ? "Select at least 3."
            : null
      }
   });

   return (
      <MultiSelect
         {...set("multiselect")}
         className="mb-32"
         placeholder="Select your tackle"
         items={[
            { label: 'Hook', value: 'hook' },
            { label: 'Line', value: 'line' },
            { label: 'Sinker', value: 'sinker' },
            // items with duplicate labels get filtered out
            { label: 'Sinker', value: 'sinker' },
         ]}
      />
   )
}
