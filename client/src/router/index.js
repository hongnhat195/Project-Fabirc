import SignInSide from "../containers/admin/auth/signIn";
import SignUp from "../containers/admin/auth/signUp";
import Dashboard from "../pages/DashboardAppPage"
const RouteHome = [];
const RouteAdmin = [
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signIn",
    element: <SignInSide />,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
];
export { RouteAdmin, RouteHome };
