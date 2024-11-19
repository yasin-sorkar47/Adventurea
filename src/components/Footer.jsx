import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-green-600 text-base-content rounded p-10">
      <aside>
        <p className="text-xl font-bold text-white m-0">Find us by these</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-x-4">
          <Link to={"https://x.com/yasinsorkar47"} target="_blank">
            <FaTwitter className="text-2xl text-white" />
          </Link>
          <Link to={"https://github.com/yasin-sorkar47"} target="_blank">
            <FaGithub className="text-2xl text-white" />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/yasin-sarkar-24444b298/"}
            target="_blank"
          >
            <FaLinkedin className="text-2xl text-white" />
          </Link>
          <Link to={"https://www.facebook.com/@yasinSarkar47"} target="_blank">
            <FaFacebookF className="text-2xl text-white" />
          </Link>
        </div>
      </nav>
      <aside>
        <p className="text-white">
          Copyright © {new Date().getFullYear()} - All right reserved by Yasin
          Sarkar
        </p>
      </aside>
    </footer>
  );
}
