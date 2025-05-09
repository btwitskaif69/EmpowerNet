import React from 'react'
import { ArrowRight } from 'lucide-react'; // Assuming you have lucide-react installed for icons

const Initiative = () => {
  return (
    <div className=''>
        <section id="initiatives" className="display flex flex-col items-center justify-center py-20 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Key Initiatives</h2>
            <p className="text-lg text-gray-600">
              Through targeted programs and partnerships, we're creating lasting change in communities around the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Women in Leadership",
                description:
                  "Mentorship and training programs to increase women's representation in leadership positions across all sectors.",
                image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Equal Access Education",
                description:
                  "Ensuring quality education is accessible to all, regardless of socioeconomic background or geographic location.",
                image: "https://images.unsplash.com/photo-1551241681-2aae145af5df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Economic Empowerment",
                description:
                  "Microfinance, skills training, and entrepreneurship support for marginalized communities.",
                image: "https://images.unsplash.com/photo-1741437137483-eebede95a144?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((initiative, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={initiative.image || "/placeholder.svg"}
                  alt={initiative.title}
                  className="w-full h-70 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  <a href="#" className="inline-flex items-center text-purple-600 font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Initiative