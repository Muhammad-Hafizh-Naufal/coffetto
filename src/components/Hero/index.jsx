export default function index() {
  return (
    <>
      {/* <div className="flex items-center">
        <img src="/img/home-coffee.png" alt="" />
        <div className="flex flex-col">
          <h2 className="text-xl font-poppins">EXCEPTIONAL QUALITY</h2>
          <h1 className="text-5xl font-pacifico">
            It's time for a. good coffee
          </h1>
          <img src="/img/home-coffee-title1.png" alt="" />
        </div>
      </div> */}
      {/* bg linear */}
      <div className="grid grid-cols-2 bg-firstColor-0">
        <img
          src="/img/home-coffee.png"
          alt="Home Hero Image"
          className="w-full"
        />
        <h1 className="text-3xl font-poppins items-center flex">
          EXCEPTIONAL QUALITY
        </h1>
        <h2>It's time for a. good coffee</h2>
      </div>
    </>
  );
}
