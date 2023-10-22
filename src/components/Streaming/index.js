import React from "react";
import Link from "next/link";

const Streaming = ({ anime }) => {
  return (
    <>
      {anime.streaming?.length === 0
        ? "Streaming not found..."
        : anime?.streaming?.map((data, i) => {
            return (
              <Link
                href={data.url}
                key={i}
                target="_blank"
                className="bg-accent rounded-md p-2 hover:bg-white hover:text-accent transition-all"
              >
                {data.name}
              </Link>
            );
          })}
    </>
  );
};

export default Streaming;
