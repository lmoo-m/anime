"use client";

import React from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

const Pagination = ({ page, setPage, totalPage }) => {
  const scrollToTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const next = () => {
    setPage((prev) => prev + 1);
    scrollToTop();
  };

  const prev = () => {
    setPage((prev) => {
      return prev === 1 ? 1 : prev - 1;
    });
    scrollToTop();
  };

  return (
    <>
      {totalPage !== 0 ? (
        <div className="flex py-5 justify-center gap-5">
          <button
            onClick={() => prev()}
            className=" bg-secondary p-2 rounded-lg text-white font-bold text-2xl hover:bg-accent"
          >
            <BiArrowFromRight />
          </button>
          <h1 className="py-2 text-secondary text-xl">
            {page} of {totalPage}
          </h1>
          <button
            onClick={() => next()}
            className=" bg-secondary p-2 rounded-lg text-white font-bold text-2xl hover:bg-accent"
          >
            <BiArrowFromLeft />
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Pagination;
