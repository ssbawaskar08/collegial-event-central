
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", rollNo);
    // Add login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Sign in to EventSync
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Access your college event dashboard
          </p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow-lg rounded-xl border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="roll_no" className="text-sm font-medium text-gray-700">
                Roll Number
              </Label>
              <Input
                id="roll_no"
                name="roll_no"
                type="text"
                placeholder="Roll Number"
                required
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Sign in
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Contact your college administrator
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
