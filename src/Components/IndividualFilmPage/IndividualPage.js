import Navbar from '../Navbar/Navbar';
import Wrapper from '../Wrapper'
import {Film} from '../../Context/FilmItemContext';
import './IndividualPage.css';


import './IndividualPage.css';

function IndividualPage(id) {


     let {filmObj} = Film();

     const styles = {
        // backgroundImage : `url(${filmObj.Poster})`,
        backgroundImage: `url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`
    
     }

    console.log(filmObj.Title);
    return (

       <Wrapper>
          <Navbar/>
          <div style={styles} className='individualFilm__block'>
            <div className='individualFilm'>
            <div className='individualFilm__image'>
               <img src={filmObj.Poster}  alt={filmObj.imdbID}/>
            </div>
            <div className='individualFilm__title'>
                <h3>{filmObj.Title}</h3>
            </div>
            <div className='individualFilm__year'>
                <span>{filmObj.Year}</span>
            </div>
            </div>
          </div>
       </Wrapper>


    )
}

export default IndividualPage