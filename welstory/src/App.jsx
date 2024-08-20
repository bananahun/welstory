import React, { useEffect } from "react";
import { welstoryLogin, fetchMenu } from "./api";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await welstoryLogin();
        try {
          const menuData = await fetchMenu(2, "REST000595", 20240822);
          console.log("삼전 점심 메뉴다", menuData.data.data.mealList);
        } catch (error) {}
      } catch (error) {}
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default App;
