const Footer = () => {
  return (
    <footer className="max-w-md pb-10 text-sm text-slate-500 sm:pb-10 ml-6">
      <p>
        Coded in{" "}
        <a
          href="https://code.visualstudio.com"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
        >
          Visual Studio Code
        </a>
        . Built with{" "}
        <a
          href="https://nextjs.org"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS,
        </a>{" "}
        deployed with{" "}
        <a
          href="https://vercel.com"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  );
};
export default Footer;
