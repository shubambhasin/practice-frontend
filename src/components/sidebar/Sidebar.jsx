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
import { useFilter } from "../../context/FilterContext";
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

  return (
    <div className="sidebar">
      <span className="h3 f-grey m1-rem t-center">Filters</span>
      <hr />
      <div className="p1-rem">
        <div className="flex flex-col mt1-rem">
          <span> SortBy</span>
          <div>
            <input
              type="radio"
              name="sortBy"
              onClick={() => setSortType(LOW_TO_HIGH)}
            />
            <label>low-to-high</label>
          </div>
          <div>
            <input
              type="radio"
              name="sortBy"
              onClick={() => setSortType(HIGH_TO_LOW)}
            />
            <label>high-to-low</label>
          </div>
        </div>
        <div className="flex flex-col jcc mt1-rem">
          <span> FilterBy</span>
          <div>
            <input
              type="radio"
              name="filterBy"
              onClick={() => setFilterType(CHILDREN)}
            />
            <label>Children</label>
          </div>
          <div>
            <input
              type="radio"
              name="filterBy"
              onClick={() => setFilterType(MEN)}
            />
            <label>Men</label>
          </div>
          <div>
            <input
              type="radio"
              name="filterBy"
              onClick={() => setFilterType(WOMEN)}
            />
            <label>Women</label>
          </div>
        </div>
        Brand
        <div className="flex flex-col jcc mt1-rem">
          <span> FilterBy Size</span>
          <div>
            <input
              type="radio"
              name="filterBySize"
              onClick={() => setSizeFilter(S)}
            />
            <label>S</label>
          </div>
          <div>
            <input
              type="radio"
              name="filterBySize"
              onClick={() => setSizeFilter(M)}
            />
            <label>M</label>
          </div>
          <div>
            <input
              type="radio"
              name="filterBySize"
              onClick={() => setSizeFilter(L)}
            />
            <label>L</label>
          </div>
        </div>
        <div className="flex flex-col jcc mt1-rem">
          <span> FilterBy Brand</span>
          <div>
            <input
              type="radio"
              name="filterByBrand"
              onClick={() => setBrandFilter(NIKE)}
            />
            <label>Nike</label>
          </div>
          <div>
            <input
              type="radio"
              name="filterByBrand"
              onClick={() => setBrandFilter(TIMEX)}
            />
            <label>Timex</label>
          </div>
          <div>
            <input
              type="radio"
              name="filterByBrand"
              onClick={() => setBrandFilter(CASIO)}
            />
            <label>Casio</label>
          </div>
        </div>
      </div>
    </div>
  );
};
