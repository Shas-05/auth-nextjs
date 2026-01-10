"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    // this method talks to the database
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center border border-gray-300 rounded-xl p-6">
        <h1 className="mb-2 text-center text-3xl font-bold text-white-800">
          Login
        </h1>
        <hr />

        <label htmlFor="email">Email</label>
        <input
          className="w-25% rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <hr />

        <label htmlFor="password">Password</label>
        <input
          className="w-25% rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <hr />
        
        <button
          onClick={onLogin}
          className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          Login Here
        </button>
        <Link
          href="/signup"
          className="mt-4 text-sm text-blue-500 hover:underline"
        >
          Visit SignUp Page
        </Link>
      </div>
    </div>
  );
}
