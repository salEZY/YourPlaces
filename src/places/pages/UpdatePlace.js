import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "u1",
    title: "Beograd",
    description: "NAJJACI GRAD",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Beograd_night.png",
    address: "Djevdjelijska 15",
    location: {
      lat: 44.8005828,
      lng: 20.4868401,
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

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Descriptiom"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description(min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
