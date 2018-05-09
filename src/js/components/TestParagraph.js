import React from 'react';
import { connect } from "react-redux";
import { showText } from "../actions/showText";

class TestParagraph extends React.Component {
    render() {
        return (
            <p>{this.props.testText || this.props.text}

                <style jsx>{`
            p::after {
                content:" ...and this text comes from CSS-in-JS component inside this component!";
                color: black;
            }
            `}</style>
            </p>
        );
    }
}

const mapStateToProps = (state) => ({
    testText: state.test.text
});

export default connect(mapStateToProps, { showText })(TestParagraph);