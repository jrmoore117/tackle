import React from 'react';
import { Button as Btn } from "reakit/Button";
import PropTypes from 'prop-types';

const Button = ({ variant, color, label, ...props }) => {
   return (
      <Btn
         className={`button button--${variant}--${color}`}
         onAnimationEnd={(e) => e.target.blur()}
         {...props}
      >
         {label}
      </Btn>
   );
}

Button.defaultProps = {
   variant: 'primary',
   color: 'default',
}

Button.propTypes = {
   variant: PropTypes.string,
   color: PropTypes.string,
   label: PropTypes.string.isRequired,
}

export default Button;