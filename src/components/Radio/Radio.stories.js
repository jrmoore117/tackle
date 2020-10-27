import React from 'react';
import { Radio, RadioGroup } from './Radio';
import useForm from '../../hooks/useForm';

export default {
   component: Radio,
   title: 'Radio',
};

export const ExampleRadioButtons = () => {
   const { useRadio } = useForm();
   const radio = useRadio();
   return(
      <RadioGroup>
         <Radio label="One" value="one" {...radio} />
         <Radio label="Two" value="two" {...radio} />
         <Radio label="Three" value="three" {...radio} />
      </RadioGroup>
   );
}
