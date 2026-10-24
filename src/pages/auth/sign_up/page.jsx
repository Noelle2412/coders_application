import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ErrorMessage } from "../../../components/ErrorMessage.jsx";
import { useAuth } from "../../../hooks/hooks.js";

const signUpSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const { isAuthenticated, signup } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = (data) => {
    signup(data);
    navigate("/", { replace: true });
  };

  return (
    <>
      <h1 className="text-plum text-3xl py-8"> Join Coders Now!</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-4 w-full px-8">
        <input
          className="bg-coding text-white px-4 py-6 w-full border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-plum"
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />
        <ErrorMessage message={errors.firstName?.message} />

        <input
          className="bg-coding text-white px-4 py-6 w-full border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-plum"
          type="text"
          placeholder="Last Name"
          {...register("lastName")}
        />
        <ErrorMessage message={errors.lastName?.message} />

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
          Sign up
        </button>
      </form>
      <p className="text-sm">
        Already have an account?{" "}
        <Link to="/auth/sign_in" className="text-[#3B82F7] hover:underline">
          Login
        </Link>
      </p>
    </>
  );
};

export default SignUp;
