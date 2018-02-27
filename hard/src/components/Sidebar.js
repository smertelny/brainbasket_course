import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { GENRES } from "../constants";

const Sidebar = (props) => (
    <div className="sidebar">
        <ul>
            <li><NavLink exact to="/" activeClassName="active" >Всі книги</NavLink></li>
            {GENRES.map( (genre, index) => <li key={index}><NavLink to={`/${genre.toLowerCase()}`} activeClassName="active" >{genre}</NavLink></li>)}
        </ul>
    </div>
);

const mapDispatchToProps = dispatch => {
    return {
        onClick: (filter) => {
            dispatch({type: "CHANGE_FILTER", filter});
        }
    };
};

export default Sidebar;
