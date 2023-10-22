import React from "react";

const Genres = ({ anime }) => {
  return (
    <>
      {anime.genres?.map((data, i) => {
        return (
          <p
            key={i}
            className="text-sm font-bold shadow-secondary shadow-md p-2 rounded-md"
          >
            {data.name}
          </p>
        );
      })}
    </>
  );
};

export default Genres;
