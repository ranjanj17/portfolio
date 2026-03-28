import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Mail, Code } from 'lucide-react'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Coding Profiles',
    links: [
      { name: 'LeetCode', href: 'https://leetcode.com/u/ranjank_nitj/' },
      { name: 'GeeksforGeeks', href: 'https://www.geeksforgeeks.org/user/ranjank/' },
      { name: 'HackerRank', href: 'https://www.hackerrank.com/ranjank' },
      { name: 'Resume', href: '/RanjanKumar_Resume.pdf', external: true },
    ],
  },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/ranjanj17', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ranjankumarnitjcse24/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ranjank.cs.20@gmail.com', label: 'Email' },
]

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-10 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 sm:col-span-2 md:col-span-2">
              <motion.a
                href="#home"
                className="inline-block mb-3 sm:mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl sm:text-2xl font-mono">
                  <span className="text-dark-500">&lt;</span>
                  <span className="gradient-text-animated font-bold">Ranjan</span>
                  <span className="text-dark-500">/&gt;</span>
                </span>
              </motion.a>
              <p className="text-dark-400 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                React Native & Frontend Developer at Flipkart, building cross-platform 
                mobile features for 180M+ MAU. B.Tech CSE from NIT Jalandhar (CGPA: 8.32).
              </p>
              
              {/* Social Links */}
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2.5 sm:p-3 glass rounded-lg sm:rounded-xl hover:bg-primary-400/10 hover:border-primary-400/30 transition-all duration-300"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-dark-400 hover:text-primary-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{column.title}</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') || link.external ? '_blank' : undefined}
                        rel={link.href.startsWith('http') || link.external ? 'noopener noreferrer' : undefined}
                        className="text-dark-400 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-4 sm:py-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-dark-500 text-xs sm:text-sm flex items-center gap-1 flex-wrap justify-center">
              <span>© {new Date().getFullYear()} Ranjan Kumar. Built with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500 inline mx-0.5 sm:mx-1" />
              <span>and</span>
              <Code className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 inline mx-0.5 sm:mx-1" />
            </div>

            {/* Tech Stack - Hidden on very small screens */}
            <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 text-xs text-dark-600">
              <span>Built with</span>
              <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/5 rounded text-dark-400">React</span>
              <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/5 rounded text-dark-400">Tailwind</span>
              <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/5 rounded text-dark-400">Framer</span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-2.5 sm:p-3 glass rounded-lg sm:rounded-xl hover:bg-primary-400/10 hover:border-primary-400/30 transition-all duration-300"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-dark-400" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent" />
    </footer>
  )
}

export default Footer
