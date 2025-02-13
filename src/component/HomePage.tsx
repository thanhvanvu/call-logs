"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import picture from "../../public/combined_stylized.jpg";
import { Button } from "antd";
import Link from "next/link";
import MobileModal from "./mobile.modal";
import { useCurrentApp } from "@/context/app.context";
function Homepage() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  // Check screen size
  useEffect(() => {
    const handleSetMobileModal = () => {
      // Get saved data from sessionStorage
      const data = sessionStorage.getItem("mobileModal");

      if (!data) {
        if (window.innerWidth < 1280) {
          setIsOpenModal(true);
          // Save data to sessionStorage
          sessionStorage.setItem("mobileModal", "true");
        } else {
          setIsOpenModal(false);
          // Save data to sessionStorage
          sessionStorage.setItem("mobileModal", "false");
        }
      } else {
        setIsOpenModal(data === "true" ? true : false);
      }
    };

    // Initial check
    handleSetMobileModal();

    // Listen to resize events
    window.addEventListener("resize", handleSetMobileModal);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleSetMobileModal);
  }, []);

  return (
    <div className="w-[90%] mx-auto h-screen mt-4 bg-gray 3xl:w-[70%] 3xl:flex gap-20">
      {/* Render the MobileModal only on screens smaller than 3xl */}
      <MobileModal open={isOpenModal} setOpen={setIsOpenModal} />

      <div className="3xl:mt-[150px] 3xl:w-[60%]">
        <p className="text-4xl font-bold 3xl:text-6xl">
          Can not find <span className="text-[#0866FF]">Call Logs</span> ? View Them Here
        </p>
        <p className="mt-4">
          Gain comprehensive insights into your communication patterns with detailed call logs and
          statistics. Effortlessly monitor call durations, track missed calls, and analyze overall
          communication activity to optimize efficiency and stay connected.
        </p>
        <div className="mt-4 gap-4 flex flex-col sm:flex-row sm:gap-5">
          <Link href={"/calllog"}>
            <Button className="shadow-sm" type="primary" size="large">
              GET STARTED
            </Button>
          </Link>

          <Link href={"/guide"}>
            <Button className="shadow-sm" type="dashed" size="large">
              Guide how to find JSON file
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-5">
        <Image src={picture} alt="" className="shadow-lg" />
      </div>
    </div>
  );
}

export default Homepage;
