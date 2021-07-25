import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  return (
    <div>
      <FilterContext.Provider
        value={{
          sortType,
          setSortType,
          filterType,
          setFilterType,
          brandFilter,
          setBrandFilter,
          sizeFilter,
          setSizeFilter
        }}
      >
        {children}
      </FilterContext.Provider>
    </div>
  );
};

export const useFilter = () => useContext(FilterContext);
