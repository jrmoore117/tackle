import React from "react";
import { ActionMenu, ActionMenuItem } from "components/ActionMenu";
import Divider from "components/Divider";

export default {
  component: ActionMenu,
  title: "ActionMenu",
};

export const ActionMenuWithLabelAndIcons = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <ActionMenu
      color="blue"
      isOpen={isOpen}
      toggle={setIsOpen}
      icon="MoreHorizontal"
      className="mb-32"
    >
      <ActionMenuItem icon="Share" label="Share" />
      <ActionMenuItem icon="Clipboard" label="Copy link" />
      <ActionMenuItem icon="Flag" label="Report" />
    </ActionMenu>
  );
};

export const BlueActionMenuWithLabel = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <ActionMenu
      isOpen={isOpen}
      toggle={setIsOpen}
      color="blue"
      label="Tackle"
      className="mb-52"
    >
      <ActionMenuItem label="Hook" />
      <ActionMenuItem label="Line" />
      <ActionMenuItem label="Sinker" />
      <Divider className="my-1" />
      <ActionMenuItem label="Bobber" />
      <ActionMenuItem label="Lure" />
    </ActionMenu>
  );
};

export const BottomRightActionMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <ActionMenu
      isOpen={isOpen}
      toggle={setIsOpen}
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
};

export const TopRightActionMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <ActionMenu
      isOpen={isOpen}
      toggle={setIsOpen}
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
};

export const PurpleTopLeftActionMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <ActionMenu
      color="purple"
      position="tl"
      isOpen={isOpen}
      toggle={setIsOpen}
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
};
