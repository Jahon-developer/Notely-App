import React, { useContext, useState } from "react";
import "./style.scss";
import { NotesContext } from "../../Context/NotesProvider";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { notes, setNotes, setIsModal } = useContext(NotesContext);
  const [originalNotes, setOriginalNotes] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    if (originalNotes.length === 0) {
      setOriginalNotes(notes);
    }

    if (value.trim() === "") {
      setNotes(originalNotes);
    } else {
      const filtered = originalNotes.filter((note) =>
        note.title.toLowerCase().includes(value)
      );
      setNotes(filtered);
    }
  };

  function handleChangeOpen() {
    document
      .querySelector(".menu_content")
      .classList.add(".menu_content_active");
  }
  function handleChangeClose() {
    document
      .querySelector(".menu_content")
      .classList.remove(".menu_content_active");
  }

  return (
    <header>
      <div className="header_inside">
        <div className="menu">
          <div className="menu_icon" onClick={handleChangeOpen}>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L17 1"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 8L17 8"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 15L17 15"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="menu_content">
            <div className="menu_content_header">
              <div
                className="menu_content_header_icon"
                onClick={handleChangeClose}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.24267 0.757377L0.757385 9.24266M9.24267 9.24261L0.757385 0.757324"
                    stroke="#28303F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <NavLink to="/">All</NavLink>
            <NavLink to="/personal">Personal</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/business">Business</NavLink>
            <NavLink to="/completed">Completed notes</NavLink>
          </div>
        </div>
        <form action="">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16675 1.6665C13.3067 1.6665 16.6667 5.0265 16.6667 9.1665C16.6667 13.3065 13.3067 16.6665 9.16675 16.6665C5.02675 16.6665 1.66675 13.3065 1.66675 9.1665C1.66675 5.0265 5.02675 1.6665 9.16675 1.6665ZM9.16675 14.9998C12.3892 14.9998 15.0001 12.389 15.0001 9.1665C15.0001 5.94317 12.3892 3.33317 9.16675 3.33317C5.94341 3.33317 3.33341 5.94317 3.33341 9.1665C3.33341 12.389 5.94341 14.9998 9.16675 14.9998ZM16.2376 15.059L18.5951 17.4157L17.4159 18.5948L15.0592 16.2373L16.2376 15.059Z"
                fill="#212121"
                fillOpacity="0.87"
              />
            </svg>
          </span>
          <input
            placeholder="Search"
            type="search"
            name="search"
            onChange={handleSearch}
          />
        </form>
        <button
          onClick={() => setIsModal({ isActive: true, title: "Add" })}
        >
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 14.25V9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75H9.75V14.25H8.25Z"
                fill="white"
              />
            </svg>
          </span>
          Add
        </button>
      </div>
    </header>
  );
};

export default Header;
