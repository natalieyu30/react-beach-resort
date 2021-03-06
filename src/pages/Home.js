import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Hero>
        <Banner title='Luxurious rooms' subtitle='Delux rooms starting at $299'>
          <Link to='/rooms' className='btn-primary'>Our Rooms</Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
  </>
  )
}

export default Home
