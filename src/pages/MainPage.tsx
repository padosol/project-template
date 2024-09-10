import { useState } from "react";

import Header from "../components/layout/Header";
import MainContent from "../components/layout/MainContent";
import Sidebar from "../components/layout/Sidebar";

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [test, setTest] = useState("test");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header toggleSidebar={toggleSidebar}/>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} />
          <MainContent />
        </div>
      </div>
    </>
  )
}

export default MainPage;