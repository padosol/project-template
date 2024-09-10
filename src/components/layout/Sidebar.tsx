const Sidebar = ({isOpen} : {isOpen : boolean}) => {

  return (
    (
      <aside className={`text-white w-40 h-screen p-4 transition-all duration-300 ${isOpen ? 'w-0' : ''} fixed lg:relative lg:translate-x-0`}>
        <nav>
          <ul className="space-y-2 text-black cursor-pointer">
            <li className="hover:bg-gray-200 p-2 rounded flex items-center">
              <img src="src/assets/image/home.svg" width="25" className="mr-5"></img>
              {!isOpen && (<span>홈</span>)}
            </li>
            <li className="hover:bg-gray-200 p-2 rounded flex items-center">
              <img src="src/assets/image/leaderBoard.svg" className="mr-5"></img>
              {!isOpen && (<span>랭킹</span>)}
            </li>
          </ul>
        </nav>
      </aside>
    )
  )
};

export default Sidebar;