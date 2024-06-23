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
    name: "Note Book Website",
    description:
      "A dynamic and responsive website built with React JS for the National Youth Service Corps, featuring an intuitive user interface and seamless navigation.",
    link: "https://notebook-bcjv.onrender.com",
    github: "https://github.com/Mr-Rovilay/notebook",
  },
  {
    image: "/work/4.png",
    category: "React JS",
    name: "Todo Website",
    description:
      "A comprehensive NYSC portal created using React JS, offering a user-friendly experience with real-time data updates and modern design principles.",
    link: "https://notebook-bcjv.onrender.com",
    github: "https://github.com/Mr-Rovilay/todo-app",
  },

  {
    image: "/work/1.png",
    category: "React JS",
    name: "NYSC kit Website",
    description:
      "NYSC kits online store or an NYSC kits e-commerce website This type of website specializes in selling NYSC uniforms, accessories, and other related",
    link: "https://nysckit-ng-1.onrender.com",
    github: "https://github.com/Mr-Rovilay/nysckit.ng",
  },
  {
    image: "/work/2.png",
    category: "React JS",
    name: "Shopping todo app",
    description:
      "This NYSC website showcases a sleek design and interactive elements powered by React JS, ensuring smooth performance across all devices.",
    link: "https://shopping-app-gkez.onrender.com",
    github: "https://github.com/Mr-Rovilay/shopping-app",
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
