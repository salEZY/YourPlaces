import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Beograd',
    description: 'NAJJACI GRAD',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Beograd_night.png',
    address: 'Kneza Milosa 2',
    location: {
      lat: 44.8149028,
      lng: 20.1424149
    },
    creator: 'p1'
  },
  {
    id: 'p2',
    title: 'Beograd',
    description: 'GRAD BEO',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Beograd_night.png',
    address: 'Bore Prodanovica 9a',
    location: {
      lat: 44.8076221,
      lng: 20.4929999
    },
    creator: 'p2'
  }
]

const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces