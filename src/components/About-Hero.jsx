import React from 'react'
import { Button } from "@/components/ui/button"


const AboutHero = () => {
  return (
              <section className="relative py-20 md:py-28 overflow-hidden display flex items-center justify-center px-4">
        <div className="absolute inset-0"></div>
        <div className="absolute top-0 left-0 right-0"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                EmpowerNet
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our journey, mission, and the passionate team behind our global efforts to promote gender
              equality and reduce inequalities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">Our Impact</Button>
              <Button variant="outline" className="border-purple-600 text-purple-600">
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutHero