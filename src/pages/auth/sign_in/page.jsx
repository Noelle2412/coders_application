import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { useAuth } from "../../../hooks/hooks";
import users from "../../../api/db/users.json";

const signInSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, signin } = useAuth();
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  // Redirect if user is already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const destination = location.state?.from?.pathname || "/";
      navigate(destination, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const onSubmit = (data) => {
    setAuthError("");
    const storedUsers = JSON.parse(
      localStorage.getItem("registered_users") || "[]",
    );
    const allUsers = [...users, ...storedUsers];

    const matchedUser = allUsers.find(
      (user) =>
        user.email.toLowerCase() === data.email.toLowerCase() &&
        String(user.password) === String(data.password),
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
      <h1 className="text-plum text-3xl py-8"> Join Coders Now!</h1>

      {authError && (
        <div className="w-full px-8">
          <p className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded text-sm text-center">
            {authError}
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-4 w-full px-8">
        <input
          className="bg-coding text-white px-4 py-6 w-full border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-plum"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <ErrorMessage message={errors.email?.message} />

        <input
          className="bg-coding text-white px-4 py-6 w-full border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-plum"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <ErrorMessage message={errors.password?.message} />

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
