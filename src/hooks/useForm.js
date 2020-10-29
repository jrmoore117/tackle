import { useState } from "react";

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
      helpers: {
         checkIfEmail: (email) => {
            const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return !regex.test(email);
         },
         checkIfPhoneNumber: (phoneNumber) => {
            const regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            return regex.test(phoneNumber);
         },
         checkIfProtocolUrl: (url) => {
            // Protocol required.
            const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
            return !regex.test(url);
         },
         checkIfUrl: (url) => {
            // Protocol optional.
            const regex = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
            return !regex.test(url);
         },
         checkPasswordStrength: (password) => {
            // Requires 1 lowercase letter, 1 uppercase letter, 1 number, and at least 8 characters.
            const regex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
            return !regex.test(password);
         },
         checkPasswordStrengthStrict: (password) => {
            // Requires 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character, and at least 8 characters.
            const regex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
            return !regex.test(password);
         },
         checkAlphanumeric: (string) => {
            const regex = /^[a-zA-Z0-9]*$/;
            return !regex.test(string);
         },
         checkAlphanumericWithSpaces: (string) => {
            const regex = /^[a-zA-Z0-9 ]*$/;
            return !regex.test(string);
         },
      }
   }
}

export default useForm;
