import Guide from "@/component/Guide";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "JSON Guide",
  description: "This is a page to show how to find the JSON file",
};

const guide = () => {
  return (
    <div className="w-[90%] lg:w-[70%] 2xl:w-[60%] 3xl:w-[40%] m-auto  py-5">
      <Guide />
    </div>
  );
};

export default guide;
