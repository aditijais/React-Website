import React from "react"
import reactLogo from "../images/logo.png"

const Header = () => {
    return (
        <div>
            <nav className="nav">
                <img src={reactLogo} alt="React-logo" className="nav--icon" />
                <h1 className="heading">React</h1>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header