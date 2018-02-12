import React, { Component} from 'react';

class Review extends Component {
    render() {
        let { data } = this.props;
        return (
            <div className="product__review">
                <h1>{data.username}</h1>
                <p>{data.text}</p>
            </div>
        )
    }
}

export default class Reviews extends Component {
    render() {
        let { data } = this.props;
        return (
            <div className="product__reviews">
                {data.map((item, i) => <Review key={i} data={ item }/>)}
            </div>
        )
    }
}