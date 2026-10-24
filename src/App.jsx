import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./pages/layout";
import SignIn from "./pages/(auth)/sign_in/page";
import SignUp from "./pages/(auth)/sign_up/page";
import AuthLayout from "./pages/(auth)/layout";
import Homepage from "./pages/Home/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Homepage />} />
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
