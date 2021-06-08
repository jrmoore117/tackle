import React from 'react';
import { ActionMenu } from 'components/ActionMenu';
import { Divider } from 'components/Divider';

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
         <ActionMenu.Item icon="Share" label="Share" />
         <ActionMenu.Item icon="Clipboard" label="Copy link" />
         <ActionMenu.Item icon="Flag" label="Report" />
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
         <ActionMenu.Item label="Hook" />
         <ActionMenu.Item label="Line" />
         <ActionMenu.Item label="Sinker" />
         <Divider className="my-1" />
         <ActionMenu.Item label="Bobber" />
         <ActionMenu.Item label="Lure" />
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
         <ActionMenu.Item label="Hook" />
         <ActionMenu.Item label="Line" />
         <ActionMenu.Item label="Sinker" />
         <Divider className="my-1" />
         <ActionMenu.Item label="Bobber" />
         <ActionMenu.Item label="Lure" />
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
         <ActionMenu.Item label="Hook" />
         <ActionMenu.Item label="Line" />
         <ActionMenu.Item label="Sinker" />
         <Divider className="my-1" />
         <ActionMenu.Item label="Bobber" />
         <ActionMenu.Item label="Lure" />
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
         <ActionMenu.Item label="Hook" />
         <ActionMenu.Item label="Line" />
         <ActionMenu.Item label="Sinker" />
         <Divider className="my-1" />
         <ActionMenu.Item label="Bobber" />
         <ActionMenu.Item label="Lure" />
      </ActionMenu>
   );
}
