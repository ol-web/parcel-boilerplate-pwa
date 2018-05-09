// ******external bootstrap doesnt seem to work without editing bootstrap module's package.json to remove some unsupported browserslist options******

// normalize for bootstrap, 
// import 'bootstrap/dist/css/bootstrap-reboot.min';

// bootstrap grid only
// import 'bootstrap/dist/css/bootstrap-grid.min.css';

// full bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

// full bootstrap with lux theme
import "../scss/bootstrap-lux.min.scss";

import '../scss/styles.scss';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from "react-redux";
import store from "./store";

import TestParagraph from "./components/TestParagraph";
import TestButton from "./components/TestButton";

const obj = { prop: "something" };
const arrowFn = () => { };
const spreadObj = { ...obj, arrowFn };
console.log(spreadObj);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <TestParagraph text="This paragraph is rendered by React" />
                    <TestButton />
                </div>
            </Provider>
        );
    }
}

render(<App />, document.querySelector(".app"));

