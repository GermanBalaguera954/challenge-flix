import React from "react";

function Navbar() {
    const handleHomeClick = () => {
        // lógica para manejar el clic en Home
        console.log("Home clicked");
    };

    const handleNuevoVideoClick = () => {
        // lógica para manejar el clic en Nuevo Video
        console.log("Nuevo Video clicked");
    };

    return (
        <nav className="navbar">
            <h1>AluraFlix</h1>
            <div className="nav-links">
                <button onClick={handleHomeClick} style={linkStyle}>Home</button>
                <button onClick={handleNuevoVideoClick} style={linkStyle}>Nuevo Video</button>
            </div>
        </nav>
    );
}

const linkStyle = {
    background: 'none',
    border: 'none',
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
};

export default Navbar;