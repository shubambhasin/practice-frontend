import { useEffect } from "react";
import { useSidebar } from "./context/SidebarContext";
import { HomePage } from "./pages/homepage/HomePage";
import "./styles.css";

export default function App() {
  const { showSidebar, setShowSidebar } = useSidebar();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 599) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      handleResize();
    };
  }, []);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}
