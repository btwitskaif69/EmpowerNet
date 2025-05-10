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
  Lightbulb,
  MessageSquare,
  Target,
  Heart,
  MapPin,
  DollarSign,
  Briefcase,
  Building,
  Smartphone,
  TrendingUp,
  ShoppingBag,
  CreditCard,
  Zap,
  Layers,
  CheckCircle,
  PenTool,
} from "lucide-react"
import CTA from "./CTA"

export default function EconomicEmpowermentPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden display flex items-center justify-center">
        <div className="absolute inset-0"></div>
        <div className="absolute top-0 left-0 right-0 h-px"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 mb-6">
                SDG 10: Reduced Inequalities
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Economic{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                  Empowerment
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Microfinance, skills training, and entrepreneurship support for marginalized communities to create
                sustainable livelihoods and economic independence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">Apply for Support</Button>
                <Button variant="outline" className="border-purple-600 text-purple-600">
                  Partner With Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 opacity-30 blur"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1741437137483-eebede95a144?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Entrepreneurs from marginalized communities working on their businesses"
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
                { number: "75,000+", label: "Entrepreneurs Supported", icon: <Briefcase className="h-6 w-6" /> },
                { number: "$12M+", label: "Microloans Disbursed", icon: <DollarSign className="h-6 w-6" /> },
                { number: "85%", label: "Business Survival Rate", icon: <TrendingUp className="h-6 w-6" /> },
                { number: "40+", label: "Countries", icon: <Globe className="h-6 w-6" /> },
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
                    The Economic Empowerment initiative is EmpowerNet's comprehensive program designed to help
                    marginalized communities achieve financial independence and build sustainable livelihoods. We
                    believe that economic opportunity is essential for reducing inequalities and creating lasting
                    positive change.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Through a holistic approach that combines access to capital, skills development, and business
                    support, we empower individuals to start and grow businesses, secure better employment, and build
                    financial resilience for themselves and their communities.
                  </p>
                  <div className="space-y-4 mt-8">
                    <h3 className="text-xl font-bold">Key Objectives</h3>
                    <ul className="space-y-3">
                      {[
                        "Provide access to affordable financial services for underserved populations",
                        "Develop marketable skills that lead to sustainable income generation",
                        "Support entrepreneurship and small business development in marginalized communities",
                        "Build financial literacy and management capabilities",
                        "Create economic opportunities that reduce inequality and poverty",
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
                    <h3 className="text-xl font-bold mb-4">Our Three Pillars</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <CreditCard className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-2">Microfinance</h4>
                          <p className="text-gray-600">
                            Providing accessible, affordable financial services including microloans, savings programs,
                            and insurance to individuals who lack access to traditional banking services.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <PenTool className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-2">Skills Training</h4>
                          <p className="text-gray-600">
                            Delivering targeted vocational and business skills training that prepares individuals for
                            employment opportunities or entrepreneurship in growing sectors.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                          <Lightbulb className="h-6 w-6 text-pink-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-2">Entrepreneurship Support</h4>
                          <p className="text-gray-600">
                            Offering comprehensive business development services including mentoring, market access,
                            networking opportunities, and ongoing technical assistance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Who We Serve</h3>
                    <p className="text-gray-600 mb-4">
                      Our economic empowerment programs focus on communities that face significant barriers to economic
                      opportunity:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {
                          group: "Women entrepreneurs",
                          icon: <Users className="h-5 w-5 text-purple-600" />,
                        },
                        {
                          group: "Youth (18-35)",
                          icon: <Users className="h-5 w-5 text-purple-600" />,
                        },
                        {
                          group: "Rural communities",
                          icon: <MapPin className="h-5 w-5 text-purple-600" />,
                        },
                        {
                          group: "Urban informal sectors",
                          icon: <Building className="h-5 w-5 text-purple-600" />,
                        },
                        {
                          group: "Refugees & migrants",
                          icon: <Globe className="h-5 w-5 text-purple-600" />,
                        },
                        {
                          group: "Persons with disabilities",
                          icon: <Heart className="h-5 w-5 text-purple-600" />,
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
                        Apply for Financial Support
                      </Button>
                      <Button variant="outline" className="w-full border-purple-600 text-purple-600">
                        Become a Business Mentor
                      </Button>
                      <Button variant="outline" className="w-full border-orange-500 text-orange-600">
                        Invest in Our Loan Fund
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
                  <h2 className="text-3xl font-bold mb-4">Our Economic Empowerment Programs</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We implement a range of programs designed to address different aspects of economic empowerment and
                    financial inclusion.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {[
                    {
                      title: "Microfinance Solutions",
                      description:
                        "Financial services designed specifically for individuals excluded from traditional banking systems.",
                      features: [
                        "Group-based lending with low interest rates",
                        "Individual microloans for business expansion",
                        "Savings groups and financial education",
                        "Micro-insurance products",
                      ],
                      icon: <CreditCard className="h-8 w-8 text-purple-600" />,
                      color: "bg-purple-50",
                    },
                    {
                      title: "Vocational Skills Training",
                      description:
                        "Practical, market-driven skills development programs that lead to employment or self-employment.",
                      features: [
                        "Sector-specific technical training",
                        "Digital skills development",
                        "Apprenticeship programs",
                        "Certification and job placement support",
                      ],
                      icon: <PenTool className="h-8 w-8 text-orange-600" />,
                      color: "bg-orange-50",
                    },
                    {
                      title: "Business Development Services",
                      description:
                        "Comprehensive support for entrepreneurs at different stages of their business journey.",
                      features: [
                        "Business planning and strategy",
                        "Financial management training",
                        "Marketing and sales support",
                        "Access to markets and supply chains",
                      ],
                      icon: <Briefcase className="h-8 w-8 text-pink-600" />,
                      color: "bg-pink-50",
                    },
                    {
                      title: "Digital Marketplace Access",
                      description: "Helping small businesses leverage technology to reach new markets and customers.",
                      features: [
                        "E-commerce training and platform access",
                        "Digital marketing skills",
                        "Mobile payment solutions",
                        "Online business management tools",
                      ],
                      icon: <ShoppingBag className="h-8 w-8 text-blue-600" />,
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
                  <h3 className="text-2xl font-bold mb-6">Specialized Initiatives</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Women's Business Accelerator",
                        description: "Intensive support program for women-led businesses with high growth potential",
                        icon: <Zap className="h-6 w-6 text-purple-600" />,
                      },
                      {
                        title: "Youth Entrepreneurship Academy",
                        description: "Training and startup funding for young entrepreneurs aged 18-35",
                        icon: <Lightbulb className="h-6 w-6 text-orange-600" />,
                      },
                      {
                        title: "Agricultural Value Chain Program",
                        description: "Supporting small-scale farmers to improve production and market access",
                        icon: <Layers className="h-6 w-6 text-pink-600" />,
                      },
                      {
                        title: "Green Business Initiative",
                        description: "Supporting environmentally sustainable businesses and green jobs",
                        icon: <Globe className="h-6 w-6 text-blue-600" />,
                      },
                      {
                        title: "Refugee Livelihoods Program",
                        description: "Economic opportunities for displaced populations and host communities",
                        icon: <Heart className="h-6 w-6 text-green-600" />,
                      },
                      {
                        title: "Digital Freelancing Program",
                        description: "Training in digital skills for online work and remote employment",
                        icon: <Smartphone className="h-6 w-6 text-indigo-600" />,
                      },
                    ].map((initiative, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="mt-1">{initiative.icon}</div>
                        <div>
                          <h4 className="font-bold">{initiative.title}</h4>
                          <p className="text-gray-600 text-sm">{initiative.description}</p>
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
                        Get our comprehensive guide to all economic empowerment programs and how to apply.
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
                    We take a holistic, market-driven approach to economic empowerment that addresses both individual
                    capabilities and systemic barriers.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
                  <h3 className="text-2xl font-bold mb-6">Guiding Principles</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        title: "Market-Driven",
                        description:
                          "We focus on developing skills and businesses that respond to real market demands and opportunities.",
                        icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
                      },
                      {
                        title: "Client-Centered",
                        description:
                          "Our programs are designed around the specific needs, constraints, and aspirations of the communities we serve.",
                        icon: <Users className="h-8 w-8 text-orange-600" />,
                      },
                      {
                        title: "Sustainable",
                        description:
                          "We build models that can continue to operate and create impact beyond our direct involvement.",
                        icon: <Layers className="h-8 w-8 text-pink-600" />,
                      },
                      {
                        title: "Inclusive",
                        description:
                          "We ensure our programs are accessible to the most marginalized, including women, youth, and people with disabilities.",
                        icon: <Heart className="h-8 w-8 text-blue-600" />,
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
                    <h3 className="text-2xl font-bold mb-4">Implementation Methodology</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {[
                        {
                          title: "Market Assessment",
                          content:
                            "We begin by analyzing local economic conditions, market opportunities, and barriers to identify viable sectors and business models for our target communities.",
                        },
                        {
                          title: "Participant Selection",
                          content:
                            "We use transparent, community-involved processes to identify participants who demonstrate commitment, potential, and need for our programs.",
                        },
                        {
                          title: "Customized Support Package",
                          content:
                            "Each participant receives a tailored combination of financial services, training, and business support based on their specific situation and goals.",
                        },
                        {
                          title: "Graduated Approach",
                          content:
                            "We provide progressive levels of support as participants develop skills and businesses, gradually building independence and self-sufficiency.",
                        },
                        {
                          title: "Monitoring & Mentorship",
                          content:
                            "Ongoing guidance and performance tracking helps participants navigate challenges and optimize their economic activities.",
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
                    <h3 className="text-2xl font-bold mb-4">Innovative Approaches</h3>
                    <p className="text-gray-600 mb-4">
                      We incorporate innovative methods to enhance the effectiveness and reach of our economic
                      empowerment work:
                    </p>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="mt-1 text-orange-600">
                          <Smartphone className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Digital Financial Services</h4>
                          <p className="text-gray-600 text-sm">
                            Mobile banking, digital payments, and fintech solutions that expand financial inclusion
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
                            Entrepreneur groups that provide mutual support, knowledge sharing, and collective problem
                            solving
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-1 text-orange-600">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Value Chain Integration</h4>
                          <p className="text-gray-600 text-sm">
                            Connecting small producers to larger markets and supply chains through strategic
                            partnerships
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-1 text-orange-600">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Blended Finance Models</h4>
                          <p className="text-gray-600 text-sm">
                            Combining grants, loans, and equity investments to support businesses at different stages
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Ecosystem Development</h3>
                  <p className="text-gray-600 mb-6">
                    Beyond supporting individual entrepreneurs, we work to strengthen the broader economic ecosystem:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Financial Institution Partnerships",
                        description:
                          "Collaborating with banks and MFIs to develop appropriate financial products for underserved markets",
                        icon: <Building className="h-6 w-6 text-purple-600" />,
                      },
                      {
                        title: "Business Development Services",
                        description: "Supporting local providers of business training and advisory services",
                        icon: <Briefcase className="h-6 w-6 text-orange-600" />,
                      },
                      {
                        title: "Market Linkages",
                        description: "Facilitating connections between small producers and larger buyers or exporters",
                        icon: <ShoppingBag className="h-6 w-6 text-pink-600" />,
                      },
                      {
                        title: "Policy Advocacy",
                        description:
                          "Working with governments to improve the regulatory environment for small businesses",
                        icon: <BookOpen className="h-6 w-6 text-blue-600" />,
                      },
                      {
                        title: "Technology Access",
                        description: "Increasing access to digital tools and platforms for small businesses",
                        icon: <Smartphone className="h-6 w-6 text-green-600" />,
                      },
                      {
                        title: "Business Networks",
                        description: "Establishing and strengthening entrepreneur associations and cooperatives",
                        icon: <Users className="h-6 w-6 text-indigo-600" />,
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
                    Through our Economic Empowerment initiative, we've created significant positive change in the lives
                    of individuals and communities.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-2xl font-bold mb-6">Impact Metrics</h3>
                    <div className="space-y-6">
                      {[
                        {
                          label: "Income Increase",
                          value: 68,
                          description: "Average percentage increase in income for program participants within one year",
                          color: "from-purple-500 to-purple-700",
                        },
                        {
                          label: "Business Survival",
                          value: 85,
                          description: "Percentage of supported businesses still operating after two years",
                          color: "from-orange-500 to-orange-700",
                        },
                        {
                          label: "Job Creation",
                          value: 3.2,
                          description: "Average number of additional jobs created per supported business",
                          color: "from-pink-500 to-pink-700",
                          isNumber: true,
                        },
                        {
                          label: "Loan Repayment",
                          value: 97,
                          description: "Percentage of microloans repaid on time, demonstrating program sustainability",
                          color: "from-blue-500 to-blue-700",
                        },
                      ].map((metric, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-bold">{metric.label}</span>
                            <span className="font-bold text-xl">
                              {metric.isNumber ? metric.value : `${metric.value}%`}
                            </span>
                          </div>
                          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                              style={{ width: `${metric.isNumber ? (metric.value / 5) * 100 : metric.value}%` }}
                            ></div>
                          </div>
                          <p className="text-gray-600 text-sm">{metric.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="bg-purple-50 p-6 rounded-xl mb-6">
                      <h3 className="text-2xl font-bold mb-4">Broader Economic Impact</h3>
                      <p className="text-gray-600 mb-4">
                        Our programs create ripple effects that benefit entire communities and local economies:
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Local market development and increased economic activity",
                          "Strengthened value chains and business ecosystems",
                          "Reduced economic inequality within communities",
                          "Increased resilience to economic shocks and crises",
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
                      <h3 className="text-2xl font-bold mb-4">Research & Insights</h3>
                      <p className="text-gray-600 mb-4">
                        We conduct research to measure our impact and identify effective approaches to economic
                        empowerment:
                      </p>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Microfinance Impact Assessment",
                            type: "Longitudinal Study",
                            year: "2023",
                          },
                          {
                            title: "Digital Skills and Rural Entrepreneurship",
                            type: "Research Report",
                            year: "2022",
                          },
                          {
                            title: "Women's Economic Empowerment: Barriers and Enablers",
                            type: "Policy Brief",
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
                        name: "Amina Hassan",
                        location: "Kenya",
                        business: "Sustainable Agriculture",
                        quote:
                          "With the microloan and agricultural training from EmpowerNet, I expanded my farm from 1 to 5 acres and now supply vegetables to hotels in the city. My income has tripled, and I've hired four women from my village to help with the business.",
                        image: "https://images.unsplash.com/photo-1560950336-4b960366436a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      },
                      {
                        name: "Carlos Mendez",
                        location: "Colombia",
                        business: "Mobile Phone Repair",
                        quote:
                          "The technical training and business mentorship changed my life. I started with a small repair kiosk and now own a shop with three locations. We also offer digital skills training to youth in our community, passing on what I learned.",
                        image: "https://images.unsplash.com/photo-1642115009616-c94fca8cf038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                            <p className="text-purple-600 text-sm mb-3">{story.business}</p>
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
                Join our mission to create economic opportunities and financial independence for marginalized
                communities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "For Funders",
                  description:
                    "Invest in our loan fund, sponsor a program, or provide grants to support our economic empowerment work.",
                  button: "Become a Funder",
                  icon: <DollarSign className="h-8 w-8" />,
                },
                {
                  title: "For Businesses",
                  description:
                    "Partner with us to strengthen your supply chain, provide market access, or offer expertise to emerging entrepreneurs.",
                  button: "Business Partnerships",
                  icon: <Briefcase className="h-8 w-8" />,
                },
                {
                  title: "For Mentors",
                  description:
                    "Share your business expertise and experience as a mentor to entrepreneurs in our programs.",
                  button: "Become a Mentor",
                  icon: <Users className="h-8 w-8" />,
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

      {/* Upcoming Events */}
      <section className="py-16 bg-white display flex items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Opportunities</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore upcoming programs, funding cycles, and events related to economic empowerment.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Business Plan Competition",
                  date: "Applications due March 15, 2024",
                  location: "East Africa Region",
                  description:
                    "Submit your business plan for a chance to win seed funding of up to $10,000 and a year of business mentorship. Open to entrepreneurs in Kenya, Uganda, Tanzania, and Rwanda.",
                  type: "Funding Opportunity",
                },
                {
                  title: "Digital Marketing Masterclass",
                  date: "April 5-7, 2024",
                  location: "Virtual Event",
                  description:
                    "A three-day intensive workshop on digital marketing strategies for small businesses, including social media, e-commerce, and online customer engagement.",
                  type: "Training",
                },
                {
                  title: "Microfinance Loan Cycle",
                  date: "Applications open May 1, 2024",
                  location: "Multiple Locations",
                  description:
                    "Our next cycle of microloans will be available for applications starting May 1. Loans range from $500-$5,000 with flexible repayment terms and business support.",
                  type: "Financial Service",
                },
              ].map((event, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/4">
                      <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        {event.type}
                      </div>
                      <div className="mt-2 font-medium">{event.date}</div>
                      <div className="text-gray-500 text-sm flex items-center">
                        <MapPin className="h-4 w-4 mr-1" /> {event.location}
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <Button variant="outline" className="border-purple-600 text-purple-600">
                        Learn More & Apply
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
                Find answers to common questions about our Economic Empowerment initiative.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Who is eligible for your microfinance and business support programs?",
                    answer:
                      "Our programs are designed for individuals from marginalized communities who demonstrate entrepreneurial potential but lack access to traditional financial services and business support. Specific eligibility criteria vary by program and location, but we generally focus on women, youth, rural communities, and other underserved populations. All applicants go through a selection process that assesses both need and potential for success.",
                  },
                  {
                    question: "What types of businesses do you support?",
                    answer:
                      "We support a wide range of businesses across sectors, with a focus on enterprises that have potential for growth, job creation, and positive community impact. This includes agricultural businesses, retail, services, manufacturing, technology, and creative industries. We particularly encourage businesses that address community needs, promote environmental sustainability, or leverage local resources and skills.",
                  },
                  {
                    question: "What are the terms of your microloans?",
                    answer:
                      "Our microloan terms are designed to be accessible and fair. Loan sizes typically range from $200 to $5,000 depending on the business stage and needs. Interest rates are significantly below market rates (typically 5-10% annually), with flexible repayment schedules tailored to business cash flow. We do not require traditional collateral but use alternative methods like group guarantees or character-based assessments.",
                  },
                  {
                    question: "How do your skills training programs work?",
                    answer:
                      "Our skills training programs combine classroom learning with hands-on practice and mentorship. Programs typically run for 3-6 months, with sessions scheduled to accommodate working participants. We offer both technical skills (sector-specific) and business skills (financial management, marketing, etc.). Training is followed by ongoing support during the application phase, and many graduates qualify for startup funding or job placement assistance.",
                  },
                  {
                    question: "How can businesses or professionals volunteer with your programs?",
                    answer:
                      "Businesses and professionals can contribute in several ways: as mentors to entrepreneurs, as trainers sharing specific expertise, as market partners purchasing from program participants, or as financial supporters. We have structured volunteer programs with clear expectations and commitments. Contact our partnership team to discuss how your specific skills and resources can best support our work.",
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
              <p className="text-gray-600 mb-4">Have more questions about our economic empowerment programs?</p>
              <Button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white display flex items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Application Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Interested in applying for our economic empowerment programs? Here's how the process works.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-orange-500"></div>

              {/* Timeline events */}
              {[
                {
                  title: "Initial Application",
                  description:
                    "Complete our online or in-person application form with basic information about yourself and your business idea or needs.",
                  icon: <PenTool className="h-6 w-6" />,
                  color: "bg-purple-100 text-purple-600",
                },
                {
                  title: "Screening & Assessment",
                  description:
                    "Our team reviews applications and conducts initial assessments to determine eligibility and program fit.",
                  icon: <CheckCircle className="h-6 w-6" />,
                  color: "bg-pink-100 text-pink-600",
                },
                {
                  title: "Interview & Needs Analysis",
                  description:
                    "Selected applicants participate in an interview to discuss their goals, challenges, and specific support needs.",
                  icon: <MessageSquare className="h-6 w-6" />,
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  title: "Program Matching",
                  description:
                    "Based on your profile, we match you with the most appropriate program(s) and develop a customized support plan.",
                  icon: <Layers className="h-6 w-6" />,
                  color: "bg-green-100 text-green-600",
                },
                {
                  title: "Orientation & Onboarding",
                  description:
                    "Accepted participants receive orientation on program details, expectations, and next steps.",
                  icon: <BookOpen className="h-6 w-6" />,
                  color: "bg-indigo-100 text-indigo-600",
                },
                {
                  title: "Program Participation",
                  description:
                    "Begin your journey with training, financing, or business support, with regular check-ins and milestone reviews.",
                  icon: <TrendingUp className="h-6 w-6" />,
                  color: "bg-orange-100 text-orange-600",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`relative flex items-center mb-12 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-purple-500"></div>

                  {/* Content card */}
                  <div className={`w-5/12 ${i % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <div className="flex items-center gap-2 mb-2 text-lg font-bold">
                        <div className={`inline-flex items-center justify-center p-2 rounded-full ${step.color}`}>
                          {step.icon}
                        </div>
                        <span>Step {i + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                Start Your Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
            <CTA/>
    </div>
  )
}
