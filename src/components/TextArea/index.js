import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextArea = ({
   rows,
   cols,
   errors,
   isDisabled,
   className,
   ...props
}) => {
   const textAreaClasses = classNames(
      'text-area',
      className, {
      'text-area--default': !errors,
      'text-area--error': errors,
   });

   return (
      <textarea
         rows={rows}
         cols={cols}
         className={textAreaClasses}
         disabled={isDisabled}
         {...props}
      />
   );
}

TextArea.id = 'TextArea';

TextArea.defaultProps = {
   rows: 2,
   cols: 25,
   className: '',
   isDisabled: false,
}

TextArea.propTypes = {
   rows: PropTypes.number,
   cols: PropTypes.number,
   isDisabled: PropTypes.bool,
   className: PropTypes.string,
}

export default TextArea;
