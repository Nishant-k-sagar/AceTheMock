"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

const Header = ({ file }) => {
  const [isUserButtonLoaded, setIsUserButtonLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const SkeletonLoader = () => (
    <div className="w-8 h-8 bg-gray-400 rounded-full animate-pulse"></div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUserButtonLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const path = usePathname();

  return (
    <div className="bg-gradient-to-r from-teal-500 to-green-400 shadow-lg h-16 flex items-center w-full ">
      <div className="w-full max-w-[92%] mx-auto px-4 flex items-center justify-between">
        <Link className="hidden md:inline-block" href="/dashboard">
          <Image src={file} height={50} width={150} alt="logo" />
        </Link>

        <ul className="hidden md:flex gap-20">
          {[
            { href: "/dashboard", label: "Dashboard" },
            { href: "/dashboard/questions", label: "Questions" },
            { href: "/dashboard/upgrade", label: "Upgrade" },
            { href: "/dashboard/how", label: "How it works?" },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <li
                className={`hover:text-green-600 text-lg font-bold transition-all cursor-pointer ${
                  path === item.href ? "text-green-700 font-bold" : "text-white"
                }`}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button> 
        </div>

        <div className="flex gap-4 items-center">
          {/* <ModeToggle /> */}
          {isUserButtonLoaded ? <UserButton /> : <SkeletonLoader />}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex w-full absolute top-16 h-[] bg-gradient-to-r from-teal-500 to-green-400 items-center justify-center shadow-md drop-shadow-md font-semibold">
          <ul className="px-2 py-3 space-y-2">
            {[
              { href: "/dashboard", label: "Dashboard" },
              { href: "/dashboard/questions", label: "Questions" },
              { href: "/dashboard/upgrade", label: "Upgrade" },
              { href: "/dashboard/how", label: "How it works?" },
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <li
                  className={`hover:text-green-600 text-lg transition-all cursor-pointer ${
                    path === item.href ? "text-green-800 font-bold" : "text-white"
                  }`}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
