import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    startYear: "Dec 2022",
    endYear: "Present",
    jobTitle: "Freelance Web Developer",
    jobDesc:
      "Independently managed and excuted a diverse range of web development projects for clients accross various industries. Created responsive, high-performance websites, ensuring cross-browser compatibility, and optimizing user experience. I have successfully collaborated with 35+ clients to understand their requirements, develop project scopes, and deliver custom web solutions on time and within budget.",
    link: "https://www.fiverr.com/",
    companyName: "Upwork & Fiverr",

    tech: ["TypeScript", "Tailwind CSS", "Next js", "Clerk", "Firebase"],
  },
  {
    startYear: "2019",
    endYear: "Nov 2022",
    jobTitle: "Junior Web Developer",
    jobDesc:
      "Developed, tested and maintained clients websites and web applications. Worked closely with clients to establish problem specifications and system designs. Ensured that the website is optimized for various devices and presented a consistent look and feel across all platforms. Collaborated with a team of developers, desigbers and project managers to deliver high quality projects on time.",
    link: "#",
    companyName: "2AB Web Design",

    tech: ["Javascript", "React", "HTML & CSS"],
  },
  {
    startYear: "Apr",
    endYear: "Aug 2017",
    jobTitle: "Bioinformatics Intern",
    jobDesc:
      "Developed a machine learning model to characterize the interactions between the cannabinoid receptors (CB1 & CB2) and other drugs in the human body. The model was trained on 10,000+ drugs and achieved an accuracy of 95%.",
    link: "https://www.inaf.ulaval.ca/en/",
    companyName: "INAF",

    tech: ["Python", "Tensor Flow", "Keras", "Pytorch"],
  },
];

const Experience = () => {
  return (
    <div
      className="lg:mt-16 mt-12 ml-6 lg:max-w-[32rem] scroll-mt-16 lg:scroll-mt-24"
      id="experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen lg:bg-slate-900/75 px-6 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-slate-200 uppercase font-bold mb-8 lg:sr-only tracking-widest text-sm">
          Experience
        </h2>
      </div>
      {experiences.map((experience) => {
        return (
          <ExperienceCard
            startYear={experience.startYear}
            endYear={experience.endYear}
            jobTitle={experience.jobTitle}
            jobDesc={experience.jobDesc}
            link={experience.link}
            companyName={experience.companyName}
            tech={experience.tech}
          />
        );
      })}
    </div>
  );
};
export default Experience;
