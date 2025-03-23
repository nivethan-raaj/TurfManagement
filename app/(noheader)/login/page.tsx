"use client";
import { useState, useEffect } from "react";
import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Hardcoded users for demo purposes
const USERS = [
  { email: "nivethan@gmail.com", password: "password1", name: "User One" },
  { email: "user2@example.com", password: "password2", name: "User Two" },
];

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/book");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Check if user exists
    const user = USERS.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Store user info in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: user.email,
          name: user.name,
        })
      );

      // Redirect to book page
      router.push("/book");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left side */}
      <div className="w-1/2 bg-primary relative">
        <div className="absolute top-8 left-8">
          <img
            src="/turfmanagement.jpg"
            alt="Company Logo"
            className="h-20 w-20 rounded-sm"
          />
        </div>
        <div className="absolute bottom-8 left-8">
          <h2 className="text-2xl font-bold text-white dark:text-black">
            TURF MASTER
          </h2>
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 flex items-center justify-center dark:bg-black dark:text-white">
        <div className="w-full max-w-md space-y-8 px-4">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-white">
              Please sign in to your account
            </p>
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="pr-10"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 dark:text-white"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full hover:scale-105 hover:text-blue-100"
            >
              Sign in
            </Button>
          </form>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-white">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-medium text-primary hover:text-primary/80"
            >
              Sign up
            </a>
          </p>

          <div className="mt-4 text-center text-sm text-gray-500">
            <p>Demo accounts:</p>
            <p>Email: user1@example.com / Password: password1</p>
            <p>Email: user2@example.com / Password: password2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
