"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Users,
  BookOpen,
  ChevronRight,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Lightbulb,
  LineChart,
  MessageSquare,
  Target,
  Heart,
  MapPin,
  School,
  Laptop,
  Award,
  Building,
  PenTool,
  Wifi,
  Home,
  DollarSign,
  Languages,
  Smartphone,
} from "lucide-react"
import CTA from "./CTA"

export default function EqualAccessEducationPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden display flex items-center justify-center">
        <div className="absolute inset-0 0"></div>
        <div className="absolute top-0 left-0 right-0 h-px "></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 mb-6">
                SDG 10: Reduced Inequalities
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Equal Access{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                  Education
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ensuring quality education is accessible to all, regardless of socioeconomic background or geographic
                location.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">Support Our Work</Button>
                <Button variant="outline" className="border-purple-600 text-purple-600">
                  Find Programs
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 opacity-30 blur"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551241681-2aae145af5df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Students from diverse backgrounds learning together"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-white display flex items-center justify-center">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "250,000+", label: "Students Reached", icon: <Users className="h-6 w-6" /> },
                { number: "1,500+", label: "Schools Supported", icon: <School className="h-6 w-6" /> },
                { number: "45+", label: "Countries", icon: <Globe className="h-6 w-6" /> },
                { number: "92%", label: "Completion Rate", icon: <GraduationCap className="h-6 w-6" /> },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <div className="text-purple-600">{stat.icon}</div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Content Tabs */}
      <section className="py-16 bg-gray-50 display flex items-center justify-center">
        <div className="container">
          <Tabs defaultValue="overview" className="max-w-5xl mx-auto" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="overview" className="text-sm md:text-base">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="programs" className="text-sm md:text-base">
                  Programs
                </TabsTrigger>
                <TabsTrigger value="approach" className="text-sm md:text-base">
                  Approach
                </TabsTrigger>
                <TabsTrigger value="impact" className="text-sm md:text-base">
                  Impact
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Initiative Overview</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    The Equal Access Education initiative is EmpowerNet's comprehensive program designed to break down
                    barriers to quality education. We believe that education is a fundamental right and a powerful tool
                    for reducing inequalities and creating opportunities for all.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Through a multi-faceted approach that combines direct educational support, infrastructure
                    development, teacher training, and advocacy, we work to ensure that quality education is accessible
                    to everyone, regardless of their socioeconomic background, geographic location, gender, or ability.
                  </p>
                  <div className="space-y-4 mt-8">
                    <h3 className="text-xl font-bold">Key Objectives</h3>
                    <ul className="space-y-3">
                      {[
                        "Increase access to quality education for marginalized and underserved communities",
                        "Reduce dropout rates and improve educational outcomes",
                        "Bridge the digital divide in education",
                        "Develop inclusive educational environments that accommodate diverse learning needs",
                        "Advocate for policies that promote educational equity and inclusion",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1 text-purple-600">
                            <Target className="h-5 w-5" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Barriers We Address</h3>
                    <p className="text-gray-600 mb-4">
                      Our initiative tackles the key barriers that prevent equal access to quality education:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Economic Barriers",
                          description:
                            "Financial constraints that prevent families from affording school fees, supplies, and related costs",
                          icon: <DollarSign className="h-5 w-5 text-orange-500" />,
                        },
                        {
                          title: "Geographic Barriers",
                          description:
                            "Physical distance to schools and lack of educational institutions in remote areas",
                          icon: <MapPin className="h-5 w-5 text-orange-500" />,
                        },
                        {
                          title: "Digital Divide",
                          description:
                            "Limited access to technology, internet connectivity, and digital learning resources",
                          icon: <Laptop className="h-5 w-5 text-orange-500" />,
                        },
                        {
                          title: "Social & Cultural Barriers",
                          description:
                            "Discrimination, gender bias, and cultural norms that limit educational opportunities",
                          icon: <Users className="h-5 w-5 text-orange-500" />,
                        },
                      ].map((barrier, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="mt-1">{barrier.icon}</div>
                          <div>
                            <h4 className="font-bold">{barrier.title}</h4>
                            <p className="text-gray-600 text-sm">{barrier.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Who We Serve</h3>
                    <p className="text-gray-600 mb-4">
                      Our programs are designed to reach those who face the greatest barriers to quality education:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {
                          group: "Low-income communities",
                          icon: <Home className="h-5 w-5 text-purple-600" />,
                        },
                        {
                          group: "Rural & remote populations",
                          icon: <MapPin className="h-5 w-5 text-purple-600" />,
                        },
                        {
                          group: "Girls & young women",
                          icon: <Users className="h-5 w-5 text-purple-600" />,
                        },
                        {
                          group: "Children with disabilities",
                          icon: <Heart className="h-5 w-5 text-purple-600" />,
                        },
                        {
                          group: "Refugee & displaced children",
                          icon: <Globe className="h-5 w-5 text-purple-600" />,
                        },
                        {
                          group: "Indigenous communities",
                          icon: <Languages className="h-5 w-5 text-purple-600" />,
                        },
                      ].map((group, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div>{group.icon}</div>
                          <span className="text-sm">{group.group}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Get Involved</h3>
                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                        Donate to Support Programs
                      </Button>
                      <Button variant="outline" className="w-full border-purple-600 text-purple-600">
                        Volunteer as a Tutor or Mentor
                      </Button>
                      <Button variant="outline" className="w-full border-orange-500 text-orange-600">
                        Partner With Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Programs Tab */}
            <TabsContent value="programs" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Our Educational Programs</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We implement a range of programs designed to address different aspects of educational access and
                    quality.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {[
                    {
                      title: "Scholarship Program",
                      description:
                        "Financial support for students from low-income backgrounds to cover school fees, supplies, uniforms, and transportation.",
                      features: [
                        "Comprehensive financial support",
                        "Academic mentorship",
                        "Career guidance",
                        "Leadership development",
                      ],
                      icon: <Award className="h-8 w-8 text-purple-600" />,
                      color: "bg-purple-50",
                    },
                    {
                      title: "Digital Learning Initiative",
                      description:
                        "Bridging the digital divide by providing technology, connectivity, and digital literacy training to underserved communities.",
                      features: [
                        "Computer labs in schools",
                        "Mobile learning devices",
                        "Internet connectivity solutions",
                        "Digital skills training",
                      ],
                      icon: <Laptop className="h-8 w-8 text-orange-600" />,
                      color: "bg-orange-50",
                    },
                    {
                      title: "Rural Education Access Program",
                      description:
                        "Bringing quality education to remote areas through innovative delivery models and infrastructure development.",
                      features: [
                        "Mobile schools",
                        "Distance learning programs",
                        "Teacher recruitment for rural areas",
                        "Community learning centers",
                      ],
                      icon: <MapPin className="h-8 w-8 text-pink-600" />,
                      color: "bg-pink-50",
                    },
                    {
                      title: "Inclusive Education Initiative",
                      description:
                        "Creating learning environments that accommodate diverse needs and abilities to ensure education for all.",
                      features: [
                        "Accessible school infrastructure",
                        "Specialized learning materials",
                        "Teacher training on inclusive methods",
                        "Individualized support services",
                      ],
                      icon: <Users className="h-8 w-8 text-blue-600" />,
                      color: "bg-blue-50",
                    },
                  ].map((program, i) => (
                    <div key={i} className={`${program.color} p-6 rounded-xl`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div>{program.icon}</div>
                        <h3 className="text-xl font-bold">{program.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <h4 className="font-medium mb-2">Key Components:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm">
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
                  <h3 className="text-2xl font-bold mb-6">Educational Resources</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Curriculum Development",
                        description:
                          "Culturally relevant, high-quality learning materials designed for diverse contexts and needs",
                        icon: <BookOpen className="h-6 w-6 text-purple-600" />,
                      },
                      {
                        title: "Teacher Training",
                        description:
                          "Professional development programs to enhance teaching quality and inclusive practices",
                        icon: <GraduationCap className="h-6 w-6 text-orange-600" />,
                      },
                      {
                        title: "Educational Technology",
                        description: "Digital tools and platforms that expand learning opportunities and engagement",
                        icon: <Smartphone className="h-6 w-6 text-pink-600" />,
                      },
                      {
                        title: "Learning Centers",
                        description:
                          "Community spaces that provide educational support, resources, and safe learning environments",
                        icon: <Building className="h-6 w-6 text-blue-600" />,
                      },
                      {
                        title: "Literacy Programs",
                        description: "Targeted interventions to develop fundamental reading and writing skills",
                        icon: <PenTool className="h-6 w-6 text-green-600" />,
                      },
                      {
                        title: "STEM Education",
                        description:
                          "Programs that promote science, technology, engineering, and mathematics education",
                        icon: <Lightbulb className="h-6 w-6 text-indigo-600" />,
                      },
                    ].map((resource, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="mt-1">{resource.icon}</div>
                        <div>
                          <h4 className="font-bold">{resource.title}</h4>
                          <p className="text-gray-600 text-sm">{resource.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white p-8 rounded-xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Download Program Guide</h3>
                      <p className="opacity-90">
                        Get our comprehensive guide to all educational programs and how to access them.
                      </p>
                    </div>
                    <Button className="bg-white text-purple-600 hover:bg-gray-100">
                      <Download className="mr-2 h-4 w-4" /> Download Guide
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Approach Tab */}
            <TabsContent value="approach" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We take a holistic, community-centered approach to ensuring equal access to quality education.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
                  <h3 className="text-2xl font-bold mb-6">Guiding Principles</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        title: "Equity-Focused",
                        description:
                          "We prioritize reaching those who face the greatest barriers to education, directing resources where they're most needed.",
                        icon: <Target className="h-8 w-8 text-purple-600" />,
                      },
                      {
                        title: "Community-Driven",
                        description:
                          "We work closely with local communities to ensure our programs are relevant, culturally appropriate, and sustainable.",
                        icon: <Users className="h-8 w-8 text-orange-600" />,
                      },
                      {
                        title: "Evidence-Based",
                        description:
                          "Our programs are designed based on research and continuously evaluated to ensure effectiveness and impact.",
                        icon: <LineChart className="h-8 w-8 text-pink-600" />,
                      },
                      {
                        title: "Holistic",
                        description:
                          "We address multiple factors that affect educational access and outcomes, from infrastructure to teaching quality.",
                        icon: <Globe className="h-8 w-8 text-blue-600" />,
                      },
                    ].map((principle, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="mt-1">{principle.icon}</div>
                        <div>
                          <h4 className="text-xl font-bold mb-2">{principle.title}</h4>
                          <p className="text-gray-600">{principle.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">Implementation Strategy</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {[
                        {
                          title: "Assessment & Planning",
                          content:
                            "We begin by conducting thorough needs assessments in target communities, identifying specific barriers to education and working with stakeholders to develop tailored solutions.",
                        },
                        {
                          title: "Capacity Building",
                          content:
                            "We invest in developing local capacity, training teachers, school administrators, and community members to ensure sustainable educational improvements.",
                        },
                        {
                          title: "Multi-Stakeholder Partnerships",
                          content:
                            "We collaborate with governments, schools, NGOs, and private sector partners to leverage resources and expertise for maximum impact.",
                        },
                        {
                          title: "Monitoring & Adaptation",
                          content:
                            "We continuously monitor program implementation, gather feedback, and adapt our approaches to improve effectiveness and respond to changing needs.",
                        },
                      ].map((step, i) => (
                        <AccordionItem key={i} value={`step-${i}`}>
                          <AccordionTrigger className="text-left font-medium">{step.title}</AccordionTrigger>
                          <AccordionContent className="text-gray-600">{step.content}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">Innovation in Education</h3>
                    <p className="text-gray-600 mb-4">
                      We leverage innovative approaches and technologies to overcome traditional barriers to education:
                    </p>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="mt-1 text-orange-600">
                          <Wifi className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Low-Cost Connectivity Solutions</h4>
                          <p className="text-gray-600 text-sm">
                            Offline digital libraries, mesh networks, and low-bandwidth learning platforms for remote
                            areas
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-1 text-orange-600">
                          <Smartphone className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Mobile Learning</h4>
                          <p className="text-gray-600 text-sm">
                            Educational apps and SMS-based learning programs that work on basic mobile phones
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-1 text-orange-600">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Peer Learning Networks</h4>
                          <p className="text-gray-600 text-sm">
                            Student-to-student teaching models that extend learning beyond formal classrooms
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-1 text-orange-600">
                          <School className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Alternative Education Models</h4>
                          <p className="text-gray-600 text-sm">
                            Flexible scheduling, modular learning, and accelerated education programs for out-of-school
                            youth
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Policy & Advocacy</h3>
                  <p className="text-gray-600 mb-6">
                    Beyond direct program implementation, we work to influence policies and systems that affect
                    educational access and quality:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Research & Evidence",
                        description:
                          "Conducting studies and sharing findings to inform evidence-based education policies",
                        icon: <BookOpen className="h-6 w-6 text-purple-600" />,
                      },
                      {
                        title: "Coalition Building",
                        description: "Forming alliances with other organizations to advocate for educational equity",
                        icon: <Users className="h-6 w-6 text-orange-600" />,
                      },
                      {
                        title: "Policy Engagement",
                        description: "Working with governments to develop inclusive education policies and frameworks",
                        icon: <Building className="h-6 w-6 text-pink-600" />,
                      },
                      {
                        title: "Public Awareness",
                        description: "Raising awareness about educational inequalities and their societal impact",
                        icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
                      },
                      {
                        title: "Budget Advocacy",
                        description:
                          "Advocating for increased public investment in education, especially for underserved areas",
                        icon: <DollarSign className="h-6 w-6 text-green-600" />,
                      },
                      {
                        title: "Knowledge Sharing",
                        description:
                          "Disseminating best practices and lessons learned to improve educational approaches",
                        icon: <Globe className="h-6 w-6 text-indigo-600" />,
                      },
                    ].map((activity, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="mt-1">{activity.icon}</div>
                        <div>
                          <h4 className="font-bold">{activity.title}</h4>
                          <p className="text-gray-600 text-sm">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Impact Tab */}
            <TabsContent value="impact" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Through our Equal Access Education initiative, we've made significant progress in expanding
                    educational opportunities and improving outcomes for underserved communities.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-2xl font-bold mb-6">Impact Metrics</h3>
                    <div className="space-y-6">
                      {[
                        {
                          label: "Enrollment Increase",
                          value: 85,
                          description: "Average percentage increase in school enrollment in communities where we work",
                          color: "from-purple-500 to-purple-700",
                        },
                        {
                          label: "Completion Rate",
                          value: 92,
                          description: "Percentage of supported students who complete their educational program",
                          color: "from-orange-500 to-orange-700",
                        },
                        {
                          label: "Digital Access",
                          value: 75,
                          description: "Percentage of target schools now equipped with digital learning resources",
                          color: "from-pink-500 to-pink-700",
                        },
                        {
                          label: "Gender Parity",
                          value: 98,
                          description:
                            "Percentage achievement of equal enrollment between boys and girls in our programs",
                          color: "from-blue-500 to-blue-700",
                        },
                      ].map((metric, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-bold">{metric.label}</span>
                            <span className="font-bold text-xl">{metric.value}%</span>
                          </div>
                          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                              style={{ width: `${metric.value}%` }}
                            ></div>
                          </div>
                          <p className="text-gray-600 text-sm">{metric.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="bg-purple-50 p-6 rounded-xl mb-6">
                      <h3 className="text-2xl font-bold mb-4">Long-Term Outcomes</h3>
                      <p className="text-gray-600 mb-4">
                        Our programs have demonstrated significant long-term impacts on individuals and communities:
                      </p>
                      <ul className="space-y-3">
                        {[
                          "78% of scholarship recipients continue to higher education",
                          "65% increase in employment rates among program graduates",
                          "42% higher average income for individuals who completed our programs",
                          "85% of supported schools show improved academic performance metrics",
                        ].map((impact, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="mt-1 text-purple-600">
                              <ChevronRight className="h-5 w-5" />
                            </div>
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-2xl font-bold mb-4">Research & Evaluation</h3>
                      <p className="text-gray-600 mb-4">
                        We conduct rigorous research to measure our impact and continuously improve our programs:
                      </p>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Educational Access and Outcomes Study",
                            type: "Longitudinal Research",
                            year: "2022-2023",
                          },
                          {
                            title: "Digital Learning Impact Assessment",
                            type: "Program Evaluation",
                            year: "2023",
                          },
                          {
                            title: "Cost-Effectiveness of Educational Interventions",
                            type: "Comparative Analysis",
                            year: "2021",
                          },
                        ].map((publication, i) => (
                          <div key={i} className="flex gap-3">
                            <div className="mt-1 text-orange-600">
                              <BookOpen className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-bold">{publication.title}</h4>
                              <div className="flex items-center text-sm text-gray-500">
                                <span>{publication.type}</span>
                                <span className="mx-2">•</span>
                                <span>{publication.year}</span>
                              </div>
                              <a href="#" className="text-purple-600 text-sm font-medium flex items-center mt-1">
                                Download Report <ExternalLink className="ml-1 h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        name: "Maria Gonzalez",
                        location: "Rural Guatemala",
                        program: "Scholarship Program & Digital Learning",
                        quote:
                          "Before EmpowerNet came to our village, I had to walk 2 hours to school and often couldn't attend during rainy season. Now, with the scholarship and digital learning center in our community, I've not only completed high school but am the first in my family to attend university.",
                        image: "https://images.unsplash.com/photo-1634254051768-003064ebf22d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                      {
                        name: "Kwame Osei",
                        location: "Ghana",
                        program: "Rural Education Access Program",
                        quote:
                          "The mobile learning program transformed our community. As a teacher, I now have resources and training to provide quality education. Our students' test scores have improved dramatically, and last year, five of our graduates received university scholarships.",
                        image: "https://images.unsplash.com/photo-1726276262267-ebb01cfa0982?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                    ].map((story, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                          <img
                            src={story.image || "/placeholder.svg"}
                            alt={story.name}
                            width={80}
                            height={80}
                            className="rounded-full object-cover h-20 w-20"
                          />
                          <div>
                            <h4 className="font-bold text-lg">{story.name}</h4>
                            <p className="text-gray-500 text-sm">{story.location}</p>
                            <p className="text-purple-600 text-sm mb-3">{story.program}</p>
                            <p className="text-gray-600 italic">"{story.quote}"</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Button variant="outline" className="border-purple-600 text-purple-600">
                      Read More Success Stories <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-orange-500 text-white display flex items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Us</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join our mission to ensure quality education is accessible to all, regardless of background or location.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "For Donors",
                  description:
                    "Support our programs financially and help us expand educational opportunities for underserved communities.",
                  button: "Donate Now",
                  icon: <DollarSign className="h-8 w-8" />,
                },
                {
                  title: "For Organizations",
                  description:
                    "Partner with us to implement educational programs, provide resources, or collaborate on initiatives.",
                  button: "Become a Partner",
                  icon: <Building className="h-8 w-8" />,
                },
                {
                  title: "For Volunteers",
                  description:
                    "Contribute your skills and time as a tutor, mentor, curriculum developer, or program supporter.",
                  button: "Volunteer With Us",
                  icon: <Heart className="h-8 w-8" />,
                },
              ].map((option, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">{option.title}</h3>
                  <p className="text-center opacity-90 mb-6">{option.description}</p>
                  <div className="text-center">
                    <Button className="bg-white text-purple-600 hover:bg-gray-100">{option.button}</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-16 bg-white display flex items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Projects</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn about our newest initiatives to expand educational access and quality.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Mobile Digital Libraries",
                  location: "East Africa",
                  description:
                    "Launching a fleet of mobile digital libraries equipped with tablets, educational software, and internet connectivity to reach 100 remote communities.",
                  timeline: "Launching Q2 2024",
                  funding: "75% Funded",
                },
                {
                  title: "Teacher Training Academy",
                  location: "South Asia",
                  description:
                    "Establishing a regional teacher training center focused on inclusive education practices, digital pedagogy, and innovative teaching methods.",
                  timeline: "Opening September 2024",
                  funding: "90% Funded",
                },
                {
                  title: "STEM Education for Girls",
                  location: "Latin America",
                  description:
                    "Expanding our successful STEM education program for girls to 50 new schools, with a focus on hands-on learning and mentorship from women in STEM fields.",
                  timeline: "Expanding in phases throughout 2024",
                  funding: "60% Funded",
                },
              ].map((project, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/4">
                      <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        New Project
                      </div>
                      <div className="mt-2 font-medium">{project.timeline}</div>
                      <div className="text-orange-600 text-sm">{project.funding}</div>
                    </div>
                    <div className="md:w-3/4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <span className="text-gray-500 text-sm">• {project.location}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Button variant="outline" className="border-purple-600 text-purple-600">
                        Learn More & Support
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 display flex items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our Equal Access Education initiative.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How can I apply for educational support for my child or community?",
                    answer:
                      "We have different application processes depending on the program and region. Visit our 'Find Programs' page to locate initiatives in your area and view specific application requirements. Alternatively, you can contact our regional offices directly for guidance on available support options.",
                  },
                  {
                    question: "What types of schools and educational institutions do you work with?",
                    answer:
                      "We work with a wide range of educational institutions including public schools, community schools, non-formal education centers, and vocational training institutes. Our focus is on institutions serving underrepresented and marginalized communities, particularly in rural and low-income areas.",
                  },
                  {
                    question: "How do you measure the success of your educational programs?",
                    answer:
                      "We use a comprehensive monitoring and evaluation framework that tracks both quantitative metrics (enrollment rates, attendance, test scores, completion rates) and qualitative outcomes (student engagement, confidence, future aspirations). We conduct regular assessments and independent evaluations to measure impact and identify areas for improvement.",
                  },
                  {
                    question: "Can organizations partner with you on specific educational initiatives?",
                    answer:
                      "Yes, we actively seek partnerships with organizations that share our commitment to educational equity. We collaborate with schools, NGOs, government agencies, and businesses on various initiatives. Please visit our 'Partner With Us' page or contact our partnerships team to discuss potential collaboration opportunities.",
                  },
                  {
                    question: "How are donations to the Equal Access Education initiative used?",
                    answer:
                      "Donations directly support our educational programs, including scholarships, learning materials, teacher training, technology resources, and infrastructure improvements. We maintain a commitment to financial transparency, with at least 85% of all donations going directly to program implementation. Our annual reports provide detailed breakdowns of fund allocation.",
                  },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Have more questions about our educational initiatives?</p>
              <Button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
                <CTA/>
    </div>
  )
}
