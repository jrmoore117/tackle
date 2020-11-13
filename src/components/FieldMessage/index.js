import React from 'react';
import PropTypes from 'prop-types';

const FieldMessage = ({ errors, ...props }) => {
   if (!errors) return null;
   return (
      <p className="ml-1 mt-1 text-xs text-red-500" {...props}>
         {errors}
      </p>
   );
}

FieldMessage.propTypes = {
   errors: PropTypes.string,
}

export default FieldMessage;