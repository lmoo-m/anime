"use client";
import DetailAnime from "@/components/DetailAnime";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = params;
  const [anime, setAnime] = useState({});

  const getAnime = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}anime/${id}/full`
    );
    const { data } = await response.json();
    setAnime(data);
  };

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div className="flex justify-center items-center mt-8 p-2 md:p-0">
      <DetailAnime anime={anime} image={anime.images?.webp?.image_url} />
    </div>
  );
};

export default page;
