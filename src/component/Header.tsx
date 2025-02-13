"use client";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import icon from "@/app/favicon.ico";
import Image from "next/image";
import { Button } from "antd";
import { redirect } from "next/navigation";
import { Link } from "@/i18n/routing";

const Header = () => {
  return (
    <div className="bg-body-tertiary">
      <Navbar collapseOnSelect expand="lg" className=" w-[90%] mx-auto 3xl:w-[80%]">
        <Link href="/" className="navbar-brand font-bold flex gap-2">
          <Image src={icon} alt="" width={30} height={30}></Image>
          Call-Logs
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <div className="py-2">
              <Link href="/guide" className="nav-link focus:text-[#0866FF]">
                Guide how to find JSON file
              </Link>
            </div>

            <span className=" py-1 border px-4 rounded-xl bg-[#0866FF] w-fit 992:hidden mt-2">
              <Link href="/calllog" className="nav-link text-white  ">
                GET STARTED
              </Link>
            </span>
          </Nav>
        </Navbar.Collapse>
        <div className=" hidden 992:block">
          <Button
            type="primary"
            size="large"
            onClick={() => {
              redirect("/calllog");
            }}
          >
            GET STARTED
          </Button>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
