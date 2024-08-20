import axios from "axios";
import qs from "qs";

// 로그인 함수
export const welstoryLogin = async () => {
  const username = "vision981111";
  const password = "Podowon069!";
  const url = "/api/login";

  try {
    const params = qs.stringify({
      username,
      password,
      "remember-me": true,
    });

    const response = await axios.post(`${url}?${params}`);
  } catch (error) {}
};

export const fetchMenu = async (menuMealType, restaurantCode, menuDt) => {
  const url = "/api/api/meal";

  try {
    const params = qs.stringify({
      menuMealType,
      restaurantCode,
      menuDt,
    });

    const response = await axios.get(`${url}?${params}`, {
      withCredentials: true,
    });

    console.log("메뉴", response);
    return response;
  } catch (error) {}
};
