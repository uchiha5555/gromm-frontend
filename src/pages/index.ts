import { lazy } from "react";

const Lost = lazy(() => import("./Lost"));
const Home = lazy(() => import("./Home"));
const Profile = lazy(() => import("./Profile"));

export { Lost, Home, Profile };
