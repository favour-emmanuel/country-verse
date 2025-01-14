import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { selectTheme, setTheme } from "./Redux/slice/themeSlice";
import HomePage from "./pages/HomePage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const theme = localStorage.getItem("myapptheme");
    if (theme) {
      //@ts-ignore
      dispatch(setTheme({ theme: theme }));
    } else {
      dispatch(setTheme({ theme: "Dark" }));
    }
  }, []);

  const theme = useSelector(selectTheme);

  return (
    <div
      className={`${theme?.theme === "Dark" ? "bg-appDark" : "bg-appLight"} `}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
