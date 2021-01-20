import React from 'react'
import Link from 'next/link'

type CocktailProps = {
  image: string,
  name: string,
  id: number,
  info: number,
  glass: number
}

const Cocktail = ({ image, name, id, info, glass }: CocktailProps) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link href={`/cocktail/${id}`}>
          <a className='btn btn-primary btn-details'>details</a>
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
