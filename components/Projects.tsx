import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import SortingVisualizer from "../public/sorting-visualizer.png";
import PathfindingVisualizer from "../public/pathfinding-visualizer.png";
import ComfyStore from "../public/comfy-store.png";

const projects = [
  {
    title: "Sorting Visualizer",
    desc: "Web app to visualize sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, etc.",
    image: SortingVisualizer,
    link: "https://sorting-vizualizer-one.vercel.app/",
    techs: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Comfy Store",
    desc: "Furniture e-commerce website for a client on Fiverr. It includes a cart, orders and a checkout page.",
    image: ComfyStore,
    link: "https://comfy-store-tawny.vercel.app/",
    techs: [
      "ReduxToolkit",
      "React",
      "ReactQuery",
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
      "Axios",
      "ReactRouter",
      "API",
    ],
  },
  {
    title: "Pathfinding Visualizer",
    desc: "Interactive web application to demonstrate various pathfinding algorithms in action. It helps visualize how different algorithms navigate through a grid to find the shortest path between two points.",
    image: PathfindingVisualizer,
    link: "https://pathfinder-visualizer-bay.vercel.app/",
    techs: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <div
      className="group/list lg:mt-16 ml-6 lg:max-w-[32rem] mt-12 scroll-mt-16 lg:scroll-mt-24"
      id="projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen lg:bg-slate-900/75 px-6 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-slate-200 uppercase font-bold mb-8 lg:sr-only tracking-widest text-sm">
          Projects
        </h2>
      </div>
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            link={project.link}
            techs={project.techs}
          />
        );
      })}
    </div>
  );
};
export default Projects;
