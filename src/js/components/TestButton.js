import React from 'react';

import { connect } from "react-redux";
import { showText } from "../actions/showText";

class TestButton extends React.Component {
    showText(){
        this.props.showText("This text comes from Redux");
    }
    render() {
        return (
            <button onClick={this.showText.bind(this)} className="btn btn-primary">Click to send Redux action</button>
        );
    }
}

const mapStateToProps = (state)=>({
    testText:state.test.text
});

export default connect(mapStateToProps, {showText} )(TestButton);