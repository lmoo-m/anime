import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const CardAnime = ({ title, image, i }) => {
    return (
        <motion.div
            initial={{ width: 0, height: "0%", opacity: 0 }}
            animate={{
                width: "100%",
                height: ["0%", "0%", "100%"],
                opacity: 1,
            }}
            transition={{
                delay: i / 7,
            }}
            exit={{ x: window.innerWidth }}
            className=" overflow-hidden shadow-md shadow-accent rounded-lg px-3 py-2 bg-primary"
        >
            <Image
                src={image}
                alt={title}
                width={350}
                height={350}
                className="object-cover max-h-80 w-full transition-all hover:scale-95"
            />
            <h1 className=" text-lg mt-3 text-white">{title}</h1>
        </motion.div>
    );
};

export default CardAnime;
