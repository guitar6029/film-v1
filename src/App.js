import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './Components/User/Signin';
import Register from './Components/User/Register';
import { AuthContext } from './Context/AuthContext';
import Main from './Components/Main/Main';
import IndividualPage from './Components/IndividualFilmPage/IndividualPage';
import Account from './Components/Account/Account';
import WatchList from './Components/WatchList/WatchList';
import { FilmItemContext } from './Context/FilmItemContext';
import { NotificationContext } from './Context/NotificationContext';
import { SearchInputContext } from './Context/SearchInputContext';
import { ProtectedRoute } from './Context/ProtectedRoute';
import axios from 'axios';

import './App.css';


function App() {

  let FILM_DUMMY_DATA = [

  ]

  //once the add to watchlist gets clicked, the film data
  //gets passed from FilmItem all the way to app, and gets
  //stored in filmData, which gets passed down to Watchlist component
  let [filmData, addToWatchList] = useState(FILM_DUMMY_DATA);


  /****
   * Notification Modals
   * 
   */
  //let [notification, setNotification] = useState(false);



  /****for page rerouting , for the page to be rendered with the correct film data
  * the id gets saved on local storage, so when the user refreshes the page,
  * the id will not be lost, and page will no be blank, because
  * the id route is dependent on the id which gets set once the user
  *   clicks on the image
  **********************************************************************/
  const [routeID, setRoute] = useState(() => {

    const saved = localStorage.getItem('routeID');
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  localStorage.setItem("routeID", JSON.stringify(routeID));

  /*****
   * 
   * 
   * once the user clicks on the film image, the id gets sent
   * to the routeID, which gets registered via setRoute,
   * then the Individual Page gets the route with the id provided
   * 
   */
  const getIDForRoute = (id) => {

    let filmID = id
    console.log("This is film id : " + filmID);
    let route = `/title/${filmID}`;
    setRoute(route);
  }

  
  /******
   * 
   * handles the add to watchlist data
   * once the user click on to add to watlist, obj gets created with the
   * film details, pushed into the array with 
   * the previous data
   *  it gets passed to the watchlist component
   */
  const handleAddToWatchList = (filmObj) => {


    let isFound = filmData.some(item => {
      if (item.imdbID === filmObj.imdbID) {
        return true;
      }

      return false;


    });


    if (isFound) {
     
      console.log('Film/video already in watchlist');
    } else {
      addToWatchList(previousData => {
        return [filmObj, ...previousData];
      });
    }


    // if(filmData.filter(item => item.imdbID === filmObj.imdbID)){
    //   return console.log('item already in watchlist');
    // }
    // else{
    //   addToWatchList(previousData => {
    //     return [filmObj, ...previousData];
    //   });
    // }


  }



  /***
   * 
   * add film to watchlist, checks if film was already added,
   * if already added, will not add
   * 
   */
  const handleRemoveWatchItemList = (filmObj) => {

    let newArray = filmData.filter(item => item.imdbID !== filmObj);
    addToWatchList(newArray);
  }



  //for the two api requests that axios makes gets film data and
  // pushes the data into these arrays of objects
  const [featuredTodayFilms, setFeaturedFilms] = useState([]);
  const [exclusiveVideos, setExclusiveVideos] = useState([]);




  /******
   * 
   * 
   * random word for searches , for the given sections of the main page , 
   * i.e.  - Fan's Favorite, Todays Features, Exclusive , etc.. 
   * 
   *******/
  const randomWordForAPISearch = ['bad', "santa", "batman", "dark", 'family', 'great', 'vegas', 'win', "there", "will", "be", "blood", "clockwork", "orange", "apocalypse", "citizen", "silence", "godfather", "good"];

  let randomNum = Math.floor(Math.random() * randomWordForAPISearch.length);

  const URL1 = `https://www.omdbapi.com/?s=${randomWordForAPISearch[randomNum]}&apikey=${process.env.REACT_APP_OMDB_KEY}`;

  randomNum = Math.floor(Math.random() * randomWordForAPISearch.length);
  const URL2 = `https://www.omdbapi.com/?s=blade&apikey=${process.env.REACT_APP_OMDB_KEY}`;

  useEffect(() => {
    const fetchFeaturedTodayData = async () => {
      try {
        const response = await axios.get(URL1);
        let filmFeaturedTodayData = response.data.Search.map(({ Title, Year, imdbID, Poster }) => {
          return {
            imdbID: imdbID,
            Title: Title,
            Year: Year,
            Poster: Poster,
          }
        });

        setFeaturedFilms(filmFeaturedTodayData);


      } catch (e) {
        if (e.response) {

          console.log(e.response.data);
          console.log(e.response.status);
          console.log(e.response.headers);
        } else {
          console.log(`Error: ${e.message}`);
        }

      }
    }

    fetchFeaturedTodayData();


  }, []);

  useEffect(() => {
    const fetchExlusiveVideosData = async () => {
      try {
        const response = await axios.get(URL2);
        let exclusiveFilmData = response.data.Search.map(({ Title, Year, Poster, imdbID }) => {
          return {
            imdbID: imdbID,
            Title: Title,
            Year: Year,
            Poster: Poster,
          }
        });

        setExclusiveVideos(exclusiveFilmData);

      } catch (e) {
        if (e.response) {

          console.log(e.response.data);
          console.log(e.response.status);
          console.log(e.response.headers);
        } else {
          console.log(`Error: ${e.message}`);
        }
      }
    }

    fetchExlusiveVideosData();
  }, [])

  return (
    <NotificationContext>

    <AuthContext>

      <SearchInputContext>

        <FilmItemContext>

          <Routes>
            
            <Route path="/" element={<Main filmData={filmData} filmFeatured={featuredTodayFilms} filmExclusive={exclusiveVideos} addToWatchList={handleAddToWatchList} getFilmID={getIDForRoute} />} />
            
            <Route path="/user/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
            
            <Route path='/register/signin' element={<Signin />} />
            
            <Route path="/register" element={<Register />} />

            <Route path={routeID} element={<IndividualPage id={routeID} />} />
           
            <Route path='/user/account/watchlist' element={<ProtectedRoute><WatchList filmAddedToWatchList={filmData} removeWatchItemList={handleRemoveWatchItemList} /></ProtectedRoute>} />
            
          </Routes>

        </FilmItemContext>

      </SearchInputContext>

    </AuthContext>
    
    </NotificationContext>
  );
}

export default App;
