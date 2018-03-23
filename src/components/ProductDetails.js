import React from "react";
import { connect } from "react-redux";

import { addToCart, getBook } from "../actions/actions";

class ProductDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            isFetching: true
        };
    }
    componentDidMount() {
        this.props.getBook(`${this.props.match.params.id}`)
            .then(resp => this.setState({book: resp, isFetching: false}))
            .catch(error => error.response.status === 404
                ? this.setState({error:{message:"Такої книги не знайдено :("}, isFetching: false})
                : this.setState({error, isFetching: false})
            );
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({isFetching: true});
        this.props.getBook(`${nextProps.match.params.id}`)
            .then( resp =>this.setState({book: resp, isFetching: false}))
            .catch(error => error.response.status === 404
                ? this.setState({error:{message:"Такої книги не знайдено :("}, isFetching: false})
                : this.setState({error, isFetching: false})
            );
    }

    render() {
        if (this.state.isFetching) {
            return <div className="animate"><img className="animation" src="static/img/book_icon.svg" alt="Loading..." /></div>;
        }
        if (this.state.error) {
            return <div>{this.state.error.message}</div>
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

const mapStateToProps = (state, ownProps) => {
    return {
        book: state.products.items.find(book=> book.id === ownProps.match.params.id)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBuyHandle: (product,set_quantity=1) => dispatch(addToCart(product, set_quantity)),
        getBook: id => dispatch(getBook(id)),
    }
};

export default connect(null, mapDispatchToProps)(ProductDetails);
