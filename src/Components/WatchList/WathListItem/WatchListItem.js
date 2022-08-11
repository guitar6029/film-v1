import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CancelIcon from '@mui/icons-material/Cancel';
import './WatchListItem.css';

function WatchListItem(film) {

  const handleRemoveFilmItem = () => {
    film.getID(film.film.imdbID);
  }

  return (
    <div className='section__watchlist'>

      <div className='section__watchlist__img'>
        <img src={film.film.Poster} alt={film.film.Title} />
      </div>

      <div className='section__info'>

        <div className='section__watchlist__title'>
          <h3>{film.film.Title}</h3>
        </div>

        <div className='section__watchlist__year'>
          <h3>{film.film.Year}</h3>
        </div>

      </div>

      <div className='section__watchlist__icon'>
        <DeleteForeverIcon className="removeWatchItem" onClick={handleRemoveFilmItem} />
      </div>

    </div>


  )
}

export default WatchListItem