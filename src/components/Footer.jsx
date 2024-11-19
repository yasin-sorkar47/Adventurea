import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-green-600 text-base-content rounded p-10">
      <aside>
        <p className="text-xl font-bold text-white m-0">Find us by these</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-x-4">
          <button>
            <FaTwitter className="text-2xl text-white" />
          </button>
          <button>
            <FaYoutube className="text-2xl text-white" />
          </button>
          <button>
            <FaFacebookF className="text-2xl text-white" />
          </button>
        </div>
      </nav>
      <aside>
        <p className="text-white">
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}
