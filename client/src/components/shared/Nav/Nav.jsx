import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className="nav">
                <NavLink className="Logo" to="/">BlogApp</NavLink>
                <div className="links">
                    <NavLink className="link" to="/blogs">Blogs</NavLink> 
                </div>
            </div>
        </nav>
    );
};

export default Nav;