import React, { Component } from 'react'

import Card from '../components/Card'

class Popular extends Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9958597c07ec90e02675c97691bf4506`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results }))
  }

  render() {
    const { movies } = this.state

    return (
      <>
        <h1>Popular</h1>
        <div className="row">
          {movies.map(movie => (
            <Card
              key={movie.title}
              poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              title={movie.title}
              year={movie.release_date}
              description={movie.overview}
            />
          ))}
        </div>
      </>
    )
  }
}

export default Popular