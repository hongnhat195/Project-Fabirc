import React from "react";
import { redirect } from "react-router-dom";
import NavBarAdmin from "../../components/NavBarAdmin";
import Footer from "../../components/Footer";

const LayoutAdmin = ({ element }) => {
  console.log(element);
  return (
    <>
      <NavBarAdmin />
      {element}
      <Footer />
    </>
  );
};

export default function AdminTemplate({ element }) {
  // if (!localStorage.getItem("Admin")) return redirect("/signIn");
  return <LayoutAdmin element={element}></LayoutAdmin>;
}
