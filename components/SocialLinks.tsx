import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <ul className="flex ml-1 mt-6 items-center text-slate-400">
      <li className="mr-5 text-xs shrink-0">
        <a className="block hover:text-slate-200" href="">
          <FaGithub className="h-6 w-6" />
          <span className="sr-only">Github</span>
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a className="block hover:text-slate-200" href="">
          <FaLinkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a className="block hover:text-slate-200" href="">
          <FaInstagram className="h-6 w-6" />
          <span className="sr-only">Instagram</span>
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a className="block hover:text-slate-200" href="">
          <FaXTwitter className="h-6 w-6" />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a className="block hover:text-slate-200" href="">
          <FaFacebook className="h-6 w-6" />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;
