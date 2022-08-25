import React from "react"
import reactLogo from "../images/logo.png"

const Header = () => {
    return (
        <div>
            <nav>
                <img src={reactLogo} alt="React-logo" className="nav--icon" />
                <h1 className="nav--text">ReactFacts</h1>
                <h2 className="nav--title">React Course-Project 1</h2>
            </nav>
        </div>
    )
}

export default Header