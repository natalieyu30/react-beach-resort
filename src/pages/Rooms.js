import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';

import { Link } from 'react-router-dom';
// import { useGlobalContext } from '../context';

function Rooms() {
  // const data = useGlobalContext();
  // console.log(data)
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='our rooms' >
          <Link to='/' className='btn-primary'>return home</Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  )
}

export default Rooms