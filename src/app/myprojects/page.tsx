'use client'
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const projectData = [
  {
    image: "/images/work/01.png",
    category: "Next JS",
    name: "Pets Hotel",
    description: "Website for pet care hotels. That help customers find services for their pets.",
    link: "/myprojects",
    github: "https://github.com/NamkheangV/PetsHotel-FN",
    all_img: ["/images/work/01-1.png", "/images/work/01-2.png", "/images/work/01-3.png", "/images/work/01-4.png", "/images/work/01-5.png"]
  },
  {
    image: "/images/work/02.png",
    category: "Flutter",
    name: "Stray Pets",
    description: "App designed for mobile application class that help stray animals find homes.",
    link: "/myprojects",
    github: "https://github.com/NamkheangV/Stray-Pets",
    all_img: ["/images/work/02-1.png", "/images/work/02-3.png", "/images/work/02-4.png",]
  },
  {
    image: "/images/work/04.png",
    category: "Next JS",
    name: "My Portfolio",
    description: "Used to introduce all my abilities and past work experiences.",
    link: "/",
    github: "https://github.com/NamkheangV/MyPortfolio",
    all_img: ["/images/work/04-1.png", "/images/work/04-2.png", "/images/work/04-3.png", "/images/work/04-4.png"]
  },
];

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category))
];

export default function MyProject() {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter(project => {
    return category === 'all projects' ? project : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] 
          mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={index}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            })}
          </TabsList>

          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return <TabsContent value={category} key={index}>
                <Dialog>
                  <DialogTrigger>
                    <ProjectCard project={project} />
                  </DialogTrigger>
                  <DialogContent className="w-5/6">
                    <DialogHeader>
                      <DialogTitle>{project.name}</DialogTitle>
                    </DialogHeader>
                    {/* <DialogDescription>{project.description}</DialogDescription> */}
                    <Carousel className="">
                      <CarouselContent className="content-center">
                        {project.all_img.map((img, index) => {
                          return <CarouselItem key={index}>
                            <img src={img} alt="" className="max-h-[500px]"/>
                          </CarouselItem>
                        })}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </DialogContent>
                </Dialog>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
