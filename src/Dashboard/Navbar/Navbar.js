import React from 'react'
import "../Dashboard.css"
import SearchIcon from '@mui/icons-material/Search';
import Profile from './Profile';
const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-white shadow-sm ps-4 pe-5">
    <form className="d-flex" role="search">
      <input className="form-control  bg-body-tertiary search_input rounded-0" type="search" placeholder="Search for..." aria-label="Search"/>
      <button className="btn btn-primary px-1 rounded-0" type="submit"><SearchIcon/></button>
    </form>
    <Profile/>
</nav>
    </>
  )
}

export default Navbar