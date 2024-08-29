import Logo from "./Logo";
function Header() {
  return (
    <header className="bg-black text-white p-4 mt-1 flex justify-between px-[5%] items-center rounded-t-2xl overflow-hidden">
      <div className="flex items-center gap-2">
        <a href="#" className="flex items-center">
          <Logo />
          <h1 className="text-lg font-semibold">Abstract</h1>
        </a>
        <span className="font-[300]">| Help Center</span>
      </div>
      <button className="hidden sm:inline-block bg-[#1a1a1a] hover:bg-[#3a3a3a] text-white py-1 px-4 rounded border border-gray-400  pb-1.5">
        Submit a request
      </button>
    </header>
  );
}

export default Header;
