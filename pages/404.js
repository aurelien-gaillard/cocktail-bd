import React from 'react'
import Link from 'next/link'
export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>This page doesn't exist</h1>
        <Link href='/'>
          <a className='btn btn-primary'>back home </a>
        </Link>
      </div>
    </section>
  )
}
