import React from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

function HeaderPage({ title, linkHref, linkTitle, linkFalse }) {
  return (
    <div className="p-4 flex justify-between items-center ">
      <TypeAnimation
        sequence={[title, 1000]}
        wrapper="span"
        speed={10}
        className=" font-bold text-xl"
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
      {linkFalse ? (
        ""
      ) : (
        <Link
          href={linkHref}
          className=" text-secondary text-xs hover:text-accent group-hover:text-lg"
        >
          {linkTitle}
        </Link>
      )}
    </div>
  );
}

export default HeaderPage;
