import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { getGenres } from "../actions/actions";

const Sidebar = (props) => (
    <div className="sidebar">
        <ul>
            <li onClick={() => props.handleClick("all")}><NavLink exact to="/" activeClassName="active" >Всі книги</NavLink></li>
            {props.genres.map( (genre, index) => <li onClick={() => props.handleClick(genre)} key={index}><NavLink to={`/${genre.toLowerCase()}`} activeClassName="active" >{genre}</NavLink></li>)}
        </ul>
    </div>
);

const mapStateToProps = state => {
    return {
        genres: state.genres
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (filter) => {
            dispatch({type: "CHANGE_FILTER", filter});
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
