import React, { Component } from 'react';

class Fave extends Component {

	


	handleClick = (e) => {
		e.stopPropagation();
		console.log("handling Fave click!");
		this.props.onFaveToggle();
	}

	render() {
		const toQueue = this.props.isFave ? "remove_from_queue" : "add_to_queue"
		return(
			<div className={`film-row-fave ${toQueue}`} onClick={this.handleClick}>
	  			<p className="material-icons">add_to_queue</p>
			</div>
		)
	}
}

export default Fave;