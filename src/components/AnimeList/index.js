import React from "react";
import CardAnime from "../CardAnime";
import Loading from "../Loading";
import Link from "next/link";

function AnimeList({ anime }) {
    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 px-3 md:px-14 py-5">
            {anime?.length === 0 ? (
                <Loading />
            ) : (
                anime?.map((data, i) => {
                    return (
                        <Link href={`/anime/${data.mal_id}`} key={i}>
                            <CardAnime
                                title={data.title}
                                i={i}
                                image={data.images.webp.image_url}
                                key={data.mal_id}
                            />
                        </Link>
                    );
                })
            )}
        </div>
    );
}

export default AnimeList;
