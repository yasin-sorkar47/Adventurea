import { useLoaderData } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Adventures from "../components/adventures";

export default function Home() {
  const data = useLoaderData();
  const blogs = data.adventureBlogs.slice(0, 4);

  return (
    <>
      <Banner />
      <AboutUs />
      <section className="w-11/12 mx-auto my-14">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-800 font-bold text-center mb-10">
          Adventure Experiences
        </h1>
        <Adventures />
      </section>
      <section className="w-11/12 mx-auto mb-14">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-800 font-bold text-center mb-10">
          Adventure Blogs
        </h1>
        <Blogs blogs={blogs} />
      </section>
    </>
  );
}
