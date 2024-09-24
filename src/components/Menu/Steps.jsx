import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Steps() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div
        id="steps"
        className="bg-firstColorLight-0 md:rounded-t-[7rem] rounded-t-[4rem] mt-20 h-auto md:py-20 py-10 bg-[url('/img/bg-coffee-beans.png')] bg-cover  bg-no-repeat w-auto"
      >
        <div className="">
          <h1 className="text-5xl text-white text-center font-pacifico">
            Steps of manufacturing our products
          </h1>
          <div className="flex flex-wrap justify-between my-10 px-10">
            <div
              className="md:w-1/4 flex flex-col items-center text-center"
              data-aos="zoom-in"
            >
              <img src="/img/Steps circle1.png" alt="" />
              <p className="text-white font-poppins mt-4">
                Harvest occurs annually when the coffee beans reach maturity and
                are collected for processing.
              </p>
            </div>
            <div
              className="md:w-1/4 flex flex-col items-center text-center"
              data-aos="zoom-in"
            >
              <img src="/img/Steps circle2.png" alt="" />
              <p className="text-white font-poppins mt-4">
                The beans are dried using a wet or dry technique, depending on
                the taste we want to obtain.
              </p>
            </div>
            <div
              className="md:w-1/4 flex flex-col items-center text-center"
              data-aos="zoom-in"
            >
              <img src="/img/Steps circle3.png" alt="" />
              <p className="text-white font-poppins mt-4">
                The coffee is roasted and acquires its flavor by processing the
                grain in ovens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
