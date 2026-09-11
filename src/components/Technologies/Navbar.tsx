import logo from "../../assets/logo-text.png";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto my-5 px-4 py-5">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between text-center">
          <img src={logo} alt="Text Logo" />

          <ul
            className="flex gap-4 font-bold
       "
          >
            <li className="hover:text-[#D91B7E]">
              <a href="">Home</a>
            </li>
            <li className="hover:text-[#D91B7E]">
              <a href="">Technologies</a>
            </li>
            <li className="hover:text-[#D91B7E]">
              <a href="">Projects</a>
            </li>
            <li className="hover:text-[#D91B7E]">
              <a href="">About</a>
            </li>
            <li className="hover:text-[#D91B7E]">
              <a href="">Contact</a>
            </li>
          </ul>

          <div>
            <button className="btn rounded-3xl border-none p-5">Sign in</button>

            <button className="btn bg-[#D91B7E] text-white rounded-3xl p-5">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex items-center justify-between md:hidden">
          <div className="text-2xl">☰</div>

          <img src={logo} alt="Text Logo" className="w-28" />

          <div className="flex gap-1">
            <button className="btn btn-sm rounded-3xl border-none">
              Sign in
            </button>

            <button className="btn bg-[#D91B7E] text-white rounded-3xl p-5">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
