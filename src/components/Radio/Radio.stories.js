import React from "react";
import { useRadioState } from "reakit/Radio";
import { Radio, RadioGroup } from "components/Radio";

export default {
  component: Radio,
  title: "Radio",
};

export const ExampleRadioButtons = () => {
  const radio = useRadioState();
  return (
    <RadioGroup>
      <Radio label="Hook" value="hook" {...radio} />
      <Radio label="Line" value="line" {...radio} />
      <Radio label="Sinker" value="sinker" {...radio} />
    </RadioGroup>
  );
};
