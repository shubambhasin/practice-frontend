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
} from "../context/actions";

export const getSortedData = (data, sortType) => {
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

export const getIdealForFilteredData = (data, filterType) => {
  if (filterType === MEN) {
    return data.filter((data) => data.idealFor === "men");
  } else if (filterType === WOMEN) {
    return data.filter((data) => data.idealFor === "women");
  } else if (filterType === CHILDREN) {
    return data.filter((data) => data.idealFor === "children");
  } else {
    return data;
  }
};
export const getSizeFilteredData = (data, filterType) => {
  if (filterType === S) {
    return data.filter((data) => data.size.toLowerCase() === "s");
  } else if (filterType === M) {
    return data.filter((data) => data.size.toLowerCase() === "m");
  } else if (filterType === L) {
    return data.filter((data) => data.size.toLowerCase() === "l");
  } else {
    return data;
  }
};

export const getBrandFilteredData = (data, filterType) => {
  if (filterType === NIKE) {
    return data.filter((data) => data.brand.toLowerCase() === "nike");
  } else if (filterType === CASIO) {
    return data.filter((data) => data.brand.toLowerCase() === "casio");
  } else if (filterType === TIMEX) {
    return data.filter((data) => data.brand.toLowerCase() === "timex");
  } else {
    return data;
  }
};
