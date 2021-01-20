import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link href='/'>
          <a>
            <img src='/logo.svg' alt='cocktail db logo' className='logo' />
          </a>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link href='/'>
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>about</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
