"use client";
import Link from "next/link";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { email, instagram, linkedin, twitter } from "@/source/__env";
import { FaDiscord, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { emptyLink, scrollHandler } from "../../controllers/helpers";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <nav
        id="home"
        className="flex w-full justify-between items-center px-8 sm:px-16 lg:px-28 py-10 bg-black md:gap-0 gap-2"
      >
        <div className="">
          <Link
            onClick={scrollHandler}
            href="/#home"
            className=" justify-center gap-3"
          >
            {/* <img
              src="/logo.png"
              alt="GRIME"
              title="GRIME COIN"
              className="h-20"
            /> */}
            <h1 className="italic text-3xl font-medium text-green-400">$GRIME</h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-12 items-center text-lg">
            <li>
            </li>
            <li>
              <Link
                className="hover:opacity-50"
                onClick={(e) => scrollHandler(e, () => setNavIsOpen(false))}
                href="/#features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="hover:opacity-50"
                onClick={(e) => scrollHandler(e, () => setNavIsOpen(false))}
                href="/#how"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                className="hover:opacity-50"
                onClick={(e) => scrollHandler(e, () => setNavIsOpen(false))}
                href="/#faq"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="hidden md:flex">
          <Link href="https://dashboard.queue-wise.com/" target="_blank">
            <button className="bg-transparent text-white font-semibold py-3 px-9 border border-[#007bff] rounded-full">
              Login
            </button>
          </Link>
        </div> */}
        <div className="flex md:hidden">
          <Hamburger
            toggled={navIsOpen}
            toggle={setNavIsOpen}
            distance="sm"
            rounded
          />
        </div>
      </nav>
      <div
        className={`fixed md:hidden block backdrop-blur-sm w-full h-full top-0 bottom-0 z-50 ${
          navIsOpen ? "left-0" : "left-[101vw]"
        } transition-all duration-500`}
      >
        <div className="el-sm-nav z-20 h-full w-[300px] relative mr-0 ml-auto p-[32px] overflow-auto flex flex-col gap-[60px] justify-between bg-[#151515]">
          <div className="flex flex-col gap-[50px]">
            <div className="left-[-11px]">
              <Hamburger
                toggled={navIsOpen}
                toggle={setNavIsOpen}
                distance="sm"
                rounded
              />
            </div>
            <ul className="flex gap-[32px] flex-col items-start text-sm">
              <li>
                <Link
                  className="hover:opacity-50"
                  onClick={(e) => scrollHandler(e, () => setNavIsOpen(false))}
                  href="/#features"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="hover:opacity-50"
                  onClick={(e) => scrollHandler(e, () => setNavIsOpen(false))}
                  href="/#how"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  className="hover:opacity-50"
                  onClick={(e) => scrollHandler(e, () => setNavIsOpen(false))}
                  href="/#faq"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[30px] text-center">
            <div className="flex gap-[16px] justify-center">
              <a
                href={email}
                onClick={emptyLink}
                target="_blank"
                className="h-[18px] duration-75 transition-all hover:scale-110 flex"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
              <a
                href={instagram}
                onClick={emptyLink}
                target="_blank"
                className="h-[18px] duration-75 transition-all hover:scale-110 flex"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href={linkedin}
                onClick={emptyLink}
                target="_blank"
                className="h-[18px] duration-75 transition-all hover:scale-110 flex"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
              <a
                href={twitter}
                onClick={emptyLink}
                target="_blank"
                className="h-[18px] duration-75 transition-all hover:scale-110 flex"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="flex flex-col gap-[8px] text-[10px]">
              <span>POWERED BY GRIME</span>
              <span className="text-[#848484] uppercase">
                © {new Date().getFullYear()} GRIME. All rights reserved.
              </span>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 z-10 h-full w-full"
          onClick={() => setNavIsOpen(false)}
        ></div>
      </div>
    </>
  );
};

export default Header;
