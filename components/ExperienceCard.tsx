interface ExperienceCardProps {
  startYear: string;
  endYear: string;
  jobTitle: string;
  jobDesc: string;
  link: string;
  companyName: string;
  tech: string[];
}

const ExperienceCard = ({
  startYear,
  endYear,
  jobTitle,
  jobDesc,
  link,
  companyName,
  tech,
}: ExperienceCardProps) => {
  return (
    <article className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-sm transition motion-reduce::transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <p className="z-10 text-slate-400 mb-2 mt-1 text-xs font-semi-bold uppercase tracking-wide sm:col-span-2">
        {startYear} — {endYear}
      </p>

      <div className="z-10 sm:col-span-6">
        <div>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {jobTitle} · {""}
              <span className="inline-block">
                {companyName}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
        <p className="text-slate-400 mt-2 text-sm leading-normal">{jobDesc}</p>
        <ul className="flex flex-wrap mt-2">
          {tech.map((singleTech, index) => {
            return (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {singleTech}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};
export default ExperienceCard;
