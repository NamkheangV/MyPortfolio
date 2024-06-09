import Form from "@/components/Contact/Form";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        {/* Text and Illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">

          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 🥰
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Know Eatch Other.</h1>
            <p className="subtitle max-w-[480px]">
              I'm always open to discussing product design work or partnership
              opportunities.
            </p>
          </div>

          {/* Illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light
          dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        {/* Info and Form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* Info */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base
          xl:text-lg ">

            {/* Email */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>youremail@gmail.com</div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Muang, Pathum Tani</div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+66 94 398 6347</div>
            </div>
          </div>
          
          {/* Form */}
          <Form />
        </div>
      </div>
    </section>
  );
}
