"use client";

import HeaderPage from "@/components/HeaderPage";
import AnimeList from "@/components/AnimeList";

import React, { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import { motion } from "framer-motion";

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
        <motion.div
            className="overflow-hidden bg-accent block absolute min-h-screen"
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
                duration: 0.75,
            }}
            variants={{
                initialState: {
                    clipPath: "polygon(55% 0, 55% 0, 55% 100%, 55% 100%)",
                },
                animateState: {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                },
                exitState: {
                    x: "100vw",
                    transition: {
                        duration: 0.1,
                    },
                },
            }}
        >
            <div>
                <HeaderPage
                    title={`Top Anime`}
                    linkFalse={true}
                    color={"text-white"}
                />
                <AnimeList anime={anime} />
                <Pagination
                    page={page}
                    setPage={setPage}
                    totalPage={totalPage}
                />
            </div>
        </motion.div>
    );
}
