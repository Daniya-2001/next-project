"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
// import { title } from "process";
// import { Content } from "next/font/google";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Node.Js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>React</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Fullstack Academy of Code </li>
        <li>University of california,Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul>
        <li>Fullstack Academy of Code </li>
        <li>University of california,Santa Cruz</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ispending, startTranisition] = useTransition();

  const handleTabChange = (id) => {
    startTranisition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2  gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/aboutme.jpg" width={500} height={500} />
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>

          <p className="text-base md:text-lg">
            I am a software developer, specialising in the app development
            arena. For the last 3 years, I have been developing games using C++,
            C# and Java programming languages. I’m currently employed as senior
            software developer at App Dev One Two Developers. I’m hands on in
            all stages of the software development cycle, from planning and
            design to testing and deployment. lifecycle involves working with so
            many different people and departments and, as a people person and
            someone who loves to build new relationships, it’s great to be able
            to come together with other professionals who are striving towards
            the same goal.
          </p>
          <div className="flex flex-row mt-8 justify-start ">
            <TabButton
              selecTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              Skills{""}
            </TabButton>
            <TabButton
              selecTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}
              Education{""}
            </TabButton>
            <TabButton
              selecTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {""}
              Certification{""}
            </TabButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
