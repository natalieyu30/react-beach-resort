import React from 'react';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
import { useGlobalContext} from '../context';
// import { RoomContext } from '../context';


function FeaturedRooms() {
  const {featuredRooms, loading} = useGlobalContext();
  // console.log(featuredRooms, loading)
  let rooms = featuredRooms.map(room =>  {
          return <Room key={room.id} {...room} />
        });
  

  return(
    <section className='featured-rooms'>
      <Title title='Featured Rooms'/>
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  ) 
}

export default FeaturedRooms
