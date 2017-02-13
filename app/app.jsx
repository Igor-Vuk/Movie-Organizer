var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, browserHistory} = require("react-router");

// Components
var Main = require("Main");
var Movies = require("Movies");
var Akcija = require("Akcija");
var Komedija = require("Komedija");
var Drama = require("Drama");
var Animirani = require("Animirani");

// Styles
require("bootstrap/dist/css/bootstrap.min.css");
require("customStyles");

// Routes
ReactDOM.render (
    <Router history = {browserHistory}>
        <Route path="/" component={Main}>
            <Route path="akcija" component={Akcija}/>
            <Route path="komedija" component={Komedija}/>
            <Route path="drama" component={Drama}/>
            <Route path="animirani" component={Animirani}/>
            <IndexRoute component={Movies}/>
        </Route>
    </Router>,
    document.getElementById("app")
);
