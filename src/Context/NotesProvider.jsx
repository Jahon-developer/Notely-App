import { createContext, useEffect, useState } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isModal, setIsModal] = useState({
    isActive: false,
    title: "Add",
    id: "",
  });
  const [isModalDel, setIsModalDel] = useState({
    isActive: false,
    title: "Delete",
    id: null,
  });

  const fetchData = async () => {
    try {
      const response = await fetch("https://fearless-breeze-a96eff0fbb.strapiapp.com/api/notes");
      const data = await response.json();
      setNotes(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes,
        isModal,
        isModalDel,
        setIsModal,
        setIsModalDel,
        setNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
