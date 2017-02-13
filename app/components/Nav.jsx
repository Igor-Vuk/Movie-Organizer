var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = React.createClass({
    render: function() {
        return (
			<div>
				
				<nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">

                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">moj-film.hr</a>

                        </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-left">
                                    <li>
                                        <IndexLink to="/" activeClassName = "active" activeStyle = {{fontWeight: "bold", fontSize:"16px"}}>Svi Filmovi</IndexLink>
                                    </li>
                                    <li>
                                        <Link to="/akcija" activeClassName = "active" activeStyle = {{fontWeight: "bold", fontSize:"16px"}}>Akcija</Link>
                                    </li>
                                    <li>
                                        <Link to="/komedija" activeClassName = "active" activeStyle = {{fontWeight: "bold", fontSize:"16px"}}>Komedija</Link>
                                    </li>
                                    <li>
                                        <Link to="/drama" activeClassName = "active" activeStyle = {{fontWeight: "bold", fontSize:"16px"}}>Drama</Link>
                                    </li>
                                    <li>
                                        <Link to="/animirani" activeClassName = "active" activeStyle = {{fontWeight: "bold", fontSize:"16x"}}>Animirani</Link>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </nav>

			</div>
        );
    }
});
module.exports=Nav;









{/*<h1>This is Nav Component</h1>
<IndexLink to="/" activeClassName = "active" activeStyle = {{fontWeight: "bold"}}>Svi Filmovi</IndexLink>
<Link to="/drama" activeClassName = "active" activeStyle = {{fontWeight: "bold"}}>Drama</Link>
<Link to="/romantika" activeClassName = "active" activeStyle = {{fontWeight: "bold"}}>Romantika</Link>
<Link to="/akcija" activeClassName = "active" activeStyle = {{fontWeight: "bold"}}>Akcija</Link>
<Link to="/komedija" activeClassName = "active" activeStyle = {{fontWeight: "bold"}}>Komedija</Link>
<Link to="/triler" activeClassName = "active" activeStyle = {{fontWeight: "bold"}}>Triler</Link>
<Link to="/animirani" activeClassName = "active" activeStyle = {{fontWeight: "bold"}}>Animirani</Link>*/}