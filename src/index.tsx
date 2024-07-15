import * as React from 'react';
import * as ReactDOM from "react-dom";

import "../node_modules/antd/dist/antd.css"
import App from './App';
import "./styles.css";
import "./styles.scss";
import "./styles.less";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
