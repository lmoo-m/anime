"use client";

import HeaderPage from "@/components/HeaderPage";
import AnimeList from "@/components/AnimeList";

import React, { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";

export default function page() {
  const [anime, setAnime] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getAnime = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}top/anime?page=${
        page > 0 ? page : 1
      }&limit=24`
    );

    const data = await res.json();
    setTotalPage(data.pagination.last_visible_page);
    setAnime(data.data);
  };

  useEffect(() => {
    getAnime();
  }, [page]);

  return (
    <div>
      <HeaderPage title={`Top Anime`} linkFalse={true} />
      <AnimeList anime={anime} />
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </div>
  );
}
