import React from 'react';
// import Hero from '../components/Hero';
import Banner from '../components/Banner';
import defaultBcg from '../images/room-1.jpeg';

import { Link, useParams } from 'react-router-dom';
import {useGlobalContext}  from '../context';
import StyledHero from '../components/StyledHero';

function SingleRoom() {
  const { rooms } = useGlobalContext();
  const {slug} = useParams();
  // console.log(slug)
  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find(item => item.slug === slug);
    return room;
  }
  const room = getRoom(slug);
  
  if (!room) {
    return (
      <div className="error">
        <h3>No such room could be found...</h3>
        <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
      </div>
    )
  } else {
    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
    const [mainImg, ...restImg] = images;
    // console.log(restImg)
    return (
      <>
        <StyledHero img={mainImg || defaultBcg}>
          <Banner title={`${name} room`} >
            <Link to='/rooms' className='btn-primary'>Back to Rooms</Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {restImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price: $ {price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>Max Capacity: {capacity > 1 ? `${capacity} people`:`${capacity} person`}</h6>
              <h6>{pets? 'Pets Allowed' : 'No Pets Allowed'}</h6>
              <h6>{breakfast && 'Free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>
            })}
          </ul>
        </section>
      </>
    )
  }
}

export default SingleRoom
