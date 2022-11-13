import React from "react";
import { Route, redirect } from "react-router-dom";
import NavBarAdmin from "../../components/NavBarAdmin";
import Footer from "../../components/Footer";

const LayoutAdmin = (props) => {
  console.log(props);
  return (
    <>
      <NavBarAdmin />
      {props.children}
      <Footer />
    </>
  );
};
export default function AdminTemplate(props) {
  const { path, element } = props;
  if (!localStorage.getItem("Admin")) return redirect("/signIn");
  return (
    <LayoutAdmin>
      <Route path={path} element={element} />
    </LayoutAdmin>
  );
}
