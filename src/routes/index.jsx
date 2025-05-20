

// Layout
import { HeaderOnly } from "../components/Layout";

// Pages
import Home from "../pages/Home";
import Fllowing from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";

const publicRouters = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Fllowing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: "/search",
    component: Search,
    layout: null,
  },
];

// Private Routes
const privateRouters = [];

export { publicRouters, privateRouters };
