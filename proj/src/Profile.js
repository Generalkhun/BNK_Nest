import React from "react";
import HeaderExampleImage from "./HeaderProfile.js";
import { Rating } from "semantic-ui-react";

const RatingExampleStar = () => (
  <Rating icon="star" defaultRating={3} maxRating={4} />
);

function Profile() {
  return (
    <div>
      <HeaderExampleImage />
    </div>
  );
}

export default Profile;
