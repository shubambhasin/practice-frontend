import React from "react";
import {
  CASIO,
  CHILDREN,
  HIGH_TO_LOW,
  L,
  LOW_TO_HIGH,
  M,
  MEN,
  NIKE,
  S,
  TIMEX,
  WOMEN
} from "../../context/actions";
import { AiOutlineClose } from "react-icons/ai";

import { useFilter } from "../../context/FilterContext";
import { useSidebar } from "../../context/SidebarContext";
import "./sidebar.css";
export const Sidebar = () => {
  const {
    sortType,
    setSortType,
    filterType,
    setFilterType,
    brandFilter,
    setBrandFilter,
    sizeFilter,
    setSizeFilter
  } = useFilter();
  const { showSidebar, setShowSidebar } = useSidebar();

  const clearAll = () => {
    setSortType("");
    setFilterType("");
    setBrandFilter("");
    setSizeFilter("");
  };
  return (
    <div className={showSidebar ? `sidebar` : "sidebar-hidden relative"}>
      <span className="h3 f-grey m1-rem t-center">
        Filters{" "}
        <button onClick={clearAll} className="btn btn-sm btn-outline">
          Clear filters
        </button>
        <span
          className="pointer absolute close"
          onClick={() => setShowSidebar(false)}
        >
          <AiOutlineClose />
        </span>
      </span>
      <hr />
      <div className="p1-rem">
        <div className="flex flex-col mt1-rem">
          <span> SortBy</span>
          <div className="flex gap-1 aic">
            <input
              type="radio"
              checked={sortType === LOW_TO_HIGH ? true : false}
              name="sortBy"
              onClick={() => setSortType(LOW_TO_HIGH)}
            />
            <label>low-to-high</label>
          </div>
          <div className="flex gap-1 aic">
            <input
              type="radio"
              name="sortBy"
              checked={sortType === HIGH_TO_LOW ? true : false}
              onClick={() => setSortType(HIGH_TO_LOW)}
            />
            <label>high-to-low</label>
          </div>
        </div>
        <div className="flex flex-col jcc mt1-rem">
          <span> FilterBy Choice</span>
          <div className="flex gap-1 aic">
            <input
              type="radio"
              name="filterBy"
              checked={filterType === CHILDREN ? true : false}
              onClick={() => setFilterType(CHILDREN)}
            />
            <label>Children</label>
          </div>
          <div className="flex gap-1 aic">
            <input
              type="radio"
              name="filterBy"
              checked={filterType === MEN ? true : false}
              onClick={() => setFilterType(MEN)}
            />
            <label>Men</label>
          </div>
          <div className="flex gap-1 aic">
            <input
              type="radio"
              name="filterBy"
              checked={filterType === WOMEN ? true : false}
              onClick={() => setFilterType(WOMEN)}
            />
            <label>Women</label>
          </div>
        </div>
        Brand
        <div className="flex flex-col jcc mt1-rem">
          <span> FilterBy Size</span>
          <div className="flex gap-1 aic">
            <input
              type="radio"
              checked={sizeFilter === S ? true : false}
              name="filterBySize"
              onClick={() => setSizeFilter(S)}
            />
            <label>S</label>
          </div>
          <div className="flex gap-1 aic">
            <input
              type="radio"
              checked={sizeFilter === M ? true : false}
              name="filterBySize"
              onClick={() => setSizeFilter(M)}
            />
            <label>M</label>
          </div>
          <div className="flex gap-1 aic">
            <input
              type="radio"
              name="filterBySize"
              checked={sizeFilter === L ? true : false}
              onClick={() => setSizeFilter(L)}
            />
            <label>L</label>
          </div>
        </div>
        <div className="flex flex-col jcc mt1-rem">
          <span> FilterBy Brand</span>
          <div className="flex gap-1 aic">
            <input
              type="radio"
              name="filterByBrand"
              checked={brandFilter === NIKE ? true : false}
              onClick={() => setBrandFilter(NIKE)}
            />
            <label>Nike</label>
          </div>
          <div className="flex gap-1 aic">
            <input
              type="radio"
              name="filterByBrand"
              checked={brandFilter === TIMEX ? true : false}
              onClick={() => setBrandFilter(TIMEX)}
            />
            <label>Timex</label>
          </div>
          <div className="flex gap-1 aic">
            <input
              type="radio"
              name="filterByBrand"
              checked={brandFilter === CASIO ? true : false}
              onClick={() => setBrandFilter(CASIO)}
            />
            <label>Casio</label>
          </div>
        </div>
      </div>
    </div>
  );
};
