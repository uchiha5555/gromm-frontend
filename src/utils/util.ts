import _ROUTERS from "@/constants/route.constant";
import { FaUserAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

export const tokillo = (n: number) =>
  Number(n) < 1000 ? String(n) : `${~~(Number(n) / 1000)}k`;

type RouteKey = keyof typeof _ROUTERS;

export const routerer = (...args: RouteKey[]) => 
  args.map(route => "/" + _ROUTERS[route]?.replace("/", "")).join("");




export const MenuData = [
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