import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Main } from "./containers";
import "./styles/import.scss";

class App extends Component {
	render() {
		return <Main />;
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
