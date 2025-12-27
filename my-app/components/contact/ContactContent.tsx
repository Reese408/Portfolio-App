'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Briefcase,
  Code2,
  Shield,
  Cloud,
  GitBranch,
  Send,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Resume } from '@/lib/types/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

interface ContactContentProps {
  resume: Resume;
}

export default function ContactContent({ resume }: ContactContentProps) {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: resume.email,
      href: `mailto:${resume.email}`,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: resume.phone,
      href: `tel:${resume.phone}`,
      color: 'from-green-500/20 to-teal-500/20'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: resume.location,
      href: null,
      color: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: resume.links.github.replace('https://', ''),
      href: resume.links.github,
      color: 'from-gray-500/20 to-slate-500/20'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: resume.links.linkedin.replace('https://', '').replace('www.', ''),
      href: resume.links.linkedin,
      color: 'from-blue-600/20 to-blue-400/20'
    }
  ];

  const opportunities = [
    { icon: Code2, label: 'Full-Stack Development', color: 'text-blue-500' },
    { icon: Shield, label: 'CyberSecurity', color: 'text-purple-500' },
    { icon: Cloud, label: 'Cloud Engineering', color: 'text-orange-500' },
    { icon: GitBranch, label: 'DevOps / DevSecOps', color: 'text-green-500' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[rgb(232,233,243)] via-[rgb(206,206,206)] to-[rgb(177,229,242)] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <Avatar className="w-24 h-24 border-4 border-[rgb(177,229,242)] shadow-xl">
                <AvatarImage src="/ProfilePic.jpg" alt={resume.name} />
                <AvatarFallback className="text-3xl font-bold text-[rgb(39,38,53)] bg-linear-to-br from-[rgb(177,229,242)] to-[rgb(206,206,206)]">
                  {resume.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-[rgb(39,38,53)]">
              Let's Connect
            </h1>
            <p className="text-xl text-[rgb(39,38,53)]/70 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in hearing about new opportunities, projects, or just connecting
              with fellow developers. Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Information Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <Card className="border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] transition-all duration-300 bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full bg-linear-to-br ${method.color} flex items-center justify-center mb-3 mx-auto`}>
                      <method.icon className="w-6 h-6 text-[rgb(177,229,242)]" />
                    </div>
                    <CardTitle className="text-center text-lg text-[rgb(39,38,53)]">
                      {method.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-[rgb(177,229,242)] hover:text-[rgb(177,229,242)]/80 font-medium transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-[rgb(39,38,53)]/70 font-medium">{method.value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-8">
            <Card className="border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[rgb(39,38,53)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-[rgb(177,229,242)] to-[rgb(206,206,206)] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-[rgb(39,38,53)]" />
                  </div>
                  Connect Online
                </CardTitle>
                <CardDescription className="text-[rgb(39,38,53)]/60">
                  Find me on these platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className={`border-l-4 border-[rgb(177,229,242)] hover:shadow-lg transition-all duration-300 bg-linear-to-br ${social.color}`}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <social.icon className="w-5 h-5 text-[rgb(177,229,242)]" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-[rgb(39,38,53)]/60 mb-1">
                                  {social.label}
                                </p>
                                <a
                                  href={social.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[rgb(39,38,53)] hover:text-[rgb(177,229,242)] font-semibold transition-colors flex items-center gap-1"
                                >
                                  {social.value}
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Opportunities Section */}
          <motion.div variants={itemVariants} className="mb-8">
            <Card className="border-2 border-[rgb(177,229,242)] bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-linear-to-r from-[rgb(177,229,242)] to-[rgb(206,206,206)]" />
              <CardHeader>
                <CardTitle className="text-2xl text-[rgb(39,38,53)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-[rgb(177,229,242)] to-[rgb(206,206,206)] flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[rgb(39,38,53)]" />
                  </div>
                  Let's Work Together
                </CardTitle>
                <CardDescription className="text-[rgb(39,38,53)]/60">
                  I'm currently looking for internship and entry-level opportunities in:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {opportunities.map((opp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-linear-to-br from-[rgb(177,229,242)]/10 to-[rgb(206,206,206)]/10 rounded-lg hover:shadow-md transition-all"
                    >
                      <opp.icon className={`w-6 h-6 ${opp.color}`} />
                      <span className="font-semibold text-[rgb(39,38,53)]">{opp.label}</span>
                    </motion.div>
                  ))}
                </div>

                <Separator className="my-6 bg-[rgb(177,229,242)]/30" />

                <div className="flex items-center gap-2 text-sm text-[rgb(39,38,53)]/60">
                  <Calendar className="w-4 h-4 text-[rgb(177,229,242)]" />
                  <span>Expected graduation: <strong className="text-[rgb(39,38,53)]">May 2027</strong> from Ashland University</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants}>
            <Card className="bg-linear-to-r from-[rgb(39,38,53)] to-[rgb(39,38,53)]/90 border-2 border-[rgb(177,229,242)]">
              <CardContent className="py-8 text-center">
                <Send className="w-12 h-12 mx-auto mb-4 text-[rgb(177,229,242)]" />
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Start a Conversation?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Whether you have an opportunity, want to collaborate on a project, or just want to chat about tech - I'd love to hear from you!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/90 text-lg px-8"
                  >
                    <a href={`mailto:${resume.email}`}>
                      <Mail className="w-5 h-5 mr-2" />
                      Send Me an Email
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
                  >
                    <Link href="/projects">
                      <Code2 className="w-5 h-5 mr-2" />
                      View My Work
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
