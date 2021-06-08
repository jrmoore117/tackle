import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../../Icon';
import { useActionMenuContext } from "../useActionMenuContext";

const Item = ({
   icon,
   label,
   onClick,
   className,
   ...props
}) => {
   const { color, isSmall } = useActionMenuContext();

   const itemClasses = classNames(
      'action-menu--item',
      `action-menu--item--${color}`,
      className, {
      'action-menu--item--small': isSmall,
   });

   return (
      <div
         onClick={onClick}
         className={itemClasses}
         {...props}
      >
         {icon && <Icon as={icon} className="action-menu--icon" />}
         {label}
      </div>
   );
}

Item.defaultProps = {
   className: '',
}

Item.propTypes = {
   icon: PropTypes.string,
   onClick: PropTypes.func,
   className: PropTypes.string,
   label: PropTypes.string.isRequired,
}

export { Item };
