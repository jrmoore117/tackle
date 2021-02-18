import React from 'react';
import MultiSelect from 'components/MultiSelect';

export default {
   component: MultiSelect,
   title: 'MultiSelect',
};

export const MultiSelectWithLabelAndIcons = () => {
   return (
      <MultiSelect
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
