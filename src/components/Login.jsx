import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const LogIn = () => {
  return (
    <div className="relative min-h-[90vh] w-full flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:50px_50px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_top,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>

      {/* Radial Mask */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black"></div>

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-xl shadow-lg border border-purple-200">
        <h2 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300 mb-6">
          Welcome Back
        </h2>
        <form className="space-y-4">
          <Input type="email" placeholder="Email Address" required />
          <Input type="password" placeholder="Password" required />

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-orange-600 text-white hover:opacity-90 transition-all"
          >
            Log In
          </Button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4 dark:text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="text-purple-600 font-medium hover:underline cursor-pointer">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}

export default LogIn
