import { useDispatch, useSelector } from "react-redux";
import { signup, signin, signout } from "./slices/authSlice";

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

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
