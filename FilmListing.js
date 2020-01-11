import React, { Component } from 'react';
import FilmRow from './FilmRow';


class FilmListing extends Component {
    
    constructor(props) {
		super()
		this.state = {
			filter: "all",
			faves: []
		}
	}

	handlFilterClick = (filter) => {
		this.setState({filter: filter});
	}

	handleFaveToggle = (film) => {
	    const newFaves = this.state.faves.slice();
	    const filmIndex = this.state.faves.indexOf(film);
	    console.log("filmIndex", filmIndex);
	    if(filmIndex<0) {
	      console.log(`Adding ${film.title} to faves...`);
	      newFaves.push(film);
	    } else {
	      newFaves.splice(filmIndex, 1);
	      console.log(`Removing ${film.title} from faves...`);
	    }
	    this.setState({faves: newFaves});
  	}

      render() {
        /*const filmsToDisplay = this.state.filter==="all" ? this.props.films : this.props.faves*/
        const filmsToDisplay = this.state.filter==="all" ? this.props.films : this.state.faves
        const allFilms = filmsToDisplay.map( (film, i) => {
            return (
                    <FilmRow 
                        key={i} 
                        film={film} 
                        // isFave={this.props.faves.includes(film)}
                        isFave={this.state.faves.includes(film)}  
                        // onFaveToggle={this.props.onFaveToggle} 
                        onFaveToggle={this.handleFaveToggle}
                        handleDetailsClick={this.props.handleDetailsClick}
                    />
                )
        });
   
         return (
            <div className="film-list">
               <h1 className="section-title">FILMS</h1>
                   <div className="film-list-filters">
                       <div className={`film-list-filter ${this.state.filter==="all" ? "is-active" : ""}`} onClick={() => this.handlFilterClick('all')}>
                           ALL
                           <span className="section-count">{this.props.films.length}</span>
                       </div>
                       <div className={`film-list-filter ${this.state.filter==="faves" ? "is-active" : ""}`} onClick={() => this.handlFilterClick('faves')}>
                           FAVES
                              {/*<span className="section-count">{this.props.faves.length}</span>*/}
                              <span className="section-count">{this.state.faves.length}</span>
                       </div>
                      </div>
               {/*Step 4: <h1 className="film-title">{this.props.films[0].title}</h1>*/}
               {allFilms}
             </div>
          );
       }
   }

export default FilmListing;


