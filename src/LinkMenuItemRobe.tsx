import { MenuItem, MenuItemProps } from "@chakra-ui/react";
import { RiLinksFill } from "react-icons/ri";

export default function LinkMenuItemRobe(props: MenuItemProps) {
  return <MenuItem icon={<RiLinksFill />} {...props} />
}