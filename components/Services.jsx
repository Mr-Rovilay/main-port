import { Blocks, GanttChartSquare, Gem, Code, Shield, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Designing visually stunning and responsive websites that captivate users and drive engagement. From concept to final design, I ensure your site stands out in the digital landscape.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Developing high-performance websites using the latest technologies to ensure scalability, speed, and security. I transform designs into dynamic, fully-functional websites.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Creating innovative mobile applications tailored to meet your business needs. My apps are designed to deliver seamless user experiences and boost customer satisfaction.",
  },
  {
    icon: <Code size={72} strokeWidth={0.8} />,
    title: "Custom Software",
    description:
      "Building custom software solutions to address unique business challenges. Whether you need a CRM, ERP, or any other software, I provide tailored solutions to streamline your operations.",
  },
  {
    icon: <Smartphone size={72} strokeWidth={0.8} />,
    title: "UX/UI Design",
    description:
      "Crafting intuitive user interfaces and experiences that make your applications a joy to use. My designs are focused on usability, accessibility, and achieving your business goals.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-12 text-center section-title xl:mb-24">
          My Services
        </h2>
        <div className="grid justify-center xl:grid-cols-3 gap-y-12 xl:gap-y-24">
          {serviceData.map((item, i) => (
            <Card
              key={i}
              className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
            >
              <CardHeader className="text-primary absolute -top-[60px]">
                <div className="hidden w-[100px] h-[80px] bg-[#FFEDDF] border-solid border-2 border-[#41B36C] dark:bg-background md:flex justify-center items-center rounded-md">
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription className="text-lg subtitle">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
