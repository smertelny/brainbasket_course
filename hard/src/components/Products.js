import React, { Component } from "react";
import { connect } from "react-redux";

import Product from "./Product";
import { getVisibleProducts } from "../actions/actions";


class Products extends Component {
    render() {
        if (this.props.products) {
            if (this.props.products.isFetching) {
                return <div className="animate"><img className="animation" src="static/img/book_icon.svg" alt="Loading..." /></div>;
            }
            if (!this.props.products.isFetching && this.props.products.items.length === 0) {
                return <h1 style={{textAlign: "center"}}>There is no products here</h1>;
            }

            if (this.props.match.params.filter) {
                return (
                    <div className="products">
                        {this.props.products.items.filter( prod => prod.genre.find(elem => elem.toLowerCase() === this.props.match.params.filter) ).map((prod) => <Product {...this.props} key={prod.id} data={prod} />)}
                    </div>
                );
            }

            return (
                <div className="products">
                    {this.props.products.items.map( (prod) => <Product key={prod.id} data={prod} />)}
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

export default connect(mapStateToProps, null)(Products);
