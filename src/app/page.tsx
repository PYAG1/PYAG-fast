"use client"

import AppLayout from "@/components/layouts/layout.main";
import { LinkPreview } from "@/components/layouts/link-preview";
import Link from "next/link";
export default function Home() {
  const email = "gyekyeyaw3@gmail.com"
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <AppLayout>
      <div className="my-6 flex flex-col  lg:gap-10 lg:my-8">
<div className=" w-full flex flex-col gap-1">
<p className=" text-xl font-semibold">Papa Yaw</p>
        <p className=" text-gray-800 text-sm">
          Software Engineer &#8226; JavaScript &#8226; TypeScript{" "}
        </p>
        <p className=" text-gray-900 text-sm">Accra , Ghana</p>
</div>
        <div className="mt-4 font-light flex flex-col gap-2 text-[0.89rem]  lg:text-[1rem]">

          <p>
    I'm a passionate software engineer with experience in building user-friendly websites, web apps, and mobile applications using React, Next.js, and React Native, all powered by TypeScript.
  </p>
  <p>
    My interests include building scalable and maintainable software solutions, exploring the capabilities of Python, and enhancing user experience through innovative designs.
  </p>
  <p>
    Outside of coding, I enjoy playing video games, geeking out over computers, and relaxing with a good movie.
  </p>

  <p>I am currently working as an Associate Software Analyst at <Link className=" text-orange underline  font-semibold" href={"https://www.rancard.com/"}>Rancard Solutions</Link></p>
          <p>
            <a
              href="https://github.com/PYAG1"
             
              className="text-orange"
            >
        github
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/pyaggg0"
      
              className="text-orange"
            >
    twitter
            </a>      /{" "}
            <button
                onClick={handleEmailClick}
      
              className="text-orange underline"
            >
Email me
            </button>
          </p>
        </div>
      </div>

      <div>
        <h4 className=" text-[1.2rem] mb-2  cursor-pointer border-b-primary-100 border-b-[1px] pb-2">
          featured work
        </h4>
        <ul className="lg:list-disc lg:mt-4 mt:2 flex flex-col lg:gap-4 gap-2">
          <li>
            <div className="hover:border-l-4 border-l-primary2 hover:pl-2 duration-300 ">
              <LinkPreview
                url="https://organizer.dimba.app/"
                className=" text-[1.1rem]"
              >
                Dimba Events Organizer Dashboard
              </LinkPreview>{" "}
              <p className="font-light text-[0.89rem]">
                An event discovery and ticketing application.
              </p>
            </div>
          </li>
          <li>
            <div className="hover:border-l-4 border-l-primary2 hover:pl-2 duration-300 ">
              <LinkPreview
                url="https://zomujo.org/"
                className=" text-[1.1rem]"
              >
                Zomujo Foundation

              </LinkPreview>
              <p className="font-light text-[0.89rem]">
              The official website of Zomujo org,a mental health organization
              </p>
            </div>
          </li>
        </ul>
        <Link href={"/work"} className=" mt-6 underline text-sm">
          View More
        </Link>
      </div>
      
    </AppLayout>
  );
}
