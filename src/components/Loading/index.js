"use client";

import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="w-full flex justify-center" style={{ width: "90vw" }}>
      <ReactLoading
        type={"bars"}
        color={"#363062"}
        height={"20%"}
        width={"25%"}
      />
    </div>
  );
};

export default Loading;
