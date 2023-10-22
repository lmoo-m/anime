"use client";

import AnimeList from "@/components/AnimeList";
import HeaderPage from "@/components/HeaderPage";
import React, { useEffect, useState } from "react";

export default function page() {
  const [anime, setAnime] = useState([]);
  const getAnime = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}top/anime?limit=8`
    );
    const { data } = await res.json();
    setAnime(data);
  };

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div>
      <HeaderPage
        title={"Paling Populer"}
        linkHref={"/top"}
        linkTitle={"Lihat Selengkapnya"}
      />
      <AnimeList anime={anime} />
    </div>
  );
}
