import { lazy } from "react";
import Loadable from "app/components/Loadable";

const AppTable = Loadable(lazy(() => import("./tables/AppTable")));

const materialRoutes = [
  { path: "/material/table", 
    element: <AppTable /> 
  }
];

export default materialRoutes;
