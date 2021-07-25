import {
  CASIO,
  CHILDREN,
  L,
  M,
  MEN,
  NIKE,
  S,
  TIMEX,
  WOMEN
} from "../context/actions";

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
    return data.filter((data) => data.size === "s");
  } else if (filterType === M) {
    return data.filter((data) => data.size === "m");
  } else if (filterType === L) {
    return data.filter((data) => data.size === "l");
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
