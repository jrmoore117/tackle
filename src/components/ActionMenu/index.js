import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { Item } from "./components";
import { ActionMenuProvider } from "./useActionMenuContext";

const ActionMenu = ({
   icon,
   label,
   color,
   variant,
   isSmall,
   position,
   children,
   className,
   ...props
}) => {
   return (
      <ActionMenuProvider value={{ color, isSmall }}>
         <Popover
            position={position}
            popoverContent={children}
            className={className}
            {...props}
         >
            <Button
               color={color}
               variant={variant}
               isSmall={isSmall}
               label={icon
                  ? <Icon as={icon} size="xl" />
                  : label}
            />
         </Popover>
      </ActionMenuProvider>
   );
}

ActionMenu.defaultProps = {
   className: '',
   position: "bl",
   isSmall: false,
   color: 'default',
}

ActionMenu.propTypes = {
   icon: PropTypes.string,
   label: PropTypes.string,
   color: PropTypes.string,
   isSmall: PropTypes.bool,
   children: PropTypes.node,
   variant: PropTypes.string,
   position: PropTypes.string,
   className: PropTypes.string,
}

ActionMenu.Item = Item;

export { ActionMenu };
