import React, { Component} from 'react';

const Review = (props) => {
    let { data } = props;
    return (
        <div className="product__review">
            <h1>{data.username}</h1>
            <p>{data.text}</p>
        </div>
    )
};

const Reviews = (props) => {
    let { data } = props;
    return (
        <div className="product__reviews">
            {data.map((item, i) => <Review key={i} data={ item }/>)}
        </div>
    )
};

export default Reviews;
