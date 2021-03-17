import React from "react";
import PropTypes from "prop-types";

const FieldMessage = ({ errors, ...props }) => {
  if (!errors) return null;
  return (
    <p className="fieldmessage" {...props}>
      {errors}
    </p>
  );
};

FieldMessage.propTypes = {
  errors: PropTypes.string,
};

export default FieldMessage;
