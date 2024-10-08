import SearchBar from "../header/SearchBar";

const Header = ({toggleSidebar} : {toggleSidebar: () => void}) => (
  <header className=" text-white p-4 border">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="h-6 w-6">
          <button onClick={toggleSidebar} className="focus:outline-none">
            <img src="src/assets/image/menu.svg"></img>
          </button>
        </div>
        <h1 className="text-xl font-bold text-black cursor-pointer">MMRTR</h1>
      </div>
      <SearchBar />
      <div className="flex items-center justify-evenly">
        <button>
          <span className="text-black border rounded-md py-1 px-2 cursor-pointer hover:bg-slate-200">로그인</span>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
