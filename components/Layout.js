import React, { useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import { fetchCocktails } from '../features/cocktails/cocktailsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state) => state.cocktails.searchTerm)

  useEffect(() => {
    dispatch(fetchCocktails())
  }, [searchTerm])

  return (
    <div>
      <Head>
        <title>Cocktail DB</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
