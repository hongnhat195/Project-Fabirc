import "./App.css";
// import HomeTemplate from "./containers/View";
import AdminTemplate from "./containers/admin";
import { RouteHome, RouteAdmin } from "./router";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  // const showLayoutHome = (routes) => {
  //   if (routes && routes.length > 0) {
  //     return routes.map((item, index) => {
  //       return (
  //         <HomeTemplate key={index} path={item.path} element={item.element} />
  //       );
  //     });
  //   }
  // };

  const showLayoutAdmin = (routes) => {
    if (routes.length > 0 && routes) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate key={index} path={item.path} element={item.element} />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* {showLayoutHome(RouteHome)} */}
        {showLayoutAdmin(RouteAdmin)}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
