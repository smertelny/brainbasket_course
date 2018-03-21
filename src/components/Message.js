import React from "react";
import { connect } from "react-redux";

const MessageComponent = props => {
    return (
        props.message.isDisplaing && <div className={`alert ${props.message.type}`} style={{opacity: "none"}} >{`Ви додали товар ${props.message.text}`}</div>
    );
};

const mapStateToProps = state => {
    return {
        message: state.message
    };
};

export default connect(mapStateToProps)(MessageComponent);
