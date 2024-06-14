'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  Calendar,
  HomeIcon,
  MailIcon,
  PhoneCall,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import TextSpin from "./TextSpin";
import Image from "next/image";

const infoData = [
  { icon: <User2 size={20} />, text: "Suchanart Khumbungkhla" },
  { icon: <PhoneCall size={20} />, text: "+66 94 398 6347" },
  { icon: <MailIcon size={20} />, text: "suchanartskn@gmail.com" },
  { icon: <HomeIcon size={20} />, text: "Pathumtani, Thailand" },
  { icon: <Calendar size={20} />, text: "Born on 5 April, 2003" },
];

const qualificationsData = [
  {
    title: "educations",
    data: [
      {
        place: "Suankularb Wittayalai Nonthaburi School",
        qualitification: "Science - Mathematics Program",
        years: "2016 - 2021",
      },
      {
        place: "Rangsit University",
        qualitification: "Bachelor of Computer Science",
        years: "2021 - Present",
      },
    ],
  },
  {
    title: "experience",
    data: [],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "HTML / CSS" },
      { name: "JavaScript / TypeScript" },
      { name: "React /  Vue" },
      { name: "Dart" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/images/tailwind.svg" },
      { imgPath: "/images/nextjs.svg" },
      { imgPath: "/images/nuxtjs.svg" },
      { imgPath: "/images/flutter.svg" },
      { imgPath: "/images/vscode-logo.svg" },
      { imgPath: "/images/figma.svg" },
    ],
  },
];

const About = () => {
  const getData = (arr: any, title: any) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            {/* <img src="/images/cat.png" alt="" className="max-h-[480px]" /> */}
            <TextSpin />
          </div>

          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="educations">
                  Educations
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              {/* Tabs Contents */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Nice to meet you, I'm Suchanart
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:max-0">
                      you can get to know me better by reading the information
                    </p>

                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Language */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Thai - English</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualitifications */}
                <TabsContent value="educations">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">My Growth Path</h3>
                    {/* Experience & Educations */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-8">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "experience").title}
                          </h4>
                        </div>

                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "experience").data.map(
                            (item: any, index: any) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                    group-hover:translate-y-[84px] transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* Education */}
                      <div className="flex flex-col gap-y-8">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "educations").title}
                          </h4>
                        </div>

                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "educations").data.map(
                            (item: any, index: any) => {
                              const { place, qualitification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                    group-hover:translate-y-[84px] transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {place}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualitification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">My Skills for Development</h3>
                    {/* Languages & Tools */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">
                        Languages
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* List */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item: any, index: any) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    {/* Libraries & Frameworks */}
                    <div className="">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Frameworks and Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* List */}
                      <div className="flex gap-x-4 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map(
                          (item: any, index: any) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={40}
                                  height={40}
                                  alt=" priority"
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
