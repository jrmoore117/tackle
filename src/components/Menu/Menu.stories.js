import React from 'react';
import { Menu, MenuCategory, MenuItem } from 'components/Menu';

export default {
   component: Menu,
   title: ' Menu',
};

export const BlueMenu = () => {
   return (
      <Menu color="blue">
         <MenuCategory label="Tackle" />
         <MenuItem label="Hook" />
         <MenuItem label="Line" isActive />
         <MenuItem label="Sinker" />
         <MenuCategory label="Numbers" />
         <MenuItem label="One" />
         <MenuItem label="Two" />
         <MenuItem label="Three" />
      </Menu>
   );
}

export const BlueMenuWithIcons = () => {
   return (
      <Menu>
         <MenuItem icon="User" label="Profile" />
         <MenuItem icon="Bell" label="Notifications" isActive />
         <MenuItem label="Sinker" />
      </Menu>
   );
}
