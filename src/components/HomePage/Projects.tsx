import Link from "next/link";
import { Button } from "../ui/button";

import ProjectCard from "../ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const ProjectData = [
  {
    image: "/images/work/1.png",
    category: "React",
    name: "Project 1",
    description: "This is a project description",
    link: "/myprojects",
    github: "/"
  },
  {
    image: "/images/work/2.png",
    category: "React",
    name: "Project 1",
    description: "This is a project description",
    link: "/myprojects",
    github: "/"
  },
  {
    image: "/images/work/3.png",
    category: "React",
    name: "Project 1",
    description: "This is a project description",
    link: "/myprojects",
    github: "/"
  },
  {
    image: "/images/work/4.png",
    category: "React",
    name: "Project 1",
    description: "This is a project description",
    link: "/myprojects",
    github: "/"
  },
  {
    image: "/images/work/2.png",
    category: "React",
    name: "Project 1",
    description: "This is a project description",
    link: "/myprojects",
    github: "/"
  },
  {
    image: "/images/work/4.png",
    category: "React",
    name: "Project 1",
    description: "This is a project description",
    link: "/myprojects",
    github: "/"
  },
  
];

const MyProjects = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left 
          mb-12 xl:h-[400px] flex flex-col justify-center items-center 
          xl:items-start"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <Link href="/myprojects">
            <Button>All Projects</Button>
          </Link>
        </div>

        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Carousel className="">
            <CarouselContent>
              {ProjectData.slice(0, 6).map((project, index) => {
                return (
                  <CarouselItem key={index} className="lg:basis-1/2">
                    <ProjectCard project={project} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* {ProjectData.slice(0, 4).map((project, index) => {
            return <ProjectCard project={project} />;
          })} */}
        </div>
      </div>
    </section>
  );
};
export default MyProjects;
