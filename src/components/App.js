import React from 'react';
import Card from './Card';
import Genres from './Genres';
import axios from 'axios';
import {endpoints, getImageUrl} from '../config';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            list: [],
            genres: [],
        };
    }

    componentDidMount() {
        axios
            .get(endpoints.mostPopularMovies())
            .then((data) => {
                this.setState({
                    list: data.data.results,
                });
            });
        axios
            .get(endpoints.genres())
            .then((data) => {
                this.setState({
                    genres: data.data.genres,
                });
            });
    }

    changeGenres(genreId) {
        axios.get(endpoints.genreMovies(genreId))
            .then((data) => {
                this.setState({
                    list: data.data.results
                });
            });
    }

    render() {
        return (
            <div>
                <div >
                {this.state.genres.map((genre) => (
                    <Genres
                        key={genre.id}
                        handler={this.changeGenres.bind(this)}
                        id={genre.id}
                        genre={genre.name}

                    />

                ))}
                </div>
                {this.state.list.map((card) => (
                    <Card
                        key={card.id}
                        title={card.original_title}
                        backgroundImage={getImageUrl(card.backdrop_path)}
                        data={card.release_date}
                        voteAverage={card.vote_average}
                        voteCount={card.vote_count}
                        description={card.overview}
                    />
                ))}
            </div>
        );
    }
}

export default App;