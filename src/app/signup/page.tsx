"use client";
import Link from "next/link";
import React, { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { set } from "mongoose";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onSignup = async () => {
    // this method talks to the database
    try {
      setLoading(true);
      const response = await axios.post("/api/user/signup", user);
      console.log("Signup success", response.data);
      toast.success("Signup Successful");
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center border border-gray-300 rounded-xl p-6">
        <h1 className="mb-2 text-center text-3xl font-bold text-white-800">
          {loading ? "Processing..." : "Signup"}
        </h1>
        <hr />
        <label
          htmlFor="username"
          className="mb-1 block text-sm font-1xl text-white-700"
        >
          Username
        </label>
        <input
          className="w-25% rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />

        <label htmlFor="email">Email</label>
        <input
          className="w-25% rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="w-25% rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button
          onClick={onSignup}
          className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          {buttonDisabled ? "No Signup" : "Signup"}
        </button>
        <Link
          href="/login"
          className="mt-4 text-sm text-blue-500 hover:underline"
        >
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}
