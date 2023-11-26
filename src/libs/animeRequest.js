export const getAnime = async (resource, params) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}${resource}?${params}`
    );
    const { data } = await res.json();

    return data;
};

export const getAnimeNested = async (resource, property) => {
    const anime = await getAnime(resource);
    const data = anime.flatmap((data) => data[property]);

    return data;
};

export const animeSpliceRandom = (data, entry) => {
    const limit = data.length - entry;
    const start = Math.floor(Math.random() * limit);

    const result = data.splice(start, entry);
    return result;
};
