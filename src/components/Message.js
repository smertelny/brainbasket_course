import React from "react";
import { connect } from "react-redux";

const MessageComponent = props => {
    return (
        <div 
            className={"alert" + (props.message.isDisplaying ? " show-alert" : "")} 
        >
            {`Ви додали товар ${props.message.text}`}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        message: state.message
    };
};

export default connect(mapStateToProps)(MessageComponent);
