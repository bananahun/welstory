import React, { useState, useEffect } from "react";
import { welstoryLogin, fetchMenu } from "./api";

const App = () => {
  const [menu, setMenu] = useState([]); // 상태로 menu를 관리

  useEffect(() => {
    const fetchData = async () => {
      try {
        await welstoryLogin(); // 로그인 호출
        try {
          const menuData = await fetchMenu(2, "REST000595", 20240822); // 메뉴 데이터 가져오기
          setMenu(menuData.data.data.mealList); // 상태 업데이트
          console.log(menuData.data.data.mealList);
          console.log(menu);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // 데이터 가져오기 실행
  }, []);

  return (
    <div>
      <h1>삼전 점심 메뉴</h1>
      {menu ? (
        <ul>
          {menu.map((meal, index) => (
            <li key={index}>{meal.name}</li>
          ))}
        </ul>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
};

export default App;
