import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="bg-gradient-to-b from-firstColorLight-0 to-firstColor-0 w-full  py-10">
        <div
          className="sm:flex sm:items-center flex-reverse sm:justify-center "
          data-aos="fade-right"
        >
          <img src="/img/home-coffee.png" alt="" className="sm:w-1/3" />
          <div className="flex sm:text-start sm:items-start text-center flex-col md:w-1/2 lg:w-1/4 ">
            <h2 className="sm:text-2xl  font-poppins text-secondaryColor-0 ">
              EXCEPTIONAL QUALITY
            </h2>
            <div className="flex flex-col">
              <h1 className="sm:text-7xl text-4xl font-pacifico text-white ">
                It's time for a.
                <span className="inline-flex items-center">
                  good coffee
                  <img
                    src="/img/home-coffee-title1.png"
                    alt=""
                    className="ml-2 md:w-auto w-16"
                  />
                </span>
              </h1>
              <p className="text-white mt-4 sm:w-2/3">
                Each select coffee bean reflects our commitment to Peruvian
                coffee growers, who bring the best select coffee to your table.
              </p>
            </div>
            <button className="bg-secondaryColor-0  mt-4 px-5 py-3 rounded-full flex items-center justify-center  shadow-secondaryColor-0 shadow-sm">
              Get Started
              <img
                src="/img/ri_arrow-right-s-line.png"
                alt=""
                className="ml-2"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
