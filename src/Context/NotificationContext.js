import React, {useContext, createContext, useState} from 'react'
//import {v4} from  'uuid';
//import Notification from '../UI/Notification';
import './NotificationContext.css';

const NotifyContext = createContext();

export const NotificationContext = ({children}) => {

        const note = (type, message) => {
            console.log(`${type}, : ${message}`);
        }
    
  return (
    <NotifyContext.Provider value={note}>
        {children}
    </NotifyContext.Provider>
    
  )
}

export const NotifyUserContext = () => {
    return useContext(NotifyContext);
}