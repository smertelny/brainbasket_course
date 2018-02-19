import React from "react";
import { Link, NavLink } from "react-router-dom";

import { GENRES } from "../constants";

const Sidebar = () => (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Всі книги</Link></li>
        {GENRES.map( (genre, index) => <li key={index}><NavLink to={`/${genre.toLowerCase()}`} activeStyle={{color: "green"}} >{genre}</NavLink></li>)}
      </ul>
      </div>
);

export default Sidebar;
