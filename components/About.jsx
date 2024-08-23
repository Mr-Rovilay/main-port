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
import DevImg from "./DevImg";

const personalInfo = [
  { icon: <User2 size={20} />, text: "Ayodeji" },
  { icon: <PhoneCall size={20} />, text: "08140570029" },
  { icon: <MailIcon size={20} />, text: "ayodejiakinola007@gmail.com" },
  { icon: <HomeIcon size={20} />, text: "15 I.K Peters Street, Ajao Estate, Lagos" },
];

const qualifications = [
  {
    title: "education",
    items: [
      { institution: "University of Lagos", degree: "B.Sc", period: "2009 - 2014" },
      { institution: "Federal Government College, Ijanikin", degree: "SSCE", period: "2005 - 2008" },
      { institution: "Tunyo Comprehensive College", degree: "JSCE", period: "2002 - 2005" },
      { institution: "Lydia Primary School", degree: "Primary Certificate", period: "1999 - 2002" },
    ],
  },
  {
    title: "experience",
    items: [
      { company: "Osan Water", role: "Sales Marketer", period: "2014 - 2020" },
      { company: "Osan Water", role: "Manager/Developer", period: "2020 - 2023" },
      { company: "HNG Internship", role: "Front end Developer", period: "JUNE-2024 - AUG 2024" },
    ],
  },
];

const skills = [
  {
    category: "Skills",
    items: ["HTML, CSS, React, Next.js", "Front-end Development", "JavaScript", "TypeScript", "PHP", "Back-end Development"],
  },
  {
    category: "Tools",
    items: [
      { imgSrc: "/about/vscode.svg", name: "VSCode" },
      { imgSrc: "/about/figma.svg", name: "Figma" },
      { imgSrc: "/about/notion.svg", name: "Notion" },
      { imgSrc: "/about/wordpress.svg", name: "WordPress" },
    ],
  },
];

const About = () => {
  const renderQualificationItems = (data) => {
    return data.items.map((item, i) => (
      <div key={i} className="flex gap-x-8 group">
        <div className="h-[84px] w-[1px] bg-border relative ml-2">
          <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
        </div>
        <div>
          <div className="mb-2 text-xl font-semibold leading-none capitalize">
            {data.title === "experience" ? item.company : item.institution}
          </div>
          <div className="mb-4 text-lg leading-none text-muted-foreground">
            {data.title === "experience" ? item.role : item.degree}
          </div>
          <div className="text-base font-medium">{item.period}</div>
        </div>
      </div>
    ));
  };

  return (
    <section className="container xl:h-[860px] pb-2 xl:py-24 mt-32 md:mt-10">
      <div className="mx-auto">
        <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">About Me</h2>
        <div className="flex flex-col xl:flex-row">
          <div className="relative flex-1 hidden xl:flex">
          <DevImg
              containerStyles={
                "relative bg-bottom rounded-full overflow-hidden shadow-lg shadow  max-w-full h-auto border-none"
              }
              imgStyles={"w-[510px] h-[462px] object-cover"}
              ImgSrc={"/work/ayo.jpg"}
              alt={"Developer Image"}
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none gap-1">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="mt-12 text-lg xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-4 h3">Over 3 Years of Specialized Service</h3>
                    <p className="max-w-xl mx-auto subtitle xl:mx-0">
                      With a dedicated focus spanning more than three years, I bring expertise in crafting tailored solutions that exceed expectations. I deliver exceptional service that merges creativity with technical prowess.
                    </p>
                    <div className="grid gap-4 mb-12 xl:grid-cols-2">
                      {personalInfo.map((item, i) => (
                        <div key={i} className="flex items-center mx-auto gap-x-4 xl:mx-0">
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
                    <h3 className="mb-8 text-center h3 xl:text-left">My Journey</h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {qualifications.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            {section.title === "experience" ? <Briefcase size={28} /> : <GraduationCap size={28} />}
                            <h4 className="font-medium capitalize">{section.title}</h4>
                          </div>
                          <div className="flex flex-col gap-y-8">{renderQualificationItems(section)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills" className="items-center justify-center">
                  <h3 className="mb-8 capitalize h3">Tools I Use for Projects</h3>
                  <div className="grid md:grid-cols-2 gap-y-8">
                    {skills.map((skillCategory, idx) => (
                      <div key={idx} className="flex flex-col gap-y-6">
                        <div className="text-primary">{skillCategory.category}</div>
                        <div className="flex flex-col gap-y-4">
                          {skillCategory.items.map((skill, i) => (
                            <div key={i} className="flex items-center gap-x-4">
                              {skill.imgSrc ? (
                                <Image src={skill.imgSrc} alt={skill.name} width={20} height={20} />
                              ) : (
                                <div>{skill}</div>
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
