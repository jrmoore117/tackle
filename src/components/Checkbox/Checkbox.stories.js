import React from "react";
import Checkbox from "components/Checkbox";
import useForm from "hooks/useForm";

export default {
  component: Checkbox,
  title: "Checkbox",
};

export const ExampleCheckbox = () => {
  const { set, values } = useForm({
    initialValues: {
      checked: false,
    },
  });
  return (
    <Checkbox {...set("checked")} label={values.checked ? "True" : "False"} />
  );
};
