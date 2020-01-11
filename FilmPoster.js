// import React from 'react';

// const FilmPoster = (props) => {
// 	const url = `https://image.tmdb.org/t/p/w780${props.film.poster_path}`;
// 	return(<img src={url} alt="poster"/>)
// }

// export default FilmPoster;

import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {
	const url = `https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`;
	return(<img src={url} alt="poster"/>)
  }
}

export default FilmPoster;