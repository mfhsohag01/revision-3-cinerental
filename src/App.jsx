import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { CartReducer, initialState } from "./reducers/CartReducer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
