import { useState, useRef, useEffect } from 'react';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const searchRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  const handleClickCloseButton = (): void => {
    setIsOpen(false);
  }

  return (
    <div className='max-w-md mx-auto'>
      <div className="max-w-md mx-auto" ref={searchRef}>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="유저검색"
            className="w-full py-2 pl-4 pr-16 text-sm border rounded-full focus:outline-none focus:border-blue-300 text-black"
            onClick={() => setIsOpen(true)}
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
            {inputValue && (
              <button onClick={handleClearInput} className="focus:outline-none">
                <img src="src/assets/image/close.svg"></img>
              </button>
            )}
            <div className='cursor-pointer'>
              <img src="src/assets/image/search.svg"></img>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="p-3 bg-white border rounded-xl shadow-lg absolute w-[245px]">
            <div className="text-sm text-gray-500 flex justify-center items-center min-h-[50px]">
              최근 검색어가 없습니다.
            </div>
            <div className="flex justify-between mt-2">
              <div>
                <button className="text-xs text-gray-500 hover:text-gray-700">자동저장 끄기</button>
              </div>
              <div>
                <button className="text-xs text-gray-500 hover:text-gray-700 mr-2">전체삭제</button>
                <button className="text-xs text-gray-500 hover:text-gray-700" onClick={handleClickCloseButton}>닫기</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;