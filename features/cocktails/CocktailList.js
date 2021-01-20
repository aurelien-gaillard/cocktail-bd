import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import Cocktail from './Cocktail.tsx'

export default function CocktailList() {
  const cocktails = useSelector((state) => state.cocktails.cocktails)
  const status = useSelector((state) => state.cocktails.status)
  if (status === 'loading') {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
