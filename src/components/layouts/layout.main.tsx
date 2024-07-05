"use client"
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

const AppLayout = ({ children }: { children: ReactNode }) => {

  return (
    <main className="px-4 py-8 lg:max-w-[600px] mx-auto">
      <div className="flex flex-col divide-y-[1px] divide-primary-100 ">
        <a
          href="/"
          className="text-[1.2rem] font-semibold mb-2 text-orange cursor-pointer"
        >
          PYAG
        </a>
        <nav className="flex pt-2 gap-4 text-[1rem] lg:justify-end">
          <Link href={"/"}>
            <p className="hover:text-orange duration-500  cursor-pointer ">
              / me
            </p>
          </Link>
          <Link href={"/work"}>
            <p className="hover:text-orange duration-500  cursor-pointer ">
              / work
            </p>
          </Link>
          <Link
              href="https://docs.google.com/document/d/1gnMKZv-y7Fu24OAmQWDptXjJLzkXG4cGdp2nqfFkCD0/edit?usp=sharing"
              className="hover:text-orange duration-500  cursor-pointer"
            >
          / Resume
            </Link>

     
        </nav>
      </div>

      {children}
    </main>
  );
};

export default AppLayout;
