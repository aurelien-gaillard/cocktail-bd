import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from './cocktailsSlice'

export default function SearchForm() {
  const dispatch = useDispatch()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    dispatch(setSearchTerm(searchValue.current.value))
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}
