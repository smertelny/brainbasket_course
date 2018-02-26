import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../actions/actions";
import { getBook } from "../fakeApi";

class ProductDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            book: null
        };
    }
    componentDidMount() {
        getBook(`/book/${this.props.match.params.id}`).then( resp =>
            this.setState({book: resp})
        );
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({book: null});
        getBook(`/book/${nextProps.match.params.id}`).then( resp =>
            this.setState({book: resp})
        );
    }

    render() {
        if (!this.state.book) {
            return <div className="animate"><img className="animation" src="static/img/book_icon.svg" alt="Loading..." /></div>;
        }
        let { book } = this.state;
        return (
            <div className="product">
                <h1 className="product__name">{book.name} - {book.author}</h1>
                <div className="product__block">
                    <div className="product__image_block">
                        <img src={book.image} alt={`${book.name} image`} />
                    </div>  
                    <div className="product__desc">
                        <h2>Description:</h2>
                        <p>{book.description}</p>
                        <br />
                        <b>Genre:</b>
                        <ul className="product__details">
                            {book.genre.map( (genre, i) => <li key={i}>{genre}</li>)}
                        </ul>
                        <br />
                        <p><b>Price:</b>{book.price} {book.currency}</p>
                        <label htmlFor="product__quantity"><b>Quantity: </b></label>
                        <select id="product__quantity" name="quantity" ref={input => this.quantity = input }>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <button onClick={() => this.props.onBuyHandle(book, parseInt(this.quantity.value))} className="product__buy">Buy it now!</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBuyHandle: (product,set_quantity=1) => dispatch(addToCart(product, set_quantity))
    }
};

export default connect(null, mapDispatchToProps)(ProductDetails);
