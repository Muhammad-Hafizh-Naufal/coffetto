import React from "react";

export default function Index() {
  return (
    <>
      <nav className="font-pacifico bg-[#492D26] text-white p-5">
        <div className="md:flex items-center mx-10 justify-between">
          <div className="flex gap-1 items-center justify-center">
            <img
              src="/img/logo.png"
              alt="Coffetto Logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl">Coffetto</h1>
          </div>
          <ul className="md:flex hidden gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Steps</li>
            <li>Testimonial</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
