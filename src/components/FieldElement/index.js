import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const FieldElementLeft = ({
   children,
   className,
   ...props
}) => {
   const leftElementClasses = classNames(
      'field-element',
      'field-element--left',
      className,
   );

   return (
      <div className={leftElementClasses} {...props}>
         {children}
      </div>
   );
}

FieldElementLeft.id = 'FieldElementLeft';

FieldElementLeft.defaultProps = {
   className: '',
}

FieldElementLeft.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
}

export const FieldElementRight = ({
   children,
   className,
   ...props
}) => {
   const rightElementClasses = classNames(
      'field-element',
      'field-element--right',
      className,
   );

   return (
      <div className={rightElementClasses} {...props}>
         {children}
      </div>
   );
}

FieldElementRight.id = 'FieldElementRight';

FieldElementRight.defaultProps = {
   className: '',
}

FieldElementRight.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
}
