import React from "react";
import { ProductCard } from "../../components/productCard/ProductCard";
import { useFilter } from "../../context/FilterContext";
import data from "../../data/product.json";
import {
  getBrandFilteredData,
  getIdealForFilteredData,
  getSizeFilteredData,
  getSortedData
} from "../../utils/Filters";
import "./productpage.css";
export const ProductPage = ({ product }) => {
  const { sortType, filterType, brandFilter, sizeFilter } = useFilter();

  const sortedData = getSortedData(data, sortType);
  const idealForData = getIdealForFilteredData(sortedData, filterType);
  const brandFilterData = getBrandFilteredData(idealForData, brandFilter);
  const sizeFilteredData = getSizeFilteredData(brandFilterData, sizeFilter);
  const finalData = sizeFilteredData;
  return (
    <div className="product-page flex f-wrap jc ">
      {finalData.length !== 0
        ? finalData.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        : "No product in this selection, change the filters"}
    </div>
  );
};
