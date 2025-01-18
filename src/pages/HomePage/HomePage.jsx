import React from "react";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import Promo from "../../components/Promo/Promo";
import FirstOrder from "../../components/FirstOrder/FirstOrder";
import SaleList from "../../components/SaleList/SaleList";
const HomePage = () => {
  return (
    <div>
      <Promo />
      <CategoriesList />
      <FirstOrder />
      <SaleList />
    </div>
  );
};

export default HomePage;
