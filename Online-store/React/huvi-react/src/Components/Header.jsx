import React from "react";
import Nav from './Nav'
import Search from "./Search";

function Header () {
  return (
      <>
        <div>
          <Search />

        </div>
        <Nav />
      </>
  )
}

export default Header;