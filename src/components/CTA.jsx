import React from 'react'
import { Button } from "@/components/ui/button"
const CTA = () => {
  return (
    <div className='display flex flex-col items-center justify-center   bg-purple-50'>
         <section className="py-20 container-full">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Movement for Equality</h2>
            <p className="text-lg text-gray-600 mb-8">
              Together, we can create a more equitable world. Donate, volunteer, or partner with us today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-6 text-lg">
                Donate Now
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 px-8 py-6 text-lg">
                Volunteer
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-600 px-8 py-6 text-lg">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CTA