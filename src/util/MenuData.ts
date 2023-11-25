import { FaUserAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

// type
import { MenuItemType } from "./type";

export const MenuData: MenuItemType[] = [
  {
    icon: IoHome,
    text: "Home",
    router: "/",
  },
  {
    icon: FaUserAlt,
    text: "Profile",
    router: "/profile",
  },
];
