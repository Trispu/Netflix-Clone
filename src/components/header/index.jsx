import { SearchOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import "./index.scss"

function Header() {
  return (
    <div className="header">
    <div className="header__logo">
        <img src="https://seekvectors.com/files/download/Netflix-Logo-19.png"
        alt=""
        width={80}/>
    </div>
    <nav className="header__nav">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/movie-management">Movies</Link>
            </li>
            <li>
            <SearchOutlined />
            </li>
        </ul>
    </nav>
    </div>
  )
}

export default Header