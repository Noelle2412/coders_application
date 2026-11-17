import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { useAuth } from "../../../hooks/hooks";
import users from "../../../api/db/users.json";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, signin } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");

  // Redirect if user is already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const destination = location.state?.from?.pathname || "/";
      navigate(destination, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Please enter an email address";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthError("");

    if (!validate()) {
      return;
    }

    const storedUsers = JSON.parse(
      localStorage.getItem("registered_users") || "[]",
    );
    const allUsers = [...users, ...storedUsers];

    const matchedUser = allUsers.find(
      (user) =>
        user.email.toLowerCase() === formData.email.trim().toLowerCase() &&
        String(user.password) === String(formData.password),
    );

    if (matchedUser) {
      signin(matchedUser);
      const destination = location.state?.from?.pathname || "/";
      navigate(destination, { replace: true });
    } else {
      setAuthError("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <h1 className="text-plum text-3xl py-8"> Join Managers Now!</h1>

      {authError && (
        <div className="w-full px-8">
          <p className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded text-sm text-center">
            {authError}
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-4 w-full px-8">
        <input
          className="bg-coding text-white px-4 py-6 w-full border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-plum"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <ErrorMessage message={errors.email} />

        <input
          className="bg-coding text-white px-4 py-6 w-full border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-plum"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <ErrorMessage message={errors.password} />

        <button
          type="submit"
          className="bg-[#3B82F7] hover:bg-blue-600 text-white rounded-lg px-4 py-6 w-full border-0 font-medium transition cursor-pointer">
          Sign In
        </button>
      </form>
      <p className="text-sm text-black">
        New to CLA?{" "}
        <Link to="/auth/sign_up" className="text-[#3B82F7] hover:underline">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default SignIn;
