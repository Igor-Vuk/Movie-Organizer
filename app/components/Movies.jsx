var React = require("react");
var movieList = require("movieList");

var Movies = React.createClass({

    getInitialState: function() {
        return {
            list: null 
        };
    },
    componentWillMount: function() {
        // Calling the function getMovie inside movieList component (returns the movies)
        var movies = movieList.getMovie();
        this.setState({
            list: movies
        });		
    },
    render: function() {
        return (
            <div>
                <div className="jumbotron">
                    <header className="container">
                        <div className="container text-center">
                            <h1>Lista svih filmova</h1>
                            <h3>Kliknite na ime za više informacija</h3>
                        </div>    
                    </header>
                </div>

                <div className="row" >
                    {/*Iterating over array*/}
                    {this.state.list.map(function(item) {
                        return (

                            <div key = {item.id}>
                                <div className="col-md-3 col-sm-6">
                                    <div className="thumbnail">
                                        <img src={item.image_poster_url}/>
                                        <div className="caption">
                                            {/*Taking id from from every movie and puting it inside data-target and id. That way we get modal for overy object in array.*/}
                                            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target={`#${item.id}`}>
                                                {item.title_hr}
                                            </button>

                                            <div className="modal fade" id={item.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                            <h4 className="modal-title" id="myModalLabel">{item.title_hr}</h4>
                                                        </div>
                                                        <div className="modal-body">
                                                            <ul className="list-group">
                                                                <li className="list-group-item"><strong className="upper">Izašao:</strong> {item.release_date}</li>
                                                                <li className="list-group-item"><strong className="upper">Zemlja:</strong> {item.zemlje}</li>
                                                                <li className="list-group-item"><strong className="upper">Jezik:</strong> {item.jezici}</li>
                                                                <li className="list-group-item"><strong className="upper">Redatelj:</strong> {item.redatelji}</li>
                                                                <li className="list-group-item"><strong className="upper">Scenaristi:</strong> {item.scenaristi}</li>
                                                                <li className="list-group-item"><strong className="upper">Glumci:</strong> {item.glumci}</li>
                                                                <li className="list-group-item"><strong className="upper">Žanrovi:</strong> {item.zanrovi}</li>
                                                            </ul>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-default btn-primary" data-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
});

module.exports=Movies;