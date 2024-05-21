import { CloseOutlined, SearchOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import "./index.scss"
import { useState } from "react";

function Header() {
    const [showSearch,setShowSearch] =useState(false);
  return (
    <div className="header">
        <div className={`header_search ${showSearch ===  true ? "active":""}`}>
            <input placeholder="Search for a movie or show..." type="text" />
            <CloseOutlined onClick={()=> setShowSearch(false)}/>
        </div>
    <Link to={"/"}>
    <div className="header__logo">
        <img src="https://seekvectors.com/files/download/Netflix-Logo-19.png"
        alt=""
        width={80}/>
    </div></Link>
    <nav className="header__nav">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link >Movies</Link>
            </li>
            <li>
                <Link to="/movie-management">Movie Management</Link>
            </li>
            <li   >
            <SearchOutlined  onClick={()=>setShowSearch(true)}/>
            </li>
        </ul>
    </nav>
    </div>
  )
}

export default Header