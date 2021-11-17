import React, { Component } from 'react'
import moment from 'moment'

import Card from '../components/Card'

class Weekly extends Component {
  constructor() {
    super()

    this.state = {
      movies: [],
      today: moment().format("YYYY-MM-DD"),
      lastWeek: moment().subtract(7, 'd').format("YYYY-MM-DD")
    }
  }

  componentDidMount() {
    const { today, lastWeek } = this.state

    fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=9958597c07ec90e02675c97691bf4506`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results }))
  }

  render() {
    const { movies, today, lastWeek } = this.state

    return (
      <>
        <h1>Weekly</h1>
        <p>Films sortis de {lastWeek} à {today}</p>
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

export default Weekly