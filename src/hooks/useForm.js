import { useState } from "react";
import { useRadioState } from "reakit/Radio";

const useForm = ({ initialValues, validators } = {}) => {
   const [values, setValues] = useState(initialValues);
   const [errors, setErrors] = useState({});
   return {
      set: (name) => ({
         name: name,
         value: values[name],
         errors: errors[name],
         checked: values[name],
         onChange: (event) => {
            const { name, value } = event.target;
            // Validate input value.
            if (validators && validators[name] && value === '') {
               setErrors(Object.assign({}, errors, { [name]: null }));
            } else if (validators && validators[name]) {
               setErrors(Object.assign({}, errors, { [name]: validators[name](value) }));
            }
            // Set new value to state.
            name.toLowerCase().includes('checkbox')
               ? setValues(Object.assign({}, values, { [name]: !values[name] }))
               : setValues(Object.assign({}, values, { [name]: value }))
         },
      }),
      handleSubmit: (event, callback) => {
         event.preventDefault();
         // Prevent callback execution if errors present.
         for (const name in errors) {
            if (errors && errors[name]) {
               return console.error('Form input values do not meet requirements.');
            }
         }
         // Prevent callback execution if empty form fields break any validation rules.
         for (const name in values) {
            if (validators && validators[name] && validators[name](values[name])) {
               return console.error('Empty form inputs cannot be validated.');
            }
         }
         callback(values);
      },
      reset: () => {
         setValues(initialValues);
         setErrors({});
      },
      useRadio: useRadioState,
   }
}

export default useForm;
