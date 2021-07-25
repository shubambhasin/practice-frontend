import React from "react";
import { ProductCard } from "../../components/productCard/ProductCard";
import {
  CHILDREN,
  HIGH_TO_LOW,
  LOW_TO_HIGH,
  MEN,
  WOMEN
} from "../../context/actions";
import { useFilter } from "../../context/FilterContext";
import data from "../../data/product.json";
import {
  getBrandFilteredData,
  getIdealForFilteredData,
  getSizeFilteredData
} from "../../utils/Filters";
import "./productpage.css";
export const ProductPage = ({ product }) => {
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
  const getSortedData = (data, sortType) => {
    if (sortType === HIGH_TO_LOW) {
      console.log(data.sort((a, b) => b.price - a.price));
      return data.sort((a, b) => b.price - a.price);
    } else if (sortType === LOW_TO_HIGH) {
      console.log(data.sort((a, b) => a.price - b.price));
      return data.sort((a, b) => a.price - b.price);
    } else {
      return data;
    }
  };
  // const getFilteredData = (data, filterType) => {

  //   if (filterType === MEN) {
  //     return data.filter((data) => data.idealFor === "men")
  //   } else if (filterType === WOMEN) {
  //     return data.filter((data) => data.idealFor === "women")
  //   } else if (filterType === CHILDREN) {
  //     return data.filter((data) => data.idealFor === "children")
  //   } else {
  //     return data;
  //   }
  // };

  const sortedData = getSortedData(data, sortType);
  const idealForData = getIdealForFilteredData(sortedData, filterType);
  const brandFilterData = getBrandFilteredData(idealForData, brandFilter);
  const sizeFilteredData = getSizeFilteredData(brandFilterData, sizeFilter);
  const finalData = sizeFilteredData;
  return (
    <div className="product-page flex f-wrap jc ">
      {finalData.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
