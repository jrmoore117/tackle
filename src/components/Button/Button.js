import React from 'react';
import { Button as Btn } from "reakit/Button";

const Button = ({ label, ...props }) => {
   return <Btn {...props}>{label}</Btn>;
}

export default Button;