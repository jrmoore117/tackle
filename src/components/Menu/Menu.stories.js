import React from 'react';
import { Menu, MenuItem } from 'components/Menu';
import Divider from 'components/Divider';

export default {
   component: Menu,
   title: 'Menu',
};

export const MenuWithIcon = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   return (
      <Menu icon="MoreHorizontal" isOpen={isOpen} toggle={setIsOpen}>
         <MenuItem label="Hook" />
         <MenuItem label="Line" />
         <MenuItem label="Sinker" />
         <Divider className="my-2" />
         <MenuItem label="Bobber" />
         <MenuItem label="Lure" />
      </Menu>
   );
}

export const MenuWithLabel = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   return (
      <Menu
         isOpen={isOpen}
         toggle={setIsOpen}
         color="blue"
         label="Tackle"
      >
         <MenuItem label="Hook" />
         <MenuItem label="Line" />
         <MenuItem label="Sinker" />
      </Menu>
   );
}
