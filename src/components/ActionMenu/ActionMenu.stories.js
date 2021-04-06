import React from 'react';
import { ActionMenu, ActionMenuItem } from 'components/ActionMenu';
import Divider from 'components/Divider';

export default {
   component: ActionMenu,
   title: 'ActionMenu',
};

export const BlueActionMenuWithIcons = () => {
   return (
      <ActionMenu
         color="blue"
         icon="MoreHorizontal"
         className="mb-32"
      >
         <ActionMenuItem icon="Share" label="Share" />
         <ActionMenuItem icon="Clipboard" label="Copy link" />
         <ActionMenuItem icon="Flag" label="Report" />
      </ActionMenu>
   );
}

export const SmallBlueActionMenu = () => {
   return (
      <ActionMenu
         color="blue"
         label="Tackle"
         className="mb-40"
         isSmall
      >
         <ActionMenuItem label="Hook" />
         <ActionMenuItem label="Line" />
         <ActionMenuItem label="Sinker" />
         <Divider className="my-1" />
         <ActionMenuItem label="Bobber" />
         <ActionMenuItem label="Lure" />
      </ActionMenu>
   );
}

export const BottomRightActionMenu = () => {
   return (
      <ActionMenu
         icon="MoreHorizontal"
         position="br"
         className="mb-52 ml-10"
      >
         <ActionMenuItem label="Hook" />
         <ActionMenuItem label="Line" />
         <ActionMenuItem label="Sinker" />
         <Divider className="my-1" />
         <ActionMenuItem label="Bobber" />
         <ActionMenuItem label="Lure" />
      </ActionMenu>
   );
}

export const TopRightActionMenu = () => {
   return (
      <ActionMenu
         position="tr"
         className="mt-52 ml-10"
         icon="MoreHorizontal"
      >
         <ActionMenuItem label="Hook" />
         <ActionMenuItem label="Line" />
         <ActionMenuItem label="Sinker" />
         <Divider className="my-1" />
         <ActionMenuItem label="Bobber" />
         <ActionMenuItem label="Lure" />
      </ActionMenu>
   );
}

export const PurpleTopLeftActionMenu = () => {
   return (
      <ActionMenu
         color="purple"
         position="tl"
         className="mt-52"
         icon="MoreHorizontal"
      >
         <ActionMenuItem label="Hook" />
         <ActionMenuItem label="Line" />
         <ActionMenuItem label="Sinker" />
         <Divider className="my-1" />
         <ActionMenuItem label="Bobber" />
         <ActionMenuItem label="Lure" />
      </ActionMenu>
   );
}
