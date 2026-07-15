import React from 'react'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
  return (
    <>
    <MainNavigation />
    <main>
        <h1>An error occurred!</h1>
        <p>Something went wrong!</p>
    </main>
    </>
  )
}

export default ErrorPage