import React, {useContext, createContext, useState} from 'react'

const FilmContext = createContext();

export const FilmItemContext = ({children}) => {


    const [film, setFilm] = useState('');
    const [filmObj, setFilmObj] = useState({});

    const getFilmID = (id) => {
        let filmID = id;
        setFilm(filmID);
        
    }

    const getFilmObj = (filmObject) => {
      setFilmObj(filmObject);
}
  return (
    <FilmContext.Provider  value={{film, filmObj, getFilmID, getFilmObj}}>
        {children}
    </FilmContext.Provider>
  )
}

export const Film = () => {
    return useContext(FilmContext); 
}