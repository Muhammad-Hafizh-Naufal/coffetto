import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div
        className="bg-firstColorLight-0 md:rounded-t-[7rem] rounded-t-[4rem] md:mt-16 mt-28 h-auto md:py-20 py-10 bg-[url('/img/bg-coffee-beans.png')] bg-cover  bg-no-repeat w-auto"
        data-aos="fade-up"
      >
        <div className="flex flex-wrap text-center items-center justify-evenly">
          <div>
            <div className="flex md:flex-row md:justify-start justify-center items-center gap-1 text-white ">
              <img src="/img/logo.png" alt="" />
              <h2 className="text-2xl font-pacifico">Coffetto</h2>
            </div>
            <h1 className="text-white md:my-5 mt-3 mb-10 text-5xl font-pacifico">
              Sign up for our newsletter
            </h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter e-mail address"
              className="rounded-full px-10 py-3 text-black opacity-50"
            />
            <button className="bg-secondaryColor-0  mt-4 px-20 py-3 rounded-full flex items-center justify-center  shadow-secondaryColor-0 shadow-sm">
              Subscribe
              <img
                src="/img/ri_arrow-right-s-line.png"
                alt=""
                className="ml-2"
              />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 mt-20">
          <a href="">
            <img src="/img/twt.png" alt="" />
          </a>
          <a href="https://www.instagram.com/hafizh_naufal03/">
            <img src="/img/ins.png" alt="" />
          </a>
          <a href="">
            <img src="/img/fb.png" alt="" />
          </a>
        </div>
        <p className="text-white font-poppins mt-10 text-center">
          © 2024 Coffetto
        </p>
      </div>
    </>
  );
}
