import React from 'react';
import PropTypes from 'prop-types';

const FormMessage = ({ errors, ...props }) => {
   if (!errors) return null;
   return (
      <span className="ml-1 mt-1 text-xs text-red-500" {...props}>
         {errors}
      </span>
   );
}

FormMessage.propTypes = {
   errors: PropTypes.string,
}

export default FormMessage;