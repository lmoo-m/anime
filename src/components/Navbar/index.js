import Link from "next/link";
import React from "react";
import SearchInput from "../searchInput";

function Navbar() {
  return (
    <div className=" bg-primary text-white">
      <div className="flex flex-col md:flex-row justify-between p-4 items-center gap-2">
        <Link className=" font-bold text-lg" href={"/"}>
          MoAnime
        </Link>
        <SearchInput />
      </div>
    </div>
  );
}

export default Navbar;
