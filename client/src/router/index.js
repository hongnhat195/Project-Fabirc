import SignInSide from "../containers/admin/auth/signIn";
import SignUp from "../containers/admin/auth/signUp";
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
];
export { RouteAdmin, RouteHome };
