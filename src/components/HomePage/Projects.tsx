import Link from "next/link";
import { Button } from "../ui/button";

import ProjectCard from "../ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

const projectData = [
  {
    image: "/images/work/project01.png",
    category: "Next JS",
    name: "Pets Hotel",
    description: "Website for pet care hotels. That help customers find services for their pets.",
    link: "/myprojects",
    github: "https://github.com/NamkheangV/PetsHotel-FN",
  },
  {
    image: "/images/work/project04.png",
    category: "Flutter",
    name: "Stray Pets",
    description: "App designed for mobile application class that help stray animals find homes.",
    link: "/myprojects",
    github: "https://github.com/NamkheangV/Stray-Pets",
  },
  {
    image: "/images/work/project03.png",
    category: "Next JS",
    name: "My Portfolio",
    description: "Used to introduce all my abilities and past work experiences.",
    link: "/",
    github: "https://github.com/NamkheangV/MyPortfolio",
  },
];

const MyProjects = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left 
          mb-12 xl:h-[400px] flex flex-col justify-center"
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
          <Carousel>
            <CarouselContent>
              {projectData.slice(0, 4).map((project, index) => {
                return (
                  <CarouselItem key={index} className="lg:basis-1/2">
                    <ProjectCard project={project} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default MyProjects;
