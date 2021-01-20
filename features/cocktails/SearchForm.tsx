import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from './cocktailsSlice'

const SearchForm =() => {
  const dispatch = useDispatch()
  const searchValue = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    dispatch(setSearchTerm(searchValue.current.value))
  }
  const handleSubmit =(e: React.SyntheticEvent)=> {
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

export default SearchForm