import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Testimonial() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div id="testimonial" className="bg-firstColorLight-0">
        <div className="bg-white md:rounded-t-[7rem] rounded-t-[4rem]  md:-mt-10 h-[30rem] md:py-20 py-10">
          <div
            className=" flex flex-wrap justify-center  md:flex-row-reverse  flex-col-reverse items-center gap-10  "
            data-aos="fade-right"
          >
            <div className="md:w-auto w-[22rem]">
              <img src="/img/testimonial-coffee.png" alt="" />
            </div>
            <div className="md:w-1/4 md:text-start text-center ">
              <h1 className="text-5xl font-pacifico mb-10">
                Coffee is the best drink in the morning, it keeps you focused.
              </h1>
              <p className="font-poppins">Muhammad Hafizh Naufal </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
