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
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-800 font-bold text-center mb-5">
          Adventure Experiences
        </h1>
        <p className="max-w-[700px] mx-auto text-center  mb-10">
          Adventure Experiences offer thrilling activities that connect you with
          nature and test your limits. From mountain treks and kayaking to
          zip-lining and camping under the stars, each adventure is designed to
          create unforgettable memories and fuel your passion for exploration.
        </p>
        <Adventures />
      </section>
      <section className="w-11/12 mx-auto mb-14">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-800 font-bold text-center mb-5">
          Adventure Blogs
        </h1>
        <p className="max-w-[700px] mx-auto text-center  mb-10">
          Adventure Experiences offer thrilling activities that connect you with
          nature and test your limits. From mountain treks and kayaking to
          zip-lining and camping under.
        </p>
        <Blogs blogs={blogs} />
      </section>
    </>
  );
}
