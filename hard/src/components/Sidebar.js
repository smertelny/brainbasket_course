import React from "react";
import { Link, NavLink } from "react-router-dom";

import { GENRES } from "../constants";

const Sidebar = () => (
    <div className="sidebar">
        <ul>
            <li><NavLink exact to="/" activeClassName="active" >Всі книги</NavLink></li>
            {GENRES.map( (genre, index) => <li key={index}><NavLink to={`/${genre.toLowerCase()}`} activeClassName="active" >{genre}</NavLink></li>)}
        </ul>
    </div>
);

export default Sidebar;
