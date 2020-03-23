import React from "react";

const baseImageUrl = "https://image.tmdb.org/t/p/original";
const noimage = "https://pixabay.com/";
const CastListItem = ({ id, name, profile_path, character }) => {
  return (
    <li id={id}>
      <img
        src={profile_path ? `${baseImageUrl}${profile_path}` : `${noimage}`}
        alt="Movie effigy"
        width="100px"
        height="150px"
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastListItem;
