import React from 'react';
import "./style.scss"

const Header = ({setIsModal}) => {
  return (
    <header>
      <div className="header_inside">
        <form action="">
            <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.16675 1.6665C13.3067 1.6665 16.6667 5.0265 16.6667 9.1665C16.6667 13.3065 13.3067 16.6665 9.16675 16.6665C5.02675 16.6665 1.66675 13.3065 1.66675 9.1665C1.66675 5.0265 5.02675 1.6665 9.16675 1.6665ZM9.16675 14.9998C12.3892 14.9998 15.0001 12.389 15.0001 9.1665C15.0001 5.94317 12.3892 3.33317 9.16675 3.33317C5.94341 3.33317 3.33341 5.94317 3.33341 9.1665C3.33341 12.389 5.94341 14.9998 9.16675 14.9998ZM16.2376 15.059L18.5951 17.4157L17.4159 18.5948L15.0592 16.2373L16.2376 15.059Z" fill="#212121" fillOpacity="0.87"/>
</svg>

            </span>
            <input placeholder="Search" type="search" name="search" />
        </form>
        <button onClick={() => setIsModal({isActive:true, title:"Add"})}>
                <span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 14.25V9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75H9.75V14.25H8.25Z" fill="white"/>
</svg>

                </span>
                Add
        </button>
      </div>
    </header>
  )
}

export default Header;