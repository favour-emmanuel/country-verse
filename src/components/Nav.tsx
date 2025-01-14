import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../Redux/slice/themeSlice";

const Nav = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (theme?.theme === "Dark") {
      dispatch(setTheme({ theme: "Light" }));

      localStorage.setItem("myapptheme", "Light");
    } else {
      dispatch(setTheme({ theme: "Dark" }));
      localStorage.setItem("myapptheme", "Dark");
    }
  };

  return (
    <div
      className={`px-12 py-7 shadow-md flex justify-between ${
        theme?.theme === "Dark"
          ? "bg-[#2b3945] text-white"
          : "bg-appLight text-[#2b3945]"
      } `}
    >
      <h3 className="lg:text-lg text-base font-bold">Where in the world?</h3>
      <button onClick={changeTheme} className="text-xl">
        {theme?.theme === "Light" ? (
          <span>
            <Icon icon="ph:sun" />
          </span>
        ) : (
          <span>
            <Icon icon="ri:moon-fill" />
          </span>
        )}
      </button>
    </div>
  );
};

export default Nav;
