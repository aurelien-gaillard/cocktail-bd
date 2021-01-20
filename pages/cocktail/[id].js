import React, { useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import { fetchSingleCocktail } from '../../features/singlecocktail/singleCocktailSlice'

export default function SingleCocktail() {
  const dispatch = useDispatch()
  const router = useRouter()
  const id = router.query.id

  const status = useSelector((state) => state.singleCocktail.status)
  const cocktail = useSelector((state) => state.singleCocktail.cocktail)

  useEffect(() => {
    dispatch(fetchSingleCocktail(id))
  }, [])

  if (status === 'loading') {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
    return (
      <section className='section cocktail-section'>
        <Link href='/'>
          <a className='btn btn-primary'>back home </a>
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
