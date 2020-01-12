import React, { Component } from 'react';

class FilmPoster extends Component {
    state = {  }
    render() { 
        let posterUrl = "https://image.tmdb.org/t/p/w780/" 
        + this.props.film.poster_path;
        return ( <img src={posterUrl} alt="" /> );
    }
}
 
export default FilmPoster;