import AppLayout from "@/components/layouts/layout.main";
import { LinkPreview } from "@/components/layouts/link-preview";
import Link from "next/link";
import React from "react";

const page = () => {
  const work = [

    {
      name: "Dimba Event Organizer App",
      url: "https://organizer.dimba.app/",
      about: "An application to enable event organizers to create, control and manage events seamlessly through Dimba",
      collaborators: []
    },
    {
      name: "JNA Foundation",
      url: "https://www.jnafoundation.org/",
      about: "A website for the Josephine Nana Asmah foundation, established in memory of a dear friend. Collaborated with",
      collaborators: [
        { name: "Prince", url: "https://github.com/blackprince001" },
        { name: "Amartey Ezekiel Elvis Junior", url: "https://github.com/ezekielelvis" }
      ]
    },
    {
      name: "Dimba",
      url: "https://www.dimba.app/about",
      about: "Website for an event discovery and ticketing application.",
      collaborators: []
    },
    {
      name: "40GraphVille",
      url: "https://404graphville.vercel.app/",
      about: "A client website. Collaborated with",
      collaborators: [
        { name: "Nana Kwesi Asante", url: "https://www.nkasante.com/" }
      ]
    },
    {
      name: "Zomujo Foundation",
      url: "https://zomujo.org/",
      about: "The official website of Zomujo org, a mental health organization. Collaborated with",
      collaborators: [  { name: "Nana Kwesi Asante", url: "https://www.nkasante.com/" }]
    },
    {
      name: "Mascot Bites",
      url: "https://food-app-pyag1.vercel.app/",
      about: "A simple food application with cart functionality and viewing order history",
      collaborators: []
    },
    {
      name: "HR App",
      url: "https://hrxpert.vercel.app/",
      about: "An HR app which lets admins manage employees by onboarding and offboarding, viewing histories, editing information, approving or rejecting leave requests, and adding departments. Employees can access and edit their info, request leaves, and view leave history with",
      collaborators: [{name:"Akwasi Frimpong",url:"https://github.com/frimpsss"}]
    }
  ];

  const renderCollaborators = (collaborators) => {
    if (collaborators.length === 0) return null;
    
    return collaborators.map((collaborator, index) => (
      <React.Fragment key={index}>
        {index > 0 && index === collaborators.length - 1 ? " and " : index > 0 ? ", " : " "}
        <Link className="underline" href={collaborator.url}>
          {collaborator.name}
        </Link>
      </React.Fragment>
    ));
  };

  return (
    <AppLayout>
      <div className="pt-10 flex flex-col gap-10">
        {work.map((item, index) => (
          <div
            key={index}
            className="hover:border-l-4 border-l-primary2 hover:pl-2 duration-300"
          >
            <LinkPreview url={item?.url} className="text-[1.1rem]">
              {item?.name}
            </LinkPreview>
            <p className="font-light text-[0.89rem]">
              {item.about}
              {renderCollaborators(item.collaborators)}
            </p>
          </div>
        ))}
      </div>
    </AppLayout>
  );
};

export default page;