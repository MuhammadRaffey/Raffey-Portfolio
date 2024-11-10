import Link from "next/link";
import { inter } from "../fonts/inter";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords from "../animations/AnimatedWords";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden bg-black py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <ContactBackground />
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-center justify-center ${inter.className} relative w-full lg:max-w-[1440px]`}
        >
          <AnimatedWords
            title={"contact"}
            style={
              "text-center text-[70px] font-extrabold uppercase leading-[2em] text-[#ffffff] sm:text-[150px] md:text-[150px] lg:text-[120px] xl:text-[250px] my-10 shadow-xl "
            }
          />
        </div>

        <div className="mt-20 flex w-full flex-col items-center gap-8 sm:mt-32 md:mt-40 lg:max-w-[1440px]">
          <div className="text-[14px] font-semibold uppercase text-[#ffffff] sm:text-[14px] md:text-[16px] lg:text-[16px]">
            <AnimatedBody
              text="Got a question, proposal, project, or want to work together on something?"
              className="mb-3 inline-block overflow-hidden"
            />
            <Link
              href="mailto:muhammadraffey26@gmail.com"
              target="_blank"
              aria-label="Send me an email"
              className="underline transition duration-300 hover:text-[#ffffff]"
            >
              <AnimatedBody text="Send me an email" />
            </Link>
          </div>

          <div className="flex gap-10 text-[16px] font-bold text-[#ffffff] sm:gap-14 sm:text-[24px] md:gap-10 lg:gap-20 lg:text-[28px]">
            <Link
              href="https://github.com/MuhammadRaffey"
              target="_blank"
              aria-label="View GitHub Profile"
            >
              <AnimatedTitle
                text="GITHUB"
                className="transition duration-300 hover:text-[#ffffff]"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammadraffey/"
              target="_blank"
              aria-label="View LinkedIn Profile"
            >
              <AnimatedTitle
                text="LINKEDIN"
                className="transition duration-300 hover:text-[#ffffff]"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
