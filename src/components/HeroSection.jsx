import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
    {/* Grid Background with customization */}
    <div
      className={cn(
        "absolute inset-0",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
      )}
    />

    {/* Purple and orange gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>

    {/* Radial gradient for the container to give a faded look */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

    {/* Floating SDG icons */}
    <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center animate-float-slow">
      <span className="font-bold text-purple-600">SDG 5</span>
    </div>
    <div className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center animate-float">
      <span className="font-bold text-orange-600">SDG 10</span>
    </div>

    {/* Hero content */}
    <div className="relative z-10 container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full border border-purple-200 bg-purple-50 text-purple-800">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
          </span>
          Sustainable Development Goals 5 & 10
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="block">Empowering</span>
          <span className="bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
            Equality & Inclusion
          </span>
          <span className="block">For Everyone</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10">
          Building a world where everyone has equal opportunities and rights, regardless of gender, race, or
          background. Join our mission to create lasting change.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-orange-600 text-white hover:opacity-90 transition-all"
          >
            Join Our Movement
          </Button>
          <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Stats highlight */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { number: "50K+", label: "Lives Impacted" },
            { number: "120+", label: "Communities" },
            { number: "85%", label: "Success Rate" },
            { number: "30+", label: "Countries" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
  </div>
  )
}

export default HeroSection