import React from "react";
import { connect } from "react-redux";

const MessageComponent = props => {
    console.log(props); 
    return (
        props.message.isDisplaing ? <div className="alert" style={{opacity: "none"}} >{`Ви додали товар ${props.message.text}`}</div> : null
    );
};

const mapStateToProps = state => {
    return {
        message: state.message
    };
};

const Message = connect(
    mapStateToProps,
    null
)(MessageComponent);

export default Message;
