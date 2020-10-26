import { useState } from "react";

const useForm = ({ initialValues, validators }) => {
   const [values, setValues] = useState(initialValues);
   const [errors, setErrors] = useState({});
   return {
      reset: () => {
         setValues(initialValues);
         setErrors({});
      },
      set: (name) => ({
         name: name,
         value: values[name],
         errors: errors[name],
         onChange: (event) => {
            const { name, value } = event.target;
            // validate input value
            if (validators[name] && value === '') {
               setErrors(Object.assign({}, errors, { [name]: null }));
            } else if (validators[name]) {
               setErrors(Object.assign({}, errors, { [name]: validators[name](value) }));
            }
            // set new value to state
            if (typeof values[name] === 'object') {
               setValues(Object.assign({}, values, { [name]: { value: value } }));
            } else {
               setValues(Object.assign({}, values, { [name]: value }));
            }
         },
      }),
      handleSubmit: (event, callback) => {
         event.preventDefault();
         // Prevent callback execution if errors present.
         for (const name in errors) {
            if (errors[name]) return console.error('Form input values do not meet requirements.');
         }
         // Prevent callback execution if empty form fields break any validation rules.
         for (const name in values) {
            if (validators[name] && validators[name](values[name])) return console.error('Empty form inputs cannot be validated.');
         }
         callback(values);
      },
   }
}

export default useForm;
