import React from 'react';
import PropTypes from 'prop-types';

const FieldMessage = ({ errors, ...props }) => {
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

export default FieldMessage;