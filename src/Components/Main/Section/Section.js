import React, {useRef} from 'react'
import Wrapper from '../../Wrapper';
import FilmItem from '../FilmItem/FilmItem';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Section({title, getFilmID, getFilmData, films}) {

  
  const handleGetID = (id) =>{
    getFilmID(id);
  }  

  
  const scroll = useRef(null);
  

  const handleLeftSlide = () => {
    
     scroll.current.scrollLeft = scroll.current.scrollLeft - 30;
  }


  const handleRightSlide = () => {
    
     scroll.current.scrollLeft = scroll.current.scrollLeft + 30;

  }

  const handleAddToWatchList = (filmObj) => {
  
    getFilmData(filmObj);
    
  }


  return (

    
    <Wrapper>
      <div className='section__block margin-top'>
        <h3 className='section__title'>{title}</h3>
        {films.map(film => 
           <FilmItem  
           key={film.imdbID}
           film={film}
           getFilmID={handleGetID} 
           addToWatchList={handleAddToWatchList} />
        )}
      </div>
    </Wrapper>
  )
}




// <Wrapper>
//       <div className='section__block'>
//         <h3 className='section__title'>{title}</h3>
//         <div className='section__horizontalScroll__container'>
//           <div className='arrow' onClick={handleLeftSlide} ><ArrowBackIosNewIcon /></div>
//           <div className='section__horizontalScroll' ref={scroll}>

//           {films.map(film => 
//            <FilmItem  
//            key={film.imdbID}
//            film={film}
//            getFilmID={handleGetID} 
//            addToWatchList={handleAddToWatchList} />
//         )}
//           </div>

//           <div className='arrow' onClick={handleRightSlide} ><ArrowForwardIosIcon /></div>
//         </div>
//       </div>
//     </Wrapper>





export default Section