import React, { Component } from 'react'

import Card from '../components/Card'

class PopularBattle extends Component {
  constructor() {
    super()

    this.state = {
      movies: [],
      currentBattle: 0
    }

    this.handleCardClick = this.handleCardClick.bind(this)
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9958597c07ec90e02675c97691bf4506`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results }))
  }

  handleCardClick(id) {
    this.setState({
      currentBattle: this.state.currentBattle + 2
    })

    const favorites = localStorage.getItem("favorites")
    
    if (!favorites) {
      localStorage.setItem("favorites", JSON.stringify([id]))
    } else {
      let array = JSON.parse(favorites)
      array = [...array, id]
      localStorage.setItem("favorites", JSON.stringify(array))
    }
  }

  render() {
    const { currentBattle, movies } = this.state

    if (movies.length === 0) {
      return null
    }
    
    // const films = movies.filter((movie, index) => index === currentBattle || index === currentBattle + 1)
    // => les deux méthodes sont équivalentes
    const films = [movies[currentBattle], movies[currentBattle + 1]]

    return (
      <>
        <h1>Popular Battle</h1>
        {currentBattle === 20 ? (
          <>
            Vous avez parcouru tous les films
          </>
        ) : (
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
        )}
      </>
    )
  }
}

export default PopularBattle