'use client'
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/images/work/1.png",
    category: "React JS",
    name: "Project 01",
    description: "This is a project description",
    link: "/myprojects",
    github: "/",
  },
  {
    image: "/images/work/2.png",
    category: "Vue JS",
    name: "Project 02",
    description: "This is a project description",
    link: "/myprojects",
    github: "/",
  },
  {
    image: "/images/work/3.png",
    category: "React JS",
    name: "Project 03",
    description: "This is a project description",
    link: "/myprojects",
    github: "/",
  },
  {
    image: "/images/work/4.png",
    category: "Next JS",
    name: "Project 04",
    description: "This is a project description",
    link: "/myprojects",
    github: "/",
  },
  {
    image: "/images/work/2.png",
    category: "React JS",
    name: "Project 05",
    description: "This is a project description",
    link: "/myprojects",
    github: "/",
  },
  {
    image: "/images/work/4.png",
    category: "React JS",
    name: "Project 06",
    description: "This is a project description",
    link: "/myprojects",
    github: "/",
  },
];

// remove category duplicates
// console.log(projectData.map((item) => item.category))
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
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] 
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
                <ProjectCard project={project} />
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
