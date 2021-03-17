import React from "react";
import TextArea from "components/TextArea";
import FieldMessage from "components/FieldMessage";

import useForm from "hooks/useForm";

export default {
  component: TextArea,
  title: "Text Area",
};

export const DefaultTextArea = () => <TextArea placeholder="Text Area" />;

export const DisabledTextArea = () => (
  <TextArea placeholder="Text Area" isDisabled />
);

export const LargeTextArea = () => (
  <TextArea placeholder="Text Area" rows={4} cols={50} />
);

export const TextAreaWithValidator = () => {
  const { set } = useForm({
    initialValues: {
      message: "",
    },
    validators: {
      message: (value) => (value.length < 20 ? "Write more." : null),
    },
  });
  return (
    <React.Fragment>
      <TextArea {...set("message")} placeholder="Text Area" />
      <FieldMessage {...set("message")} />
    </React.Fragment>
  );
};
