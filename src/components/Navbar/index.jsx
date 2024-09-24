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
      <div className="bg-[#492D26]">
        <nav
          className="font-pacifico bg-[#492D26] text-white p-5 border-b border-dashed "
          data-aos="fade-down"
        >
          <div className="md:flex items-center lg:mx-80 justify-between ">
            <div className="">
              <a href="/" className="flex gap-1 justify-center items-center">
                <img
                  src="/img/logo.png"
                  alt="Coffetto Logo"
                  className="w-10 h-10"
                />
                <h1 className="text-2xl">Coffetto</h1>
              </a>
            </div>
            <ul className="md:flex hidden gap-10">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#steps">Steps</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
