"use client";

import AnimeList from "@/components/AnimeList";
import HeaderPage from "@/components/HeaderPage";
import Pagination from "@/components/Pagination";
import React, { useEffect, useState } from "react";

function page({ params }) {
  const keyword = params.keyword;

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [anime, setAnime] = useState([]);
  const title = decodeURI(keyword);

  const getSearch = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}anime?q=${params.keyword}&page=${page}&limit=20`
    );
    const data = await response.json();
    setTotalPage(data.pagination.last_visible_page);
    setAnime(data.data);
  };

  useEffect(() => {
    getSearch();
  }, [page]);

  return (
    <div>
      <HeaderPage title={`Pencarian Untuk ${title}...`} linkFalse={true} />
      <AnimeList anime={anime} />
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </div>
  );
}

export default page;
