import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { ProductPage } from "../productpage/ProductPage";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <ProductPage />
      </div>
    </div>
  );
};
