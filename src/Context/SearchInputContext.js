import {useState, useEffect, useContext, createContext} from 'react';
import axios from 'axios';

export const SearchContext = createContext();

export const  SearchInputContext = ({children}) => {


    let [userInput, setUserInput] = useState('');
    let [searchTypeSelected, setSearchTypeSelected] = useState('');


    const getUserInput = (input) => {
        console.log('search input context : ' + input);
    }

    const getuUserInputandSearchType = (searchType, input) => {

        setUserInput(input);
        setSearchTypeSelected(searchType);
        getSearchResults(searchType, input);
    }

    const getSearchResults = (searchType, userInput ) =>{

        let parameters = '';
        if(searchType === 'Title'){
            
            parameters = 't';
        }
        else if (searchType === 'Year'){
            
            parameters = 'y';
        }
        else{
            
            parameters = 'i';
        }
        console.log(parameters);
        let url = `https://www.omdbapi.com/?${parameters}=${userInput}&apikey=${process.env.REACT_APP_OMDB_KEY}`;
    }

  return (

    <SearchContext.Provider  value={{userInput, getUserInput, getuUserInputandSearchType}}>
        {children}
    </SearchContext.Provider>
  )
}

export const SearchUserInput = () => {
    return useContext(SearchContext);
} 