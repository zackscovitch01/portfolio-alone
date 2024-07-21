const About = () => {
  return (
    <div
      className="lg:mt-16 ml-6 mt-14 lg:max-w-[32rem] scroll-mt-16 lg:scroll-mt-24"
      id="about"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen lg:bg-slate-900/75 px-6 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-slate-200 uppercase font-bold mb-8 lg:sr-only tracking-widest text-sm">
          About
        </h2>
      </div>
      <p className="text-slate-400 mb-4">
        After graduating from Laval University in 2018 with a degree in{" "}
        <span className="font-medium text-slate-200">Bioinformatics</span>, I
        found myself at a crossroads. Although I gained valuable skills in{" "}
        <span className="text-teal-300">Python</span>,{" "}
        <span className="text-teal-300">SQL</span>, and big data manipulation, I
        realized my true passion lay in building websites and crafting intuitive
        user interfaces. Determined to follow this passion, I decided to{" "}
        <span className="font-medium text-slate-200">teach myself</span> web
        development.
      </p>

      <p className="text-slate-400 mb-4">
        Over the past{" "}
        <span className="font-medium text-slate-200">6 years</span>, I have
        dedicated myself to coding daily, mastering various frameworks and
        technologies mainly <span className="text-teal-300">React</span> and{" "}
        <span className="text-teal-300">Javascript</span>, and honing best
        practices in version control (<span className="text-teal-300">Git</span>{" "}
        & <span className="text-teal-300">Github</span>). My journey has
        included working for a small web design agency and freelancing on the
        side, during which I have successfully helped{" "}
        <span className="font-medium text-slate-200">60+ clients</span> bring
        their ideas to life.
      </p>
      <p className="text-slate-400 mb-4">
        My main focus these days is building accessible, inclusive, and
        high-performance websites through freelancing on{" "}
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.upwork.com/"
        >
          Upwork
        </a>{" "}
        and{" "}
        <a
          href="https://www.fiverr.com/?source=top_nav"
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Fiverr{" "}
        </a>
        using a combinaison of <span className="text-teal-300">NextJs 14</span>,{" "}
        <span className="text-teal-300">Tailwind CSS</span> and{" "}
        <span className="text-teal-300">TypeScript</span>. Althought I love
        freelancing, it was always meant to be a stepping stone throught which I
        will be able to practice and master my newly learned skills. I am ready
        to take my talents to a company and seeking new opportunities to
        collaborate with a talented team of developers and designers, where I
        can continue to learn, grow and contribute to creating exceptional web
        experiences. <br />
        <br />
      </p>
    </div>
  );
};
export default About;
