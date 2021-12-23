// Write your code here

import MoviesSlider from '../MoviesSlider'

import {
  PrimeVideoPage,
  PrimeVideoImg,
  ActionMoviesHead,
  ComedyHead,
  MoviesCon,
} from './styledComponents'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <PrimeVideoPage>
      <PrimeVideoImg
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MoviesCon>
        <ActionMoviesHead>Action Movies</ActionMoviesHead>

        <MoviesSlider moviesList={actionMovies} />
        <ComedyHead>Comedy Movies</ComedyHead>
        <MoviesSlider moviesList={comedyMovies} />
      </MoviesCon>
    </PrimeVideoPage>
  )
}

export default PrimeVideo
