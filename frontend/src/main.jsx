// import React from "react";
// import ReactDom from "react-dom/client";
// import App from "./App";
// import "./index.css";

// export const Context = createContext({isAuthenticated:false})

// const AppWrapper =()=>{
//   const [isAuthenticated,setIsAuthenticated] = useState(false);
//   const [user,setUser] = useState({});

//   return(
//     <ContextProvider value ={{isAuthenticated,setIsAuthenticated,user,setUser}} >
// <App />
//     </ContextProvider>
//   )
// };
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AppWrapper/>
//   </StrictMode>,
// )

import React, { createContext, useState, StrictMode } from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import
import App from "./App";
import "./App.css";

// ✅ Create context properly
export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    // ✅ Use `Context.Provider` instead of `ContextProvider`
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      <App />
    </Context.Provider>
  );
};

// ✅ Use `ReactDOM.createRoot` correctly
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
