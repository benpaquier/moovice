import React, { Component } from 'react'
import moment from 'moment'

import Card from '../components/Card'

class WeeklyBattle extends Component {
  constructor() {
    super()

    this.state = {
      movies: [],
      today: moment().format("YYYY-MM-DD"),
      lastWeek: moment().subtract(7, 'd').format("YYYY-MM-DD"),
      currentBattle: 0
    }

    this.handleCardClick = this.handleCardClick.bind(this)
  }

  componentDidMount() {
    const { today, lastWeek } = this.state

    fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=9958597c07ec90e02675c97691bf4506`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results }))
  }

  handleCardClick(id) {
    this.setState({ currentBattle: this.state.currentBattle + 2 })
    
    const weeklyFavorites = localStorage.getItem("weeklyFavorites")

    if (!weeklyFavorites) {
      localStorage.setItem("weeklyFavorites", JSON.stringify([id]))
    } else {
      let array = JSON.parse(weeklyFavorites)
      array = [...array, id]
      localStorage.setItem("weeklyFavorites", JSON.stringify(array))
    }
  }

  render() {
    const { movies, today, lastWeek, currentBattle } = this.state

    if (movies.length === 0) {
      return null
    }

    const films = [movies[currentBattle], movies[currentBattle + 1]]

    return (
      <>
        <h1>Weekly Battle</h1>
        {currentBattle === 20 ? (
          <>
            Vous avez parcouru tous les films
          </>
        ) : (
          <>
            <p>Films sortis de {lastWeek} à {today}</p>
            <div className="row">
              {films.map(movie => (
                <Card
                  key={movie.title}
                  handleClick={() => this.handleCardClick(movie.id)}
                  poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  title={movie.title}
                  year={movie.release_date}
                  description={movie.overview}
                />
              ))}
            </div>
          </>
        )}
      </>
    )
  }
}

export default WeeklyBattle