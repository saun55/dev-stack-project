import bannerImg from "../../assets/banner-stack.png";

const BannerSection = () => {
  return (


<div className="container mx-auto px-4 py-10 md:py-16">
  <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

    {/* Heading + Description + Buttons */}

    <div className="w-full text-center md:w-1/2 md:text-left">

      <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
        Build Your Ideal
        <br />
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
          Development Stack
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8 md:mx-0 md:text-xl">
        Explore frontend, backend, database, and tooling options, compare
        them side by side, and put together the stack that fits your next
        project.
      </p>

      <div className="flex justify-center gap-3 pt-5 md:justify-start">
        <button className="btn rounded-[10px] border-none bg-gradient-to-r from-orange-500 to-pink-500 font-bold text-white">
          Explore Technologies
        </button>

        <button className="btn px-10 rounded-[10px]">
          Learn More
        </button>
      </div>

    </div>

    {/* Image */}
    <div className="flex w-full justify-center md:w-1/2">
      <img
        src={bannerImg}
        alt="Development Stack"
        className="w-full max-w-md object-contain md:max-w-lg"
      />
    </div>

  </div>
</div>




  );
};

export default BannerSection;