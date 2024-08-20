// import React, { useEffect } from "react";
// import api from "./api";

// const App = () => {
//   useEffect(() => {
//     const { welstoryLogin, welstoryMenu } = api;

//     const performLogin = async () => {
//       try {
//         const { jsessionId } = await welstoryLogin();
//         const menuData = await welstoryMenu(
//           jsessionId,
//           2,
//           "REST000595",
//           "20240718"
//         );
//         console.log(menuData);
//       } catch (error) {
//         console.error("Error during login or fetching menu:", error);
//       }
//     };

//     performLogin();
//   }, []);

//   return <div>Check the console for results!</div>;
// };

// export default App;
