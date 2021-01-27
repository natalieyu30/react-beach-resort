import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
// import PropTypes from 'prop-types';

function Room({images, slug, name, price}) {
  // console.log(room)
  // const {images, slug, name, price} = room;
  return (
    <article className='room'>
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room"/>
        <div className="price-top">
          <h6>$ {price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className='btn-primary room-link'>Features</Link>
      </div>
      <div className="room-info">{name}</div>
    </article>
  )
}

// Room.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   slug: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// }

export default Room
