"use client";
import React from "react";
import axios from "axios";
import links from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/user/logout");
      router.push("/login");
    } catch (error: any) {
      console.log("Logout failed", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Welcome to your profile page!</p>
      <hr />
      <button
        onClick={logout}
        className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-200"
      >
        Logout
      </button>
    </div>
  );
}
