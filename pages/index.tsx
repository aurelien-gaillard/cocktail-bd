import React from 'react'
import CocktailList from '../features/cocktails/CocktailList'
import SearchForm from '../features/cocktails/SearchForm'

export default function Home() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}
