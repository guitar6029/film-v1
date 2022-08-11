import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import FilmModal from '../../../UI/Modals/FilmModal'
import { UserAuth } from '../../../Context/AuthContext';
import { Film } from '../../../Context/FilmItemContext';
import {NotifyUserContext} from '../../../Context/NotificationContext';
import './FilmItem.css';

function FilmItem(film) {

  //const {note} = NotifyUserContext();

  const [myPath, setPath] = useState('');

  const navigate = useNavigate();

  const { user } = UserAuth();
  const {getFilmObj} = Film();
  
  const handleLink = () => {
    let id = film.film.imdbID;
    setPath(id);

  }


  const handleClick = (e) => {

    let id = film.film.imdbID;
    let obj = film.film;
    
    getFilmObj(obj);
    film.getFilmID(id);

  }

  const handleAddToWatchlist = () => {
  
    if (!user) {
      navigate('/register/signin')
    } else {

      let filmObj = {
        imdbID: film.film.imdbID,
        Title: film.film.Title,
        Year: film.film.Year,
        Poster: film.film.Poster

      }
      //note('success', 'added to watchlist');
      film.addToWatchList(filmObj);
    }
  }

  return (

    <div key={film.imdbID} className='section__film' onLoad={handleLink}>
      
      <Link to={`/title/${myPath}`} ><img src={film.film.Poster} alt={film.film.Title} onClick={handleClick} /></Link>
      
      <h3 className='section__filmTitle'>{film.film.Title}</h3>
      
      <span className="section__filmWatchlist" onClick={handleAddToWatchlist}>+ Watchlist</span>
      
      <FilmModal className='section__watchOptions' imdbID={film.film.imdbID} />
      
      <span className='section__filmTrailer'>Trailer</span>
    
    </div>
  )
}

export default FilmItem