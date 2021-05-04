import React from 'react';
import {
   Radio as RadioButton,
   RadioGroup as RadioButtonGroup
} from "reakit/Radio";
import PropTypes from 'prop-types';

import '../../css/tackle.output.css';

export const Radio = ({
   label,
   className,
   ...props
}) => (
   <label className={`radio--wrapper ${className}`}>
      <RadioButton
         className="radio"
         {...props}
      />
      <span className="radio--label">
         {label}
      </span>
   </label>
);

Radio.defaultProps = {
   className: '',
}

Radio.propTypes = {
   label: PropTypes.string,
   className: PropTypes.string,
}

export const RadioGroup = ({ className, ...props }) => {
   return (
      <RadioButtonGroup
         className={`radio--group ${className}`}
         {...props}
      />
   );
}

RadioGroup.defaultProps = {
   className: '',
}

RadioGroup.propTypes = {
   className: PropTypes.string,
}
