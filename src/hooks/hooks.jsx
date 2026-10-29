import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { signup, signin, signout } from "../redux/store/slices/authSlice";
import { toggleTheme } from "../redux/store/slices/themeSlice";

/** Custom hook to access authentication state and actions.
 * Usage:
 *   const { user, isAuthenticated, signup, signin, signout } = useAuth(); */
export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return {
    user,
    isAuthenticated,
    signup: (data) => dispatch(signup(data)),
    signin: (data) => dispatch(signin(data)),
    signout: () => dispatch(signout()),
  };
};

export const useTheme = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.theme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return {
    isDark,
    toggleTheme: () => dispatch(toggleTheme()),
  };
};
