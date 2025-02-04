import React, { useContext } from "react";
import "../../style/style.scss";
import Tab from "../Header/Tab";
import Modal from "../Modals/Modal";
import ModalDel from "../Modals/ModalDel";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { NotesContext, NotesProvider } from "../../Context/NotesProvider";

const CategoryLayout = () => {
  return (
    <NotesProvider>
      <div className="Container">
        <Header />
        <main>
          <Tab />
          <Outlet />
        </main>
        <Modal />
        <ModalDel />
      </div>
    </NotesProvider>
  );
};

export default CategoryLayout;
