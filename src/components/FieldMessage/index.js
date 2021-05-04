import React from 'react';
import PropTypes from 'prop-types';

import '../../css/tackle.output.css';

export const FieldMessage = ({ errors, ...props }) => {
   if (!errors) return null;
   return (
      <p className="field-message" {...props}>
         {errors}
      </p>
   );
}

FieldMessage.propTypes = {
   errors: PropTypes.string,
}
