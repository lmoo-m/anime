"use client";

import AnimeList from "@/components/AnimeList";
import HeaderPage from "@/components/HeaderPage";
import { animeSpliceRandom, getAnime } from "@/libs/animeRequest";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Page() {
    const [anime, setAnime] = useState([]);
    const [animeRecomend, setAnimeRecomend] = useState([]);

    const get = async () => {
        let response = await getAnime("top/anime");
        setAnime(response.splice(0, 4));
        setAnimeRecomend(animeSpliceRandom(response, 4));
    };

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: false,
        });
        return () => get();
    }, []);

    return (
        <div>
            <HeaderPage
                title={"Recomendasi Untuk Mu..."}
                linkHref={"/top"}
                linkTitle={"Lihat Selengkapnya"}
            />
            <AnimeList anime={animeRecomend} />

            <HeaderPage
                title={"Paling Populer"}
                linkHref={"/top"}
                linkTitle={"Lihat Selengkapnya"}
            />
            <AnimeList anime={anime} />
        </div>
    );
}
