"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Users,
  Heart,
  Earth,
  Award,
  BookOpen,
  Target,
  Clock,
  Briefcase,
  Building,
  CheckCircle,
  ChevronRight,
  Calendar,
  MapPin,
} from "lucide-react"
import AboutHero from "@/components/About-Hero"
import CTA from "@/components/CTA"
import { Globe } from "@/components/magicui/globe";
import logo from "@/assets/logo.svg" // update with actual relative path

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission")

  return (
    <>
    <AboutHero/>
      {/* Hero Section */}
      {/* Mission, Vision, Values Tabs */}
      <section className="py-16 bg-white dispaly flex items-center justify-center  px-4">
        <div className="container">
          <Tabs defaultValue="mission" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="mission" className="text-sm md:text-base">
                  Mission
                </TabsTrigger>
                <TabsTrigger value="vision" className="text-sm md:text-base">
                  Vision
                </TabsTrigger>
                <TabsTrigger value="values" className="text-sm md:text-base">
                  Values
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="mission" className="mt-0">
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 text-center">
                  EmpowerNet is dedicated to creating a world where everyone has equal opportunities and rights,
                  regardless of gender, race, or background. We work to advance Sustainable Development Goals 5 and 10
                  by implementing programs that address systemic inequalities and empower marginalized communities.
                </p>
                <p className="text-lg text-gray-600 text-center">
                  Through education, advocacy, economic empowerment, and policy reform, we strive to dismantle barriers
                  to equality and create lasting change in communities around the world. Our collaborative approach
                  brings together diverse stakeholders to develop sustainable solutions that promote inclusivity and
                  social justice.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="vision" className="mt-0">
              <div className="bg-white rounded-xl p-8 ">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                    <Earth className="h-8 w-8 text-orange-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-center mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-6 text-center">
                  We envision a world where gender equality is the norm, not the exception, and where socioeconomic
                  disparities are significantly reduced. A world where every individual has the opportunity to reach
                  their full potential, regardless of their identity or circumstances.
                </p>
                <p className="text-lg text-gray-600 text-center">
                  By 2030, we aim to have contributed significantly to the achievement of SDGs 5 and 10, helping to
                  create societies where women and girls have equal rights and opportunities, and where economic,
                  social, and political inclusion is a reality for all. We see a future where diversity is celebrated,
                  and equality is embedded in institutions, policies, and cultural norms.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="values" className="mt-0">
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-pink-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-center mb-6">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Inclusivity",
                      description: "We embrace diversity and ensure all voices are heard and valued.",
                      icon: <Users className="h-6 w-6 text-purple-600" />,
                    },
                    {
                      title: "Integrity",
                      description: "We operate with transparency, accountability, and ethical standards.",
                      icon: <CheckCircle className="h-6 w-6 text-orange-600" />,
                    },
                    {
                      title: "Innovation",
                      description: "We seek creative solutions to complex challenges.",
                      icon: <BookOpen className="h-6 w-6 text-pink-600" />,
                    },
                    {
                      title: "Impact",
                      description: "We measure our success by the tangible difference we make.",
                      icon: <Award className="h-6 w-6 text-blue-600" />,
                    },
                  ].map((value, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1">{value.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 bg-gray-50 display flex items-center justify-center px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to global impact, explore the key milestones that have shaped EmpowerNet's
                evolution.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-orange-500"></div>

              {/* Timeline events */}
              {[
                {
                  year: "2010",
                  title: "The Beginning",
                  description:
                    "EmpowerNet was founded by a group of activists and development professionals committed to addressing gender inequality in their communities.",
                  icon: <Clock className="h-6 w-6" />,
                  color: "bg-purple-100 text-purple-600",
                },
                {
                  year: "2013",
                  title: "First Major Project",
                  description:
                    "Launched our flagship Women's Leadership Program in 5 countries, empowering over 1,000 women to take on leadership roles in their communities.",
                  icon: <Award className="h-6 w-6" />,
                  color: "bg-pink-100 text-pink-600",
                },
                {
                  year: "2015",
                  title: "SDG Alignment",
                  description:
                    "Aligned our strategy with the newly adopted Sustainable Development Goals, with a focus on SDG 5 and SDG 10.",
                  icon: <Target className="h-6 w-6" />,
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  year: "2018",
                  title: "Global Expansion",
                  description:
                    "Expanded operations to 20+ countries and formed strategic partnerships with international organizations and governments.",
                  icon: <Earth className="h-6 w-6" />,
                  color: "bg-green-100 text-green-600",
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  description:
                    "Launched digital platforms to extend our reach and provide resources to underserved communities during the global pandemic.",
                  icon: <Briefcase className="h-6 w-6" />,
                  color: "bg-indigo-100 text-indigo-600",
                },
                {
                  year: "2023",
                  title: "Impact Milestone",
                  description:
                    "Reached over 50,000 direct beneficiaries and influenced policy changes in 15 countries to promote gender equality and reduce inequalities.",
                  icon: <CheckCircle className="h-6 w-6" />,
                  color: "bg-orange-100 text-orange-600",
                },
              ].map((event, i) => (
                <div
                  key={i}
                  className={`relative flex items-center mb-12  ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-purple-500"></div>

                  {/* Content card */}
                  <div className={`w-5/12 ${i % 2 === 0 ? " text-right" : " text-left"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <div className="flex items-center gap-2 mb-2 text-lg font-bold text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                      <div className={`inline-flex items-center justify-center p-2 rounded-full mt-4 ${event.color}`}>
                        {event.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white display flex items-center justify-center px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We take a holistic, evidence-based approach to addressing complex challenges related to gender equality
                and inequality reduction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">SDG 5: Gender Equality</h3>
                <p className="text-gray-700 mb-6">
                  Our approach to advancing gender equality focuses on transforming power dynamics and social norms
                  while creating enabling environments for women and girls to thrive.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      title: "Women's Leadership",
                      content:
                        "We provide training, mentorship, and Networking opportunities to help women develop leadership skills and advance in decision-making positions across sectors.",
                    },
                    {
                      title: "Economic Empowerment",
                      content:
                        "Through financial literacy training, entrepreneurship support, and advocacy for equal pay and workplace policies, we help women achieve economic independence.",
                    },
                    {
                      title: "Gender-Based Violence Prevention",
                      content:
                        "We implement community-based programs to change attitudes and behaviors, while supporting survivors through comprehensive services and legal advocacy.",
                    },
                    {
                      title: "Policy Advocacy",
                      content:
                        "We work with governments and institutions to develop and implement gender-responsive policies and legislation that protect women's rights and promote equality.",
                    },
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`sdg5-item-${i}`}>
                      <AccordionTrigger className="text-left font-medium">{item.title}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{item.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="bg-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-800">SDG 10: Reduced Inequalities</h3>
                <p className="text-gray-700 mb-6">
                  Our approach to reducing inequalities addresses the systemic barriers that prevent marginalized groups
                  from participating fully in economic, social, and political life.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      title: "Inclusive Education",
                      content:
                        "We develop and support educational programs that reach marginalized communities, focusing on quality, accessibility, and relevance to diverse learners.",
                    },
                    {
                      title: "Digital Inclusion",
                      content:
                        "We bridge the digital divide by providing technology access, skills training, and creating digital platforms that serve underrepresented populations.",
                    },
                    {
                      title: "Social Protection",
                      content:
                        "We advocate for and help implement social protection systems that provide safety nets for vulnerable populations and pathways out of poverty.",
                    },
                    {
                      title: "Inclusive Governance",
                      content:
                        "We promote participatory decision-making processes that ensure all community members have a voice in matters that affect their lives.",
                    },
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`sdg10-item-${i}`}>
                      <AccordionTrigger className="text-left font-medium">{item.title}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{item.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 display flex items-center justify-center bg-gray-50 px-4">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated professionals guiding our mission to create a more equitable world.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Maya Johnson",
                  role: "Executive Director",
                  bio: "With over 20 years of experience in international development, Dr. Johnson has led initiatives across 30+ countries focused on gender equality and social inclusion.",
                  image: "https://images.unsplash.com/photo-1590649880765-91b1956b8276?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Carlos Mendez",
                  role: "Chief Operations Officer",
                  bio: "Carlos brings extensive experience in organizational management and strategic planning from his previous work with the UN and various international NGOs.",
                  image: "https://images.unsplash.com/photo-1638727295415-286409421143?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Aisha Nkosi",
                  role: "Director of Programs",
                  bio: "Aisha oversees our program portfolio, ensuring that our interventions are evidence-based, culturally appropriate, and designed for maximum impact.",
                  image: "https://images.unsplash.com/photo-1714976694005-23cc8cea737e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Dr. Raj Patel",
                  role: "Research Director",
                  bio: "Dr. Patel leads our research initiatives, developing methodologies to measure impact and generating evidence to inform our programs and advocacy.",
                  image: "https://images.unsplash.com/photo-1616851273103-5f0ec44e546f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD",
                },
                {
                  name: "Sarah Kim",
                  role: "Partnerships Director",
                  bio: "Sarah cultivates relationships with donors, governments, and other stakeholders to expand our reach and enhance our collective impact.",
                  image: "https://images.unsplash.com/photo-1659353212171-dfddcc9e7c98?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "James Okafor",
                  role: "Director of Advocacy",
                  bio: "James leads our policy advocacy work, engaging with decision-makers at local, national, and international levels to promote systemic change.",
                  image: "https://images.unsplash.com/photo-1702677853139-6198fd439a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ].map((member, i) => (
                <Card key={i} className="overflow-hidden py-0">
                  <div className="aspect-square relative flex items-center justify-center bg-gray-200">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full filter grayscale"
                      style={{ maxWidth: 400, maxHeight: 400 }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-white display flex items-center justify-center px-4">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Presence</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                EmpowerNet operates in over 30 countries across 5 continents, adapting our approach to local contexts
                while maintaining our core mission.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden h-[400px] mb-8">
              {/* This would be replaced with an actual interactive map component */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <Globe />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  region: "Africa",
                  countries: ["Kenya", "Nigeria", "South Africa", "Ghana", "Ethiopia", "Rwanda", "Tanzania"],
                  flagship: "Women's Economic Empowerment Initiative",
                },
                {
                  region: "Asia",
                  countries: ["India", "Bangladesh", "Philippines", "Indonesia", "Vietnam", "Nepal"],
                  flagship: "Girls' Education and Digital Literacy Program",
                },
                {
                  region: "Latin America",
                  countries: ["Brazil", "Colombia", "Mexico", "Peru", "Guatemala", "Ecuador"],
                  flagship: "Gender-Based Violence Prevention Network",
                },
              ].map((region, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-purple-600" />
                    {region.region}
                  </h3>
                  <div className="mb-4">
                    <p className="font-medium text-gray-700 mb-2">Countries:</p>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country, j) => (
                        <span key={j} className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Flagship Program:</p>
                    <p className="text-gray-600">{region.flagship}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Funders */}
      <section className="py-16 display flex items-center justify-center bg-gray-50 px-4">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners & Funders</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We collaborate with a diverse range of organizations to maximize our impact and reach.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-4 h-24 flex items-center justify-center shadow-sm">
                  <div className="w-full h-full flex items-center justify-center rounded">
                    <img src={logo} 
                    alt=""
                    width={40}
                    height={40} />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                We're grateful for the support of foundations, governments, corporations, and individual donors who make
                our work possible.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">Become a Partner</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white display flex items-center justify-center">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices of Impact</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from the individuals and communities whose lives have been transformed through our programs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "The leadership program gave me the confidence and skills to start my own business, which now employs 15 women from my community. We're not just earning income – we're changing perceptions about what women can achieve.",
                  name: "Maria Rodriguez",
                  location: "Colombia",
                  program: "Women's Leadership Program",
                  image: "https://images.unsplash.com/photo-1617336995982-be3cad51764e?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  quote:
                    "Access to education changed my life. Now I'm the first person in my family to attend university, studying engineering to help solve problems in my community. EmpowerNet's scholarship made this possible.",
                  name: "Aisha Nkosi",
                  location: "Kenya",
                  program: "Education Access Initiative",
                  image: "https://images.unsplash.com/photo-1623362004345-ec72ea0144be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  quote:
                    "The digital skills training opened up a world of opportunities. I now work remotely as a web developer, earning three times what I made before, while being able to care for my family.",
                  name: "Raj Patel",
                  location: "India",
                  program: "Digital Inclusion Project",
                  image: "https://images.unsplash.com/photo-1732829094586-9bababf411a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  quote:
                    "As a community leader, the inclusive governance training helped me ensure that marginalized voices are heard in local decision-making. We've seen concrete improvements in service delivery as a result.",
                  name: "James Okafor",
                  location: "Nigeria",
                  program: "Inclusive Governance Initiative",
                  image: "https://images.unsplash.com/photo-1723221907119-397c26c8f580?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-start gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                      style={{ minWidth: 64, minHeight: 64 }}
                    />
                    <div>
                      <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                      <div className="text-sm text-purple-600 mt-1">{testimonial.program}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Accountability */}
      <section className="py-16 display flex items-center justify-center bg-gray-50 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparency & Accountability</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are committed to responsible stewardship of resources and maintaining the highest standards of
                integrity in all our operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Financial Transparency",
                  description:
                    "We publish detailed annual reports and financial statements, ensuring donors and stakeholders can see how funds are allocated and used.",
                  icon: <Building className="h-8 w-8 text-purple-600" />,
                },
                {
                  title: "Impact Measurement",
                  description:
                    "We use robust monitoring and evaluation frameworks to measure our impact, learn from our experiences, and continuously improve our programs.",
                  icon: <Target className="h-8 w-8 text-orange-600" />,
                },
                {
                  title: "Ethical Standards",
                  description:
                    "We adhere to strict ethical guidelines in all our operations, with zero tolerance for corruption, discrimination, or exploitation.",
                  icon: <Award className="h-8 w-8 text-pink-600" />,
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-full bg-gray-100">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="border-purple-600 text-purple-600">
                View Annual Reports <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>      
          {/* Join Us CTA */}
          <CTA/>
    </>
  )
}
