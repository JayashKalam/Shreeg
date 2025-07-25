"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Need trusted medical care or products? We're here to help. Visit us or get in touch — your health is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 w-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">
                Send Us a Message
              </h2>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-check-circle-line text-green-600"></i>
                    </div>
                    <p className="text-green-700 font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-6 w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base font-normal font-sans"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base font-normal font-sans"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base font-normal font-sans"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base font-normal font-sans"
                      placeholder="Message subject"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base font-normal font-sans resize-none"
                    placeholder="Tell us about your...."
                  />
                  <p className="text-sm text-gray-500 mt-2 font-sans">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed !rounded-button font-sans"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="w-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed font-sans">
                We're here to help and answer any questions you might have. We
                look forward to hearing from you!
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 font-sans">
                      Address
                    </h3>
                    <p className="text-gray-600 font-normal font-sans leading-relaxed">
                      W5V+V7W, Morgarhi
                      <br />
                      Harda, Madhya Pradesh
                      <br />
                       pin - 461441
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-phone-line text-xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 font-sans">
                      Phone
                    </h3>
                    <p className="text-gray-600 font-normal font-sans leading-relaxed">
                      +91 ***** *****
                      <br />
                      Mon-Sun 8AM-8PM 
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-mail-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 font-sans">
                      Email
                    </h3>
                    <p className="text-gray-600 font-normal font-sans leading-relaxed">
                      Shreegmedical@gmail.com
                      <br />
                     
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-time-line text-xl text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 font-sans">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 font-normal font-sans leading-relaxed">
                      Monday - Sunday 
                      <br />
                     Open Daily | 8 AM - 8 PM
                      <br />
                      Open 7 Days a Week
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-sans">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <i className="ri-facebook-fill text-xl"></i>
                  </a>
                  
                  <a
                    href="https://www.google.com/maps/place/Shree+G+Medical+Morgarhi/@22.0071451,76.9431802,15z/data=!4m6!3m5!1s0x3bd7d9003d16b36d:0x4ae3d57e62ea26d5!8m2!3d22.0098507!4d76.9432231!16s%2Fg%2F11x2gyvryv?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <i className="ri-map-pin-2-fill text-xl"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/drx_pooja_man/"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <i className="ri-instagram-fill text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
              Find Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light font-sans">
             Visit our store or consult with us in person for your medical and healthcare needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
            {/* <iframe
              //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598294!2d-74.00597548459418!3d40.74102797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959472849!5m2!1sen!2sus"
              src="https://www.google.com/maps/place/Shree+G+Medical+Morgarhi/@22.0098312,76.9432525,19.89z/data=!4m6!3m5!1s0x3bd7d9003d16b36d:0x4ae3d57e62ea26d5!8m2!3d22.0098507!4d76.9432231!16s%2Fg%2F11x2gyvryv?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1461.722747777899!2d76.9432525!3d22.0098312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7d9003d16b36d%3A0x4ae3d57e62ea26d5!2sShree%20G%20Medical%20Morgarhi!5e0!3m2!1sen!2sin!4v1721813760082!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
