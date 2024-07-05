import AppLayout from "@/components/layouts/layout.main";
import { LinkPreview } from "@/components/layouts/link-preview";
import Link from "next/link";
import React from "react";

const page = () => {
  const work = [
    {
      name:"Dimba",url:"https://www.dimba.app/about",about:"Website for an event discovery and ticketing application."
    },
    {
      name:"Dimba Event Organizer App",url:"https://organizer.dimba.app/",about:"An application to enable event organizers to creat,control and manage events seamlessly through Dimba "
    },
    {
      name:"40GraphVille",url:"https://www.40graphville.com/",about:`A client website. Collaborated with `
    },
    {
      name:"Zomujo Foundation",url:"https://www.zomujofoundation.org/",about:"The officiak website of Zomujo org,a mental health organization "
    },
    {
      name:"Mascot Bites",url:"https://food-app-pyag1.vercel.app/",about:"A simple food application with cart functionality and viewing order history"
    },
    {
      name:"HR App",url:"https://hrxpert.vercel.app/",about:"An HR app which lets admins manage employees by onboarding and offboarding, viewing histories, editing information, approving or rejecting leave requests, and adding departments. Employees can access and edit their info, request leaves, and view leave history"
    }
    
    
  ]
  return (
    <AppLayout>
      <div className=" pt-10 flex flex-col gap-10" >
     {
      work.map((item,index)=>{
        return ( <div key={index} className="hover:border-l-4 border-l-primary2 hover:pl-2 duration-300 ">
      
        
          <LinkPreview
            url={item?.url}
            className=" text-[1.1rem]"
          >
       {item?.name}
          </LinkPreview>
      
            {
index === 2 ? (
  <p className="font-light text-[0.89rem]">
  {item.about} <Link className=" underline" href="https://www.nkasante.com/">Nana Kwesi Asante</Link>
  </p> 
):   <p className="font-light text-[0.89rem]">
{item.about} 
</p>
            }
              </div>)
      })
     }
      </div>
    </AppLayout>
  );
}

export default page;
