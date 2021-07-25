import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div>
      <SidebarContext.Provider
        value={{
          showSidebar,
          setShowSidebar
        }}
      >
        {children}
      </SidebarContext.Provider>
    </div>
  );
};

export const useSidebar = () => useContext(SidebarContext);
