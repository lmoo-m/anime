"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { BiSolidSearchAlt2 } from "react-icons/bi";

function SearchInput() {
  const input = useRef();
  const router = useRouter();

  const handleInput = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      if (input.current.value === "") {
        router.push("/");
        return;
      }
      router.push(`/search/${input.current.value}`);
    }
  };

  return (
    <div className="flex">
      <input
        ref={input}
        placeholder="cari anime..."
        onKeyDown={handleInput}
        className="rounded-l-md px-3 py-2 text-secondary outline-none"
      />
      <button
        onClick={handleInput}
        style={{ height: "2.5rem" }}
        className="text-secondary bg-white px-3 rounded-r-md hover:bg-accent hover:text-white"
      >
        <BiSolidSearchAlt2 size={"1.3rem"} />
      </button>
    </div>
  );
}

export default SearchInput;
