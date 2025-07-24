'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Welcome to Shree-G Medical & Pharma, where your health is our priority. We offer genuine medicines, health products, and expert guidance — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2025, Shree-G Medical & Pharma began as a small, dedicated team with one clear vision — to provide reliable healthcare and genuine medicines to our community. What started as a local medical store driven by care and commitment has grown into a trusted name in pharmacy and wellness.
              </p>
              <p className="text-lg text-gray-600 mb-6">
               Our journey has been guided by continuous learning, compassion, and an unwavering dedication to quality. We believe that access to trusted medicines and health advice should be easy, professional, and personal — because your health deserves nothing less.
              </p>
            </div>
            <div className="relative">
              <img 
              src="https://content.jdmagicbox.com/v2/comp/surat/z9/0261px261.x261.241207161921.h3z9/catalogue/healthcare-chemist-pal-gam-surat-chemists-tzjs09z3w7.jpg"
                //src="https://readdy.ai/api/search-image?query=Modern%20office%20workspace%20with%20diverse%20team%20collaborating%20on%20innovative%20projects%2C%20bright%20natural%20lighting%2C%20contemporary%20design%2C%20professional%20atmosphere%2C%20teamwork%20and%20creativity%2C%20high-quality%20business%20photography&width=600&height=400&seq=about-story&orientation=landscape"
                alt="Our team working together"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we interact with our clients and community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                We pour our hearts into every project, driven by genuine enthusiasm for creating exceptional results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe the best results come from working together, both within our team and with our clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every detail, never settling for anything less than our best work.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with honesty, transparency, and respect for all stakeholders.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-rocket-line text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth</h3>
              <p className="text-gray-600">
                We embrace continuous learning and improvement, always seeking to evolve and expand our capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together creativity, technical expertise, and industry experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20portrait%20of%20confident%20female%20CEO%2C%20modern%20office%20background%2C%20natural%20lighting%2C%20professional%20attire%2C%20warm%20smile%2C%20leadership%20presence%2C%20high-quality%20headshot%20photography&width=400&height=300&seq=team-sarah&orientation=landscape"
                alt="Sarah Johnson"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Johnson</h3>
                <p className="text-blue-600 mb-3">CEO & Founder</p>
                <p className="text-gray-600">
                  Sarah leads our company with vision and passion, bringing 15 years of industry experience.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20portrait%20of%20experienced%20male%20CTO%2C%20tech%20background%2C%20contemporary%20office%20setting%2C%20confident%20expression%2C%20business%20casual%20attire%2C%20technology%20leadership%2C%20high-quality%20headshot%20photography&width=400&height=300&seq=team-mike&orientation=landscape"
                alt="Mike Chen"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Mike Chen</h3>
                <p className="text-blue-600 mb-3">CTO</p>
                <p className="text-gray-600">
                  Mike oversees our technical strategy and ensures we stay at the forefront of innovation.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20portrait%20of%20creative%20female%20design%20director%2C%20modern%20studio%20background%2C%20artistic%20elements%2C%20confident%20and%20approachable%2C%20creative%20industry%20professional%2C%20high-quality%20headshot%20photography&width=400&height=300&seq=team-emma&orientation=landscape"
                alt="Emma Davis"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Emma Davis</h3>
                <p className="text-blue-600 mb-3">Design Director</p>
                <p className="text-gray-600">
                  Emma brings creativity and user-centered design thinking to every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}