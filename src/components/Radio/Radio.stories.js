import React from 'react';
import { useRadioState } from "reakit/Radio";
import { Radio, RadioGroup } from 'components/Radio';

export default {
   component: Radio,
   title: 'Radio',
};

export const ExampleRadioButtons = () => {
   const radio = useRadioState();
   return(
      <RadioGroup>
         <Radio label="One" value="one" {...radio} />
         <Radio label="Two" value="two" {...radio} />
         <Radio label="Three" value="three" {...radio} />
      </RadioGroup>
   );
}
