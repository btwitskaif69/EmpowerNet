"use client"

import { AccordionContent } from "@/components/ui/accordion"

import { AccordionTrigger } from "@/components/ui/accordion"

import { AccordionItem } from "@/components/ui/accordion"

import { Accordion } from "@/components/ui/accordion"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Lightbulb,
  LineChart,
  MessageSquare,
  Star,
  Target,
  UserPlus,
  Briefcase,
  Heart,
  MapPin,
} from "lucide-react"
import CTA from "./CTA"

export default function WomenLeadershipPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden display flex items-center justify-center">
        <div className="absolute inset-0 "></div>
        <div className="absolute top-0 left-0 right-0 h-px "></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 mb-6">
                SDG 5: Gender Equality
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Women in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                  Leadership
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Empowering women through mentorship and training to increase representation in leadership positions
                across all sectors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">Apply to Program</Button>
                <Button variant="outline" className="border-purple-600 text-purple-600">
                  Become a Mentor
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 opacity-30 blur"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Women in a leadership workshop collaborating"
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
                { number: "5,000+", label: "Women Trained", icon: <GraduationCap className="h-6 w-6" /> },
                { number: "85%", label: "Promotion Rate", icon: <LineChart className="h-6 w-6" /> },
                { number: "30+", label: "Countries", icon: <Globe className="h-6 w-6" /> },
                { number: "750+", label: "Partner Organizations", icon: <Users className="h-6 w-6" /> },
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
                <TabsTrigger value="curriculum" className="text-sm md:text-base">
                  Curriculum
                </TabsTrigger>
                <TabsTrigger value="mentorship" className="text-sm md:text-base">
                  Mentorship
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
                  <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    The Women in Leadership program is EmpowerNet's flagship initiative designed to address the
                    persistent gender gap in leadership positions across sectors. Through a combination of targeted
                    training, mentorship, networking, and advocacy, we equip women with the skills, confidence, and
                    opportunities to advance into leadership roles.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Our approach recognizes that barriers to women's leadership are both individual and systemic. We
                    therefore work at multiple levels – building individual capacity while also engaging with
                    organizations and policy makers to create enabling environments for women leaders to thrive.
                  </p>
                  <div className="space-y-4 mt-8">
                    <h3 className="text-xl font-bold">Program Objectives</h3>
                    <ul className="space-y-3">
                      {[
                        "Develop leadership skills and confidence in women across diverse sectors",
                        "Create supportive networks and mentorship opportunities",
                        "Advocate for policies that promote gender diversity in leadership",
                        "Partner with organizations to implement inclusive leadership practices",
                        "Build a global community of women leaders who support and inspire each other",
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
                    <h3 className="text-xl font-bold mb-4">Who Can Apply</h3>
                    <p className="text-gray-600 mb-4">
                      Our program is designed for women at different stages of their leadership journey:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Emerging Leaders",
                          description:
                            "Women early in their careers who demonstrate leadership potential and aspire to advance",
                        },
                        {
                          title: "Mid-Career Professionals",
                          description:
                            "Women with 5-10 years of experience seeking to move into senior management roles",
                        },
                        {
                          title: "Senior Leaders",
                          description: "Women in management positions aiming for executive or board-level positions",
                        },
                      ].map((level, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="mt-1 text-orange-500">
                            <Star className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold">{level.title}</h4>
                            <p className="text-gray-600 text-sm">{level.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Program Duration & Format</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="mt-1 text-purple-600">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">6-Month Intensive Program</h4>
                          <p className="text-gray-600 text-sm">
                            Structured curriculum with weekly sessions and practical assignments
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-1 text-purple-600">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Hybrid Format</h4>
                          <p className="text-gray-600 text-sm">
                            Combination of virtual learning and in-person workshops where possible
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-1 text-purple-600">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Cohort-Based Learning</h4>
                          <p className="text-gray-600 text-sm">
                            20-25 participants per cohort to facilitate deep connections and peer learning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Upcoming Cohorts</h3>
                    <div className="space-y-4">
                      {[
                        {
                          region: "East Africa",
                          dates: "March - August 2024",
                          application: "Applications open until January 15, 2024",
                        },
                        {
                          region: "South Asia",
                          dates: "April - September 2024",
                          application: "Applications open until February 1, 2024",
                        },
                        {
                          region: "Latin America",
                          dates: "June - November 2024",
                          application: "Applications open until April 15, 2024",
                        },
                      ].map((cohort, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="mt-1 text-orange-500">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold">{cohort.region}</h4>
                            <p className="text-gray-600 text-sm">{cohort.dates}</p>
                            <p className="text-purple-600 text-sm font-medium">{cohort.application}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Curriculum Tab */}
            <TabsContent value="curriculum" className="mt-0 ">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Comprehensive Curriculum</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our curriculum is designed to develop both the hard and soft skills necessary for effective
                    leadership, with a focus on addressing the unique challenges women face in leadership positions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {[
                    {
                      title: "Core Leadership Skills",
                      description:
                        "Develop fundamental leadership capabilities including strategic thinking, decision-making, and team management.",
                      modules: [
                        "Leadership Styles and Authenticity",
                        "Strategic Vision and Planning",
                        "Decision-Making and Problem-Solving",
                        "Team Building and Management",
                        "Change Management",
                      ],
                      icon: <Star className="h-8 w-8 text-purple-600" />,
                      color: "bg-purple-50",
                    },
                    {
                      title: "Communication & Influence",
                      description:
                        "Master the art of effective communication, negotiation, and building influence in professional settings.",
                      modules: [
                        "Public Speaking and Presentation Skills",
                        "Negotiation Techniques",
                        "Conflict Resolution",
                        "Building Executive Presence",
                        "Persuasive Communication",
                      ],
                      icon: <MessageSquare className="h-8 w-8 text-orange-600" />,
                      color: "bg-orange-50",
                    },
                    {
                      title: "Career Development",
                      description:
                        "Navigate career advancement with strategic planning, networking, and personal branding.",
                      modules: [
                        "Career Mapping and Goal Setting",
                        "Personal Branding and Visibility",
                        "Networking Strategies",
                        "Work-Life Integration",
                        "Overcoming Barriers to Advancement",
                      ],
                      icon: <LineChart className="h-8 w-8 text-pink-600" />,
                      color: "bg-pink-50",
                    },
                    {
                      title: "Gender-Specific Challenges",
                      description:
                        "Address and overcome gender-specific obstacles in the workplace through practical strategies.",
                      modules: [
                        "Navigating Gender Bias",
                        "Building Confidence and Overcoming Imposter Syndrome",
                        "Advocacy and Allyship",
                        "Creating Inclusive Cultures",
                        "Work-Family Balance Strategies",
                      ],
                      icon: <Target className="h-8 w-8 text-blue-600" />,
                      color: "bg-blue-50",
                    },
                  ].map((category, i) => (
                    <div key={i} className={`${category.color} p-6 rounded-xl`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div>{category.icon}</div>
                        <h3 className="text-xl font-bold">{category.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <h4 className="font-medium mb-2">Key Modules:</h4>
                      <ul className="space-y-1">
                        {category.modules.map((module, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm">
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                            <span>{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
                  <h3 className="text-2xl font-bold mb-6">Learning Methodology</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Interactive Workshops",
                        description:
                          "Participatory sessions that combine theory with practical exercises and real-world applications",
                        icon: <Users className="h-6 w-6 text-purple-600" />,
                      },
                      {
                        title: "Case Studies",
                        description:
                          "Analysis of real leadership challenges and successes, with a focus on women leaders",
                        icon: <BookOpen className="h-6 w-6 text-orange-600" />,
                      },
                      {
                        title: "Action Learning",
                        description:
                          "Application of concepts to participants' real workplace challenges with peer feedback",
                        icon: <Lightbulb className="h-6 w-6 text-pink-600" />,
                      },
                      {
                        title: "Leadership Simulations",
                        description:
                          "Scenario-based exercises that allow participants to practice leadership skills in a safe environment",
                        icon: <Target className="h-6 w-6 text-blue-600" />,
                      },
                      {
                        title: "Peer Learning",
                        description:
                          "Structured opportunities for participants to learn from each other's experiences and perspectives",
                        icon: <MessageSquare className="h-6 w-6 text-green-600" />,
                      },
                      {
                        title: "Reflective Practice",
                        description: "Guided reflection to deepen learning and develop self-awareness as a leader",
                        icon: <Star className="h-6 w-6 text-indigo-600" />,
                      },
                    ].map((method, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="mt-1">{method.icon}</div>
                        <div>
                          <h4 className="font-bold">{method.title}</h4>
                          <p className="text-gray-600 text-sm">{method.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white p-8 rounded-xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Download Curriculum Guide</h3>
                      <p className="opacity-90">
                        Get the complete curriculum guide with detailed module descriptions and learning outcomes.
                      </p>
                    </div>
                    <Button className="bg-white text-purple-600 hover:bg-gray-100">
                      <Download className="mr-2 h-4 w-4" /> Download Guide
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Mentorship Tab */}
            <TabsContent value="mentorship" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Mentorship Program</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our mentorship component pairs participants with experienced leaders who provide guidance, support,
                    and connections to help navigate career advancement.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">For Mentees</h3>
                    <div className="bg-purple-50 p-6 rounded-xl mb-6">
                      <h4 className="text-xl font-bold mb-4">Benefits of Mentorship</h4>
                      <ul className="space-y-3">
                        {[
                          "Personalized guidance from experienced leaders",
                          "Feedback on leadership style and approach",
                          "Advice on navigating workplace challenges",
                          "Access to networks and opportunities",
                          "Support in setting and achieving career goals",
                        ].map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="mt-1 text-purple-600">
                              <ChevronRight className="h-5 w-5" />
                            </div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold mb-4">Mentorship Structure</h4>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="mt-1 text-purple-600">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <h5 className="font-bold">One-on-One Matching</h5>
                            <p className="text-gray-600 text-sm">
                              Carefully matched with a mentor based on career goals, industry, and personal fit
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="mt-1 text-purple-600">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div>
                            <h5 className="font-bold">Regular Meetings</h5>
                            <p className="text-gray-600 text-sm">
                              Monthly one-on-one sessions throughout the 6-month program
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="mt-1 text-purple-600">
                            <Target className="h-5 w-5" />
                          </div>
                          <div>
                            <h5 className="font-bold">Goal-Oriented</h5>
                            <p className="text-gray-600 text-sm">
                              Structured around specific development goals and action plans
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="mt-1 text-purple-600">
                            <MessageSquare className="h-5 w-5" />
                          </div>
                          <div>
                            <h5 className="font-bold">Ongoing Support</h5>
                            <p className="text-gray-600 text-sm">
                              Access to mentors between sessions for advice and feedback
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">For Mentors</h3>
                    <div className="bg-orange-50 p-6 rounded-xl mb-6">
                      <h4 className="text-xl font-bold mb-4">Why Become a Mentor</h4>
                      <ul className="space-y-3">
                        {[
                          "Make a meaningful impact on women's leadership advancement",
                          "Develop your own leadership and coaching skills",
                          "Gain fresh perspectives from emerging leaders",
                          "Expand your professional network",
                          "Contribute to creating more diverse and inclusive leadership",
                        ].map((reason, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="mt-1 text-orange-600">
                              <ChevronRight className="h-5 w-5" />
                            </div>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold mb-4">Mentor Requirements</h4>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="mt-1 text-orange-600">
                            <Briefcase className="h-5 w-5" />
                          </div>
                          <div>
                            <h5 className="font-bold">Experience</h5>
                            <p className="text-gray-600 text-sm">
                              Minimum 10 years of professional experience with at least 5 in leadership roles
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="mt-1 text-orange-600">
                            <Clock className="h-5 w-5" />
                          </div>
                          <div>
                            <h5 className="font-bold">Time Commitment</h5>
                            <p className="text-gray-600 text-sm">
                              4-6 hours per month for mentoring sessions and preparation
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="mt-1 text-orange-600">
                            <MessageSquare className="h-5 w-5" />
                          </div>
                          <div>
                            <h5 className="font-bold">Communication Skills</h5>
                            <p className="text-gray-600 text-sm">Strong listening, feedback, and coaching abilities</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="mt-1 text-orange-600">
                            <Heart className="h-5 w-5" />
                          </div>
                          <div>
                            <h5 className="font-bold">Commitment to Diversity</h5>
                            <p className="text-gray-600 text-sm">
                              Demonstrated commitment to advancing women and diverse leaders
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                          Apply to Be a Mentor
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Meet Some of Our Mentors</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Dr. Sarah Chen",
                        role: "CEO, Global Health Innovations",
                        bio: "20+ years of leadership in healthcare and technology sectors. Passionate about developing women leaders in STEM fields.",
                        image: "/placeholder.svg?height=300&width=300",
                      },
                      {
                        name: "Maria Rodriguez",
                        role: "Regional Director, World Bank",
                        bio: "Expert in economic development with experience across Latin America. Mentors women in finance and international development.",
                        image: "/placeholder.svg?height=300&width=300",
                      },
                      {
                        name: "Amina Osei",
                        role: "Founder & Executive Director, Tech4All",
                        bio: "Serial entrepreneur who has built three successful tech companies. Advocates for women's leadership in entrepreneurship.",
                        image: "/placeholder.svg?height=300&width=300",
                      },
                    ].map((mentor, i) => (
                      <Card key={i}>
                        <div className="aspect-square relative">
                          <img
                            src={mentor.image || "/placeholder.svg"}
                            alt={mentor.name}
                            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
                          />
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-bold text-lg">{mentor.name}</h4>
                          <p className="text-purple-600 text-sm mb-2">{mentor.role}</p>
                          <p className="text-gray-600 text-sm">{mentor.bio}</p>
                        </CardContent>
                      </Card>
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
                    The Women in Leadership program has demonstrated significant impact on both individual participants
                    and the broader goal of increasing women's representation in leadership.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-2xl font-bold mb-6">Impact Metrics</h3>
                    <div className="space-y-6">
                      {[
                        {
                          label: "Promotion Rate",
                          value: 85,
                          description:
                            "Percentage of participants who received a promotion within 2 years of completing the program",
                          color: "from-purple-500 to-purple-700",
                        },
                        {
                          label: "Salary Increase",
                          value: 32,
                          description: "Average percentage increase in salary for program graduates within 1 year",
                          color: "from-orange-500 to-orange-700",
                        },
                        {
                          label: "Retention Rate",
                          value: 92,
                          description:
                            "Percentage of participants who remain in leadership positions 3 years after the program",
                          color: "from-pink-500 to-pink-700",
                        },
                        {
                          label: "Confidence Index",
                          value: 78,
                          description:
                            "Percentage increase in self-reported leadership confidence after program completion",
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
                      <h3 className="text-2xl font-bold mb-4">Organizational Impact</h3>
                      <p className="text-gray-600 mb-4">
                        We work with partner organizations to implement policies and practices that support women's
                        leadership advancement. Partner organizations report:
                      </p>
                      <ul className="space-y-3">
                        {[
                          "40% average increase in women in senior leadership positions",
                          "65% improvement in retention of high-potential women",
                          "58% of partners have implemented new gender-inclusive policies",
                          "72% report improved organizational performance and innovation",
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
                      <h3 className="text-2xl font-bold mb-4">Research & Publications</h3>
                      <p className="text-gray-600 mb-4">
                        We regularly conduct research on women's leadership and share insights through publications:
                      </p>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Breaking the Glass Ceiling: Strategies that Work",
                            type: "Research Report",
                            year: "2023",
                          },
                          {
                            title: "Mentorship Models for Women's Leadership Development",
                            type: "Best Practices Guide",
                            year: "2022",
                          },
                          {
                            title: "The Economic Case for Women in Leadership",
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
                                Download PDF <ExternalLink className="ml-1 h-3 w-3" />
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
                        name: "Priya Sharma",
                        role: "Now: Chief Technology Officer, TechSolutions Inc.",
                        previous: "Previously: Senior Developer",
                        quote:
                          "The Women in Leadership program gave me the confidence and skills to pursue a C-suite position. The mentorship was transformative, and the network I built continues to support my career growth.",
                        image: "/placeholder.svg?height=200&width=200",
                      },
                      {
                        name: "Fatima Nkosi",
                        role: "Now: Country Director, International Aid Organization",
                        previous: "Previously: Program Manager",
                        quote:
                          "Through the program, I learned to navigate complex organizational politics and advocate effectively for my ideas. Within a year of graduating, I was promoted to lead our country office.",
                        image: "/placeholder.svg?height=200&width=200",
                      },
                    ].map((story, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                          <img
                            src={story.image || "/placeholder.svg"}
                            alt={story.name}
                            width={80}
                            height={80}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-bold text-lg">{story.name}</h4>
                            <p className="text-purple-600 text-sm">{story.role}</p>
                            <p className="text-gray-500 text-sm mb-3">{story.previous}</p>
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

      {/* Get Involved Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-orange-500 text-white display flex items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                There are multiple ways to support and participate in our Women in Leadership program.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Apply as a Participant",
                  description:
                    "Join our next cohort and develop your leadership skills through our comprehensive program.",
                  button: "Apply Now",
                  icon: <UserPlus className="h-8 w-8" />,
                },
                {
                  title: "Become a Mentor",
                  description:
                    "Share your experience and expertise to help develop the next generation of women leaders.",
                  button: "Mentor With Us",
                  icon: <Users className="h-8 w-8" />,
                },
                {
                  title: "Partner With Us",
                  description:
                    "Organizations can sponsor participants, host events, or implement our leadership development framework.",
                  button: "Explore Partnership",
                  icon: <Briefcase className="h-8 w-8" />,
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
              <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join us for these upcoming events related to women's leadership development.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Women in Leadership: Global Summit 2024",
                  date: "May 15-17, 2024",
                  location: "Nairobi, Kenya & Virtual",
                  description:
                    "Our annual summit bringing together women leaders, policymakers, and advocates from around the world to share insights and strategies for advancing women's leadership.",
                  type: "Conference",
                },
                {
                  title: "Breaking Barriers: Women in Corporate Leadership",
                  date: "March 8, 2024",
                  location: "Virtual Webinar",
                  description:
                    "A panel discussion featuring C-suite women leaders sharing their journeys and strategies for overcoming obstacles in corporate environments.",
                  type: "Webinar",
                },
                {
                  title: "Leadership Skills Workshop Series",
                  date: "Monthly, Starting February 2024",
                  location: "Multiple Locations & Virtual",
                  description:
                    "A series of practical workshops focusing on specific leadership skills, open to all women interested in leadership development.",
                  type: "Workshop",
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
                        Learn More & Register
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
                Find answers to common questions about our Women in Leadership program.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What is the cost of participating in the program?",
                    answer:
                      "Program fees vary by region and are based on a sliding scale to ensure accessibility. We offer scholarships and employer sponsorship options. Full details are provided during the application process, and we work with each participant to find a suitable financial arrangement.",
                  },
                  {
                    question: "Is the program only for women in certain sectors?",
                    answer:
                      "No, our program is designed for women across all sectors and industries. We create diverse cohorts with participants from corporate, nonprofit, government, and entrepreneurial backgrounds, as this cross-sector exposure enhances the learning experience.",
                  },
                  {
                    question: "What is the time commitment required?",
                    answer:
                      "Participants should expect to commit 5-7 hours per week, including workshops, mentorship sessions, and independent work. We design the program to be compatible with full-time employment, with most activities scheduled during evenings and weekends.",
                  },
                  {
                    question: "How are mentors matched with participants?",
                    answer:
                      "We use a careful matching process that considers career goals, industry experience, skills development needs, and personal preferences. Both mentors and mentees provide detailed profiles, and we facilitate initial meetings to ensure compatibility before finalizing matches.",
                  },
                  {
                    question: "Is there support available after the program ends?",
                    answer:
                      "Yes, all graduates become part of our alumni network, which provides ongoing support, networking opportunities, and continued learning resources. We also offer advanced programs and refresher courses for alumni as they progress in their leadership journeys.",
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
              <p className="text-gray-600 mb-4">Don't see your question answered here?</p>
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
