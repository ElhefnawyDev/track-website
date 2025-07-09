"use client"

import { Phone, Mail, MapPin, Clock, Play, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const services = [
    { name: "تغطية الفعاليات", nameEn: "Event Coverage", href: "/services#events" },
    { name: "إنتاج صوتي", nameEn: "Audio Production", href: "/services#audio" },
    { name: "إنتاج مرئي", nameEn: "Visual Production", href: "/services#visual" },
    { name: "تصوير فوتوغرافي", nameEn: "Photography", href: "/services#photography" },
  ]

  const quickLinks = [
    { name: "من نحن", nameEn: "About Us", href: "/about" },
    { name: "أعمالنا", nameEn: "Our Work", href: "/portfolio" },
    { name: "العملاء", nameEn: "Clients", href: "/clients" },
    { name: "المدونة", nameEn: "Blog", href: "/blog" },
  ]

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Newsletter Section */}
        <div className="border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-[#28bca2]">اشترك في نشرتنا الإخبارية</span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                احصل على آخر الأخبار والعروض الحصرية من Track مباشرة في بريدك الإلكتروني
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#28bca2] focus:border-transparent text-right"
                />
                <Button className="bg-[#28bca2] hover:bg-[#28bca2]/90 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
                  اشترك الآن
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-6 bg-[#28bca2] rounded-sm"></div>
                  <div className="w-2 h-4 bg-[#28bca2]/70 rounded-sm"></div>
                </div>
                <span className="text-white  font-extralight tracking-tighter leading-none animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-200 inline-block bg-gradient-to-r from-gray-900 via-[#28bba4] to-[#28bba4] bg-clip-text text-transparent text-2xl">Track</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-right">
                نحن شركة رائدة في مجال الإنتاج الصوتي والمرئي وتغطية الفعاليات، نقدم خدمات متميزة بأعلى معايير الجودة
                والاحترافية.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#28bca2] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#28bca2] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#28bca2] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#28bca2] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-right">خدماتنا</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="group flex flex-col text-gray-300 hover:text-[#28bca2] transition-colors"
                    >
                      <span className="text-right">{service.name}</span>
                      <span className="text-sm opacity-70">{service.nameEn}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-right">روابط سريعة</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="group flex flex-col text-gray-300 hover:text-[#28bca2] transition-colors"
                    >
                      <span className="text-right">{link.name}</span>
                      <span className="text-sm opacity-70">{link.nameEn}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-right">تواصل معنا</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-[#28bca2] mt-1 flex-shrink-0" />
                  <div className="text-right">
                    <p className="text-gray-300">+966 50 123 4567</p>
                    <p className="text-gray-300">+966 11 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-[#28bca2] mt-1 flex-shrink-0" />
                  <div className="text-right">
                    <p className="text-gray-300">info@track.sa</p>
                    <p className="text-gray-300">contact@track.sa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#28bca2] mt-1 flex-shrink-0" />
                  <div className="text-right">
                    <p className="text-gray-300">الرياض، حي الملك فهد</p>
                    <p className="text-gray-300">المملكة العربية السعودية</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-[#28bca2] mt-1 flex-shrink-0" />
                  <div className="text-right">
                    <p className="text-gray-300">الأحد - الخميس</p>
                    <p className="text-gray-300">9:00 ص - 6:00 م</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="mt-6">
                <Button className="w-full bg-[#28bca2] hover:bg-[#28bca2]/90 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  <span className="mr-2">ابدأ مشروعك الآن</span>
                  <Play size={16} fill="white" />
                </Button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm text-center md:text-right">
                <p>© 2024 Track. جميع الحقوق محفوظة.</p>
                <p className="mt-1">All rights reserved.</p>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-[#28bca2] transition-colors">
                  سياسة الخصوصية
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-[#28bca2] transition-colors">
                  الشروط والأحكام
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-[#28bca2] transition-colors">
                  خريطة الموقع
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["♪", "♫", "♬", "𝄞"].map((symbol, i) => (
            <div
              key={i}
              className="absolute text-2xl opacity-5 animate-float"
              style={{
                color: "#28bca2",
                top: `${20 + Math.sin((i * Math.PI) / 2) * 60}%`,
                left: `${10 + Math.cos((i * Math.PI) / 2) * 80}%`,
                animationDelay: `${i * 1000}ms`,
                animationDuration: "8s",
              }}
            >
              {symbol}
            </div>
          ))}
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#28bca2] text-white rounded-full shadow-lg hover:bg-[#28bca2]/90 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.05;
          }
          25% { 
            transform: translateY(-10px) rotate(90deg) scale(1.1); 
            opacity: 0.1;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg) scale(1.2); 
            opacity: 0.15;
          }
          75% { 
            transform: translateY(-10px) rotate(270deg) scale(1.1); 
            opacity: 0.1;
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
