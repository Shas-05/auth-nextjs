"use client";
import Link from "next/link";
import React,{useEffect} from "react";
import { useRouter } from "next/navigation";
import  axios  from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    // this method talks to the database
    try{
      setLoading(true);
      const response = await axios.post("/api/user/login", user);
      console.log("Login successful", response.data);
      router.push("/profile");
    }catch(error:any){
      console.log("Login failed", error.message);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

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
