"use client";
import Link from "next/link";
import MyImage from "../MyImage";
import Socials from "@/components/Socials";
import { Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RiArrowDownSLine } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:p-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[600px] flex-col jutify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font semibold mb-4 text-primary tracking-[4px]">
              Junior Frontend Developer
            </div>
            <h1 className="h1 mb-1">Hello, My name is Suchanart</h1>

            <TypeAnimation
              className="subtitle max-w-[480px] mx-auto xl:mx-0"
              sequence={[
                "I'm undergraduate computer science student.",
                1000,
                "Interested in Front-End development.",
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />

            {/* Button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Link href="https://www.canva.com/design/DAF7cR3zUoc/Iku-OZ_BRtSmZ4THeSYArA/view?utm_content=DAF7cR3zUoc&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                <Button variant="outline" className="gap-x-2">
                  {/* <a 
                href="./file/resume.pdf"
                download={true}
                >Resume</a> */}Resume
                  <Download size={18} />
                </Button>
              </Link>

            </div>

            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[24px] hover:text-primary transition-all"
            />
          </div>

          {/* Image */}
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-12 -right-2">
              <MyImage
                containerStyles="bg-hero_shape w-[480px] h-[500px] bg-no-repeat relative bg-bottom"
                imgSrc="/images/me.png"
              />
            </div>
            {/* <img src="/images/me.png" alt="" className="max-h-[480px]" /> */}
          </div>
        </div>

        {/* Icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-4xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
