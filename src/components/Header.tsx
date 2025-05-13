import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname
    const [isPublic, setIsPublic] = useState(true)

    useEffect(() => {
        currentPath === "/" ? setIsPublic(true) : setIsPublic(false)
    }, [currentPath])

    return (
        <nav className="main-header ">
            <Link to="/" className={`header-item ${isPublic ? "add-button " : ""}`} style={{ textDecoration: "none" }}>Public</Link>
            <Link to="/dashboard" className={`header-item ${isPublic ? "" : "add-button"}`} style={{ textDecoration: "none" }}>Dashboard</Link>
        </nav>
    )
}

export default Header