"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "React JS",
    name: "Notebook Website",
    description:
      "A dynamic and responsive website built with React JS for efficient note-taking and organization. Features include an intuitive UI, smooth navigation, and real-time updates.",
    link: "https://notebook-bcjv.onrender.com",
    github: "https://github.com/Mr-Rovilay/notebook",
  },
  {
    image: "/work/4.png",
    category: "React JS",
    name: "Todo Website",
    description:
      "A feature-rich Todo application developed with React JS, offering a seamless user experience, real-time task management, and a modern, clean interface.",
    link: "https://todo-website.onrender.com",
    github: "https://github.com/Mr-Rovilay/todo-app",
  },
  {
    image: "/work/1.png",
    category: "React JS",
    name: "NYSC Kit Store",
    description:
      "An e-commerce platform for purchasing NYSC kits and accessories. Built with React JS, the website provides a streamlined shopping experience with secure payment integration.",
    link: "https://nysckit-ng-1.onrender.com",
    github: "https://github.com/Mr-Rovilay/nysckit.ng",
  },
  {
    image: "/work/2.png",
    category: "React JS",
    name: "Shopping Todo App",
    description:
      "A shopping and task management hybrid app powered by React JS. Combines sleek design with interactive features to ensure a smooth user experience across devices.",
    link: "https://shopping-app-gkez.onrender.com",
    github: "https://github.com/Mr-Rovilay/shopping-app",
  },
  {
    image: "/work/4.png",
    category: "Fullstack",
    name: "Osan Nig Ent",
    description:
      "A full-stack application developed for Osan Nig Ent, showcasing the integration of modern technologies to deliver a robust, scalable platform tailored to business needs.",
    link: "https://osan-nig.onrender.com",
    github: "https://github.com/Mr-Rovilay/osan-nig.git",
  },
];

const Work = () => {
  return (
    <section className="container relative mb-12 xl:mb-48">
      <div className="mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="mb-4 section-title">Latest Projects</h2>
          <p className="mb-8 text-lg text-muted-foreground subtitle">
            Discover my recent work showcasing innovative solutions and creative designs. These projects highlight my expertise in delivering high-quality results tailored to meet unique client needs.
          </p>
        </div>
        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
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
            {projectData.map((project, i) => (
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
