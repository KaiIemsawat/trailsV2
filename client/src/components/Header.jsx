import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <h1>Trails</h1>
            <Link to="/">Home</Link>
            <br />
            <Link to="/addTrail">Add new trail</Link>
        </div>
    );
};

export default Header;
