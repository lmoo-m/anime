import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Streaming from "../Streaming";
import Genres from "../Genres";
import { useRouter } from "next/navigation";
import { PiSkipBackFill } from "react-icons/pi";
import Loading from "../Loading";
import { motion } from "framer-motion";

const DetailAnime = ({ anime, image }) => {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  return (
    <>
      {anime ? (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: [1, 1], y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className=" relative gap-3 bg-primary text-white p-5 rounded-md md:min-h-3/4 md:w-3/4 w-full flex md:flex-row flex-col"
        >
          <div>
            <div className="flex justify-center">
              <img
                src={image}
                alt={anime.title}
                className="object-cover max-h-80 min-h-80"
              />
            </div>
            <p className="text-sm mt-2">{anime.rating}</p>
            <h1 className="text-md font-bold">Genres: </h1>
            <div className="flex flex-wrap gap-1  mt-1">
              <Genres anime={anime} />
            </div>
          </div>
          <div className=" md:w-3/4">
            <div className="flex justify-between">
              <h1 className=" text-xl font-bold">{anime.title}</h1>
              <div className="flex items-center gap-1">
                <AiFillStar />
                {anime.score}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold mt-3">Synopsis: </h2>
              <p
                className="text-sm overflow-hidden leading-5 mt-2 transition-all"
                style={{ maxHeight: `${showMore ? "100%" : "calc(20px * 3)"}` }}
              >
                {anime.synopsis}
              </p>
              <button
                className="hover:text-accent text-sm "
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Hide..." : "Show more..."}
              </button>
            </div>
            <div>
              <h2 className="text-lg font-bold mt-3">Streaming</h2>
              <div className="flex gap-2 flex-wrap mb-10 md:mb-0">
                <Streaming anime={anime} />
              </div>
            </div>
          </div>
          <button
            className="absolute flex items-center bottom-4 right-5 bg-accent py-1 px-2 rounded-md hover:bg-white hover:text-accent"
            onClick={() => router.back()}
          >
            <PiSkipBackFill />
            Back
          </button>
        </motion.div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DetailAnime;
