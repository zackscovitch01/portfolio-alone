import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="max-w-[358px]">
        <h1 className="text-4xl text-slate-200 font-bold tracking-tight">
          <Link href="/" className="cursor-pointer">
            Moubarack Bagoudou
          </Link>
        </h1>

        <h2 className="text-lg font-medium tracking-tight text-slate-200 mt-3 sm:text-xl">
          Junior Frontend Engineer
        </h2>
        <p className="text-slate-400 mt-4 max-w-xs leading-normal">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>

      <Navbar />
    </div>
  );
};
export default Header;
