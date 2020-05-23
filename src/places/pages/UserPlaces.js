import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "u1",
    title: "Beograd",
    description: "NAJJACI GRAD",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Beograd_night.png",
    address: "Kneza Milosa 20",
    location: {
      lat: 44.8074093,
      lng: 20.4591701,
    },
    creator: "u1",
  },
  {
    id: "u2",
    title: "Beograd",
    description: "GRAD BEO",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Beograd_night.png",
    address: "Bore Prodanovica 9a",
    location: {
      lat: 44.807148,
      lng: 20.495167,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
