"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "React JS",
    name: "NYSC Website",
    description:
      "A dynamic and responsive website built with React JS for the National Youth Service Corps, featuring an intuitive user interface and seamless navigation.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "React JS",
    name: "NYSC Website",
    description:
      "A comprehensive NYSC portal created using React JS, offering a user-friendly experience with real-time data updates and modern design principles.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "React JS",
    name: "NYSC Website",
    description:
      "This NYSC website showcases a sleek design and interactive elements powered by React JS, ensuring smooth performance across all devices.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "React JS",
    name: "NYSC Website",
    description:
      "An innovative NYSC website developed with React JS, providing users with a streamlined interface and efficient access to essential services.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Fullstack",
    name: "NYSC Website",
    description:
      "A fullstack NYSC website leveraging the power of modern technologies to deliver a robust and scalable platform for users.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Front End Development",
    name: "NYSC Website",
    description:
      "A front-end focused NYSC website built with cutting-edge development practices to offer a visually appealing and responsive user experience.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Fullstack",
    name: "NYSC Website",
    description:
      "An end-to-end NYSC website solution utilizing fullstack development techniques to ensure a seamless and efficient user journey.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="text-lg text-muted-foreground subtitle mb-8">
            Discover my recent work showcasing innovative solutions and creative
            designs. Our projects demonstrate our expertise in delivering
            high-quality results that meet our clients' unique needs and goals.
          </p>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px] mt-10"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, i) => (
              <SwiperSlide key={i}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
