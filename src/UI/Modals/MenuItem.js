import React from 'react'
import {Link} from 'react-router-dom';

function MenuItem(path, name ) {

  return (
         <Link to={path.path}>{path.name}</Link >
  )
}

export default MenuItem