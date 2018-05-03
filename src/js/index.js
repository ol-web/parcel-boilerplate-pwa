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
import log from './log';

const obj = { prop: 32 };

const arrowFn = () => {

};

const spreadObj = {
    ...obj,
    arrowFn
};

log(spreadObj);