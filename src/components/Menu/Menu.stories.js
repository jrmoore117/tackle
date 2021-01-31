import React from 'react';
import { Menu, MenuItem } from 'components/Menu';
import Divider from 'components/Divider';

export default {
   component: Menu,
   title: 'Menu',
};

export const MenuWithLabelAndIcons = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   return (
      <Menu
         isOpen={isOpen}
         toggle={setIsOpen}
         icon="MoreHorizontal"
         className="mb-32"
      >
         <MenuItem icon="Share" label="Share" />
         <MenuItem icon="Clipboard" label="Copy link" />
         <MenuItem icon="Flag" label="Report" />
      </Menu>
   );
}

export const BlueMenuWithLabel = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   return (
      <Menu
         isOpen={isOpen}
         toggle={setIsOpen}
         color="blue"
         label="Tackle"
         className="mb-52"
      >
         <MenuItem label="Hook" />
         <MenuItem label="Line" />
         <MenuItem label="Sinker" />
         <Divider className="my-2" />
         <MenuItem label="Bobber" />
         <MenuItem label="Lure" />
      </Menu>
   );
}

export const BottomRightMenu = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   return (
      <Menu
         isOpen={isOpen}
         toggle={setIsOpen}
         icon="MoreHorizontal"
         position="br"
         className="mb-52"
      >
         <MenuItem label="Hook" />
         <MenuItem label="Line" />
         <MenuItem label="Sinker" />
         <Divider className="my-2" />
         <MenuItem label="Bobber" />
         <MenuItem label="Lure" />
      </Menu>
   );
}

export const TopRightMenu = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   return (
      <Menu
         isOpen={isOpen}
         toggle={setIsOpen}
         position="tr"
         className="mt-52"
         icon="MoreHorizontal"
      >
         <MenuItem label="Hook" />
         <MenuItem label="Line" />
         <MenuItem label="Sinker" />
         <Divider className="my-2" />
         <MenuItem label="Bobber" />
         <MenuItem label="Lure" />
      </Menu>
   );
}

export const TopLeftMenu = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   return (
      <Menu
         isOpen={isOpen}
         toggle={setIsOpen}
         position="tl"
         className="mt-52"
         icon="MoreHorizontal"
      >
         <MenuItem label="Hook" />
         <MenuItem label="Line" />
         <MenuItem label="Sinker" />
         <Divider className="my-2" />
         <MenuItem label="Bobber" />
         <MenuItem label="Lure" />
      </Menu>
   );
}
