import {
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
  Briefcase,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ayodeji",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "08140570029",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ayodejiakinola007@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 3rd of March 1990",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Your Achievement",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "15 Atokun street, Igando Egan Lagos",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        University: "University of lagos",
        qualification: "B.Sc",
        year: "2008 - 2015",
      },
      {
        University: "Federal government college, ijanikin",
        qualification: "SSCE",
        year: "2008 - 2015",
      },
      {
        University: "Lydia primary school",
        qualification: "Primary Crt",
        year: "2008 - 2015",
      },
    ],
  },
  {
    title: "experience",
    data: [
      { company: "Osan Water", role: "Developer", years: "2008 - 2015" },
      {
        company: "Osan Water",
        role: "Marketing manager",
        years: "2008 - 2015",
      },
      { company: "Uniag", role: "Developer", years: "2008 - 2015" },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "HTML, CSS, React, Next.js" },
      { name: "Front-end Development" },
      { name: "JavaScript, PHP" },
      { name: "Back-end Development" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/figma.svg" },
      { imgPath: "/about/notion.svg" },
      { imgPath: "/about/wordpress.svg" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 mt-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <Image
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              width={500}
              height={500}
              src="/hero/pcboi2.webp"
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Over 3 Years of Specialized Service
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      With a dedicated focus spanning more than three years, I
                      bring expertise in crafting tailored solutions that exceed
                      expectations. I deliver exceptional service that merges
                      creativity with technical prowess. My commitment is to
                      provide innovative solutions that propel your goals
                      forward. Let's collaborate to transform ideas into
                      impactful realities.
                    </p>

                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Yoruba, Spanish</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {["experience", "education"].map((title, idx) => (
                        <div key={idx} className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            {title === "experience" ? (
                              <Briefcase size={28} />
                            ) : (
                              <GraduationCap size={28} />
                            )}
                            <h4 className="capitalize font-medium">
                              {getData(qualificationData, title).title}
                            </h4>
                          </div>
                          <div className="flex flex-col gap-y-8">
                            {getData(qualificationData, title).data.map(
                              (item, i) => (
                                <div key={i} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2 capitalize">
                                      {title === "experience"
                                        ? item.company
                                        : item.University}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {title === "experience"
                                        ? item.role
                                        : item.qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {title === "experience"
                                        ? item.years
                                        : item.year}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent
                  value="skills"
                  className="justify-center items-center"
                >
                  <h3 className="capitalize h3 mb-8">
                    Tools i use for projects
                  </h3>
                  <div className="grid md:grid-cols-2 gap-y-8">
                    {skillData.map((skillCategory, idx) => (
                      <div key={idx} className="flex flex-col gap-y-6">
                        <div className="text-primary">
                          {skillCategory.title}
                        </div>
                        <div className="flex flex-col gap-y-4">
                          {skillCategory.data.map((skill, i) => (
                            <div key={i} className="flex items-center gap-x-4">
                              {skill.imgPath ? (
                                <Image
                                  src={skill.imgPath}
                                  alt={skill.name}
                                  width={20}
                                  height={20}
                                />
                              ) : (
                                <div>{skill.name}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
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
