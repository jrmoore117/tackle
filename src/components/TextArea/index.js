import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
   rows,
   cols,
   errors,
   isDisabled,
   className,
   ...props
}) => (
   <textarea
      rows={rows}
      cols={cols}
      className={`text-area text-area--${errors ? 'error' : 'default'} ${className || ''}`}
      disabled={isDisabled}
      {...props}
   />
);

TextArea.id = 'TextArea';

TextArea.defaultProps = {
   rows: 2,
   cols: 25,
}

TextArea.propTypes = {
   isSmall: PropTypes.bool,
   isDisabled: PropTypes.bool,
   withElements: PropTypes.bool,
   className: PropTypes.string,
}

export default TextArea;
