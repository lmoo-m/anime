"use client";

import React, { useEffect, useState } from "react";
import AnimeList from "../AnimeList";
import HeaderPage from "../HeaderPage";

function RecomendedAnime() {
    const [anime, setAnime] = useState([]);

    const getAnimeRecomended = async () => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASEURL}top/anime?limit=4`
        );
        const { data } = await res.json();
        setAnime(data);
    };

    useEffect(() => {
        getAnimeRecomended();
    }, []);

    return (
        <>
            <HeaderPage
                title={"Rekomendasi Untuk Mu"}
                linkHref={"/top"}
                linkTitle={"Lihat Selengkapnya"}
            />
            <AnimeList anime={anime} />
        </>
    );
}

export default RecomendedAnime;
