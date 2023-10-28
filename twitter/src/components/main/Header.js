import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"


export default function Header() {
    return(
        <div className="header">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/post">Make Post</Link></li>
        </div>
    );
}
