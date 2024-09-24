import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function index() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="bg-firstColor-0">
        <div className="bg-firstColorLight-0  md:rounded-t-[7rem] rounded-t-[4rem] md:-mt-40 md:pb-40 h-auto py-10 ">
          <div
            className="md:flex justify-evenly block md:items-center"
            data-aos="fade-up"
          >
            <div className="md:w-1/4 md:text-left flex flex-col text-center md:items-start items-center">
              <button className="flex gap-5 md:my-10 mb-9 items-center bg-firstColor-0 px-5 py-3 rounded-full text-white shadow-firstColor-0 shadow-md">
                Scroll Down
                <img src="/img/Vector.png" alt="" />
              </button>
              <p className="text-white font-poppins text-2xl ">
                We strive to form deep partnerships with farmers from all over
                thes world to create perspective together and form healthy
                working relationships built on trust and respect.
              </p>
            </div>
            <div className="flex md:gap-10 justify-center mt-10 md:mt-0 gap-5 flex-wrap ">
              <Card
                Image="/img/product-coffee-1.png"
                Title="Classic Coffee"
                Price="$17.90"
              />
              <Card
                Image="/img/product-coffee-2.png"
                Title="Black Coffee"
                Price="$24.90"
              />
              <Card
                Image="/img/product-coffee-3.png"
                Title="Strong Coffee"
                Price="$32.90"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
