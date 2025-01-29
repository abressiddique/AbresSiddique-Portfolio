"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-6">
  <p className="mb-3">
    I’m <span className="font-bold">Abres Siddique</span>, a passionate <span className="font-bold">full-stack developer</span> with a deep love for technology that started in <span className="font-bold">10th grade</span>. I pursued a <span className="font-bold">BSc in IT</span> at Mahendra Pratap Sharada Prasad Singh College, where I specialized in <span className="font-bold">MERN stack development</span>. To further enhance my expertise, I completed my <span className="font-bold">MCA</span> at LATE BHAUSAHEB HIRAY S.S. Trust’s Institute of Computer Application, one of Maharashtra’s top-tier institutions. Currently, I am <span className="font-bold">preparing for a PhD in Artificial Intelligence</span> to expand my knowledge in cutting-edge technology.
  </p>

  <p className="mb-3">
    Beyond software development, I am the <span className="font-bold">co-founder of </span> 
    <a href="https://www.instagram.com/abresstore" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-500 hover:underline">
      @AbresStore
    </a>, a brand that <span className="font-bold">manufactures and distributes products across India</span> and exports Abayas to the Middle East. We sell through 
    <span className="font-bold"> our own e-commerce platform</span>, third-party marketplaces, and retail networks, while also maintaining a 
    <span className="font-bold"> strong Instagram presence</span>.
  </p>

  <p className="mb-3">
    My <span className="font-bold">core tech stack</span> includes <span className="font-bold">MERN stack, Next.js, and Python</span>, with strong proficiency in 
    <span className="font-bold">Data Structures and Algorithms (DSA)</span>. I am also expanding my skills in <span className="font-bold">DevOps and AI</span>. 
    Additionally, I have <span className="font-bold">published multiple research papers</span> on <span className="font-bold">Quantum Computing and AI</span> and rank in the <span className="font-bold">top 10K on LeetCode</span>.
  </p>

  <p>
    <span className="italic">Beyond coding</span>, I believe in <span className="font-bold">pushing boundaries, solving problems, and constantly evolving</span>. 
    Whether it’s coding, business, or personal growth, I strive to <span className="font-bold">be 1% better every day</span>—because small improvements lead to extraordinary results.  
    My motto is simple—<span className="font-bold">Build. Solve. Evolve.</span>
  </p>
</div>









    </motion.section>
  );
}
