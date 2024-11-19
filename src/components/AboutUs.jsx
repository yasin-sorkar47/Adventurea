export default function AboutUs() {
  return (
    <div className="my-[100px]">
      <section className="w-11/12 mx-auto">
        <div className="  px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center gap-y-6 md:gap-y-0 md:gap-14">
          <div className="md:w-[50%]">
            <img
              src="https://i.ytimg.com/vi/ug574QnXwkw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGIgZSg_MA8=&rs=AOn4CLAhXgVYkRyRL-82EA95mj_Vy7HOyQ"
              alt="Group of Travelers"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="md:w-[50%]">
            <h3 className="text-sm text-green-500 uppercase font-semibold">
              About Us
            </h3>
            <h2 className="mt-2 text-4xl font-bold text-gray-800">
              Unveil Prime Destinations With Us
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-[500px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Ccaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit.
            </p>
            <div className="mt-6 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8">
              <div className="bg-gray-200 px-5 py-2 text-center rounded-md">
                <h4 className="text-2xl font-bold text-gray-800">15k</h4>
                <p className="text-sm text-gray-500">Success Journey</p>
              </div>
              <div className="bg-gray-200 px-5 py-2 text-center rounded-md">
                <h4 className="text-2xl font-bold text-gray-800">26+</h4>
                <p className="text-sm text-gray-500">Awards Win</p>
              </div>
              <div className="bg-gray-200 px-5 py-2 text-center rounded-md">
                <h4 className="text-2xl font-bold text-gray-800">30+</h4>
                <p className="text-sm text-gray-500">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
