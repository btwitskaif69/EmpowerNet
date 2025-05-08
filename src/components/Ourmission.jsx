import React from 'react'
import {CheckCircle, Users, Globe } from "lucide-react"

const Ourmission = () => {
  return (
    <div className="display flex flex-col items-center justify-center">
    <section id="mission" className="py-20 bg-white">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600">
          EmpowerNet is dedicated to advancing Sustainable Development Goals 5 and 10 by creating programs and
          initiatives that promote gender equality and reduce inequalities worldwide.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-purple-50 p-8 rounded-xl">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold mb-4">SDG 5: Gender Equality</h3>
          <p className="text-gray-600 mb-6">
            We work to end all forms of discrimination against women and girls, eliminate violence, ensure full
            participation in leadership, and provide equal rights to economic resources.
          </p>
          <ul className="space-y-3">
            {["Women's empowerment programs", "Gender-based violence prevention", "Equal pay initiatives"].map(
              (item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="bg-orange-50 p-8 rounded-xl">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
            <Globe className="h-6 w-6 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold mb-4">SDG 10: Reduced Inequalities</h3>
          <p className="text-gray-600 mb-6">
            We strive to reduce inequality within and among countries by promoting social, economic, and political
            inclusion of all, irrespective of age, sex, disability, race, ethnicity, or economic status.
          </p>
          <ul className="space-y-3">
            {[
              "Inclusive education programs",
              "Economic opportunity expansion",
              "Policy advocacy for marginalized groups",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Ourmission