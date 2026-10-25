import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./pages/layout";
import SignIn from "./pages/auth/sign_in/page";
import SignUp from "./pages/auth/sign_up/page";
import AuthLayout from "./pages/auth/layout";
import Homepage from "./pages/Home/page";
import ProfilePage from "./pages/profile/page";
import Leaderboard from "./pages/Leaderboard/page";
import ProtectedRoute from "./components/ProtectedRoute";
import UnderConstruction from "./pages/UnderConstruction/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign_in" element={<SignIn />} />
          <Route path="sign_up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
