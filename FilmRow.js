import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';



const FilmRow = (props) => {
        
        const date = new Date(props.film.release_date);
        return (
            

            <div className="film-row" onClick={() => {props.handleDetailsClick(props.film)}}>
                <FilmPoster film={props.film} />
                <div className="film-summary">
                <div className="film-row-fave add_to_queue">
                <p className="material-icons">add_to_queue</p>
                </div>
 
                    <h1>{props.film.title}</h1>
                    <p>{date.getFullYear()}</p>
                </div>
                <Fave isFave={props.isFave} onFaveToggle={() => {props.onFaveToggle(props.film)} }/>
            </div>
        );
    }

export default FilmRow;