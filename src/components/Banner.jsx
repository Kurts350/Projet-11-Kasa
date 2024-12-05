import React from 'react'
import banner from '../assets/banner.png'
import  '../sass/components/Banner.scss'

function Banner() {
  return (
    <div className='banner'>
      <img src={banner} alt='Kasa' className='banner__img' />
      <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export {Banner}
