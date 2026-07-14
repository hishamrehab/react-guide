import React from 'react'
import { Link } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const HomePage = () => {
  return (
    <><h1>My Home Page
     <p>Go to <Link  to="/products">the products page</Link></p>  
    </h1></>
  )
}

export default HomePage 