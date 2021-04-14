import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'components/Icon';

export const Chip = ({
   label,
   color,
   isSmall,
   onClick,
   className,
   ...props
}) => {
   const chipClasses = classNames(
      'chip',
      `chip--${color}`,
      className, {
      'chip--small': isSmall
   });

   return (
      <span
         className={chipClasses}
         {...props}
      >
         {label}
         <Icon
            as="X"
            color={color}
            variant="clickable"
            isRounded
            size={5}
            padding={1}
            className="ml-0.5"
            onClick={onClick}
         />
      </span>
   );
}

Chip.defaultProps = {
   color: 'blue',
   className: '',
   isSmall: false,
}

Chip.propTypes = {
   color: PropTypes.string,
   isSmall: PropTypes.bool,
   onClick: PropTypes.func,
   className: PropTypes.string,
   label: PropTypes.string.isRequired,
}
