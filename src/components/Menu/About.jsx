import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div id="about" className="bg-firstColorLight-0">
        <div className="bg-white md:rounded-t-[7rem] rounded-t-[4rem]  md:-mt-10 h-[30rem] md:py-20 py-10">
          <div
            className=" flex flex-wrap justify-center  md:flex-row  flex-col-reverse items-center gap-10  "
            data-aos="fade-left"
          >
            <div className="md:w-auto w-[22rem]">
              <img src="/img/about-coffee.png" alt="" />
            </div>
            <div className="md:w-1/4 md:text-start text-center ">
              <h1 className="text-5xl font-pacifico mb-3">Our History</h1>
              <p className="font-poppins">
                We make and grow the best coffee in Peru, accompanying families
                since 1930, with professional workers who harvest, collect and
                select the coffee with quality work, thus providing exquisite
                coffee to enjoy together as a family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
