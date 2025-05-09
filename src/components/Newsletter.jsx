import React from 'react'
import { Button } from "@/components/ui/button"


const Newsletter = () => {
  return (
    <div className='display flex flex-col items-center justify-center px-4'>
        <section className="py-16 bg-white ">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-600">
                Subscribe to our newsletter for the latest updates on our initiatives and impact.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <Button className="bg-purple-600 text-white">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsletter