import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-row gap-4 mt-6 text-slate-400">
      <a href="">
        <FaGithub className="h-6 w-6" />
      </a>
      <a href="">
        <FaLinkedin className="h-6 w-6" />
      </a>
      <a href="">
        <FaInstagram className="h-6 w-6" />
      </a>
      <a href="">
        <FaXTwitter className="h-6 w-6" />
      </a>
    </div>
  );
};
export default Footer;
