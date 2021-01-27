import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';

import { useGlobalContext } from '../context';

function RoomsContainer() {
  const {loading, sortedRooms, rooms} = useGlobalContext();
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList sortedRooms={sortedRooms}/>
    </div>
  )
}

export default RoomsContainer
