import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Navbar from "./Navbar";
import Products from "./Products";
import Sidebar from "./Sidebar";
import ProductDetails from "./ProductDetails";
import Message from "./Message";
import { getPosts, msgDismiss, getProducts } from "../actions/actions";

class App1 extends Component {
    componentDidMount() {
        this.props.msgDismiss();
        this.props.getPosts();      
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="wrapper">
                    <Message />
                    <Sidebar />
                    <Switch>
                        <Route exact path="/:filter?" component={Products} />
                        <Route exact path="/book/:id(\d+)" component={ProductDetails}/>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(getProducts()),
        msgDismiss: () => dispatch(msgDismiss())
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App1));
