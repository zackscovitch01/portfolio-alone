import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="lg:mt-16 ml-6 lg:max-w-[32rem]" id="experience">
      <h2 className="text-slate-200 uppercase font-bold mb-8 lg:sr-only tracking-widest text-sm">
        Experience
      </h2>
      <ExperienceCard
        startYear="2018"
        endYear="Present"
        jobTitle="Machine Learning Intern"
        jobDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro modi dolore et, possimus amet soluta eaque adipisci laudantium tenetur, labore, beatae enim? Tenetur, tempore quisquam."
        companyName="INAF"
        tech={["Python", "Tensor Flow"]}
      />
      <ExperienceCard
        startYear="2018"
        endYear="Present"
        jobTitle="Machine Learning Intern"
        jobDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro modi dolore et, possimus amet soluta eaque adipisci laudantium tenetur, labore, beatae enim? Tenetur, tempore quisquam."
        companyName="INAF"
        tech={["Python", "Tensor Flow"]}
      />
      <ExperienceCard
        startYear="2018"
        endYear="Present"
        jobTitle="Machine Learning Intern"
        jobDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro modi dolore et, possimus amet soluta eaque adipisci laudantium tenetur, labore, beatae enim? Tenetur, tempore quisquam."
        companyName="INAF"
        tech={["Python", "Tensor Flow"]}
      />
    </div>
  );
};
export default Experience;
