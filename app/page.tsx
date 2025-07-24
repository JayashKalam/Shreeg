
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Medical & Pharmacy Store
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Quality medicines, health products, and pharmacy services at your doorstep. 
              We care for your health and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Medicine Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Medicine Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the right medicine for your health needs from our wide range of categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20medicine%20tablets%20and%20capsules%2C%20colorful%20pills%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=medicine1&orientation=squarish"
                  alt="General Medicine"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">General Medicine</h3>
              <p className="text-gray-600 text-sm">Fever, Pain relief, Common cold</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20heart%20with%20medical%20cross%20symbol%2C%20cardiology%20medicine%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20red%20and%20pink%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=medicine2&orientation=squarish"
                  alt="Heart Care"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Heart Care</h3>
              <p className="text-gray-600 text-sm">Cardiac medicines, BP control</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20diabetes%20testing%20kit%20with%20glucose%20meter%2C%20diabetic%20care%20medicine%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20blue%20and%20white%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=medicine3&orientation=squarish"
                  alt="Diabetes Care"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Diabetes Care</h3>
              <p className="text-gray-600 text-sm">Blood sugar control, Insulin</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20vitamins%20and%20supplements%20bottles%2C%20health%20nutrition%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20green%20and%20yellow%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=medicine4&orientation=squarish"
                  alt="Vitamins"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vitamins</h3>
              <p className="text-gray-600 text-sm">Multivitamins, Supplements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Popular medicines and health products trusted by thousands of customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20pharmaceutical%20product%20photography%2C%20paracetamol%20tablet%20bottle%20with%20medical%20packaging%2C%20clean%20white%20background%2C%20modern%20medicine%20packaging%20design%2C%20high%20quality%20product%20shot%2C%20soft%20lighting%2C%20detailed%20texture%2C%20realistic%20pharmacy%20product%2C%20centered%20composition%2C%20professional%20medical%20photography%20style%2C%20crisp%20and%20clear%20details&width=300&height=200&seq=product1&orientation=landscape"
                  alt="Paracetamol"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Paracetamol 500mg</h3>
              <p className="text-gray-600 mb-3">Fever and pain relief tablets</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">₹45</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors !rounded-button">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20pharmaceutical%20product%20photography%2C%20cough%20syrup%20bottle%20with%20medical%20packaging%2C%20clean%20white%20background%2C%20modern%20medicine%20packaging%20design%2C%20high%20quality%20product%20shot%2C%20soft%20lighting%2C%20detailed%20texture%2C%20realistic%20pharmacy%20product%2C%20centered%20composition%2C%20professional%20medical%20photography%20style%2C%20crisp%20and%20clear%20details&width=300&height=200&seq=product2&orientation=landscape"
                  alt="Cough Syrup"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cough Syrup</h3>
              <p className="text-gray-600 mb-3">Effective relief from dry cough</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">₹85</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors !rounded-button">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20pharmaceutical%20product%20photography%2C%20vitamin%20D3%20supplement%20bottle%20with%20medical%20packaging%2C%20clean%20white%20background%2C%20modern%20medicine%20packaging%20design%2C%20high%20quality%20product%20shot%2C%20soft%20lighting%2C%20detailed%20texture%2C%20realistic%20pharmacy%20product%2C%20centered%20composition%2C%20professional%20medical%20photography%20style%2C%20crisp%20and%20clear%20details&width=300&height=200&seq=product3&orientation=landscape"
                  alt="Vitamin D3"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vitamin D3</h3>
              <p className="text-gray-600 mb-3">Bone health supplement</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">₹120</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors !rounded-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete healthcare solutions for you and your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-medicine-bottle-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prescription Medicines</h3>
              <p className="text-gray-600">
               Visit our store to get your prescription medicines quickly and safely.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-health-book-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Consultation</h3>
              <p className="text-gray-600">
                Free consultation with our qualified pharmacists for your health-related queries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-trophy-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3"> Expert Guidance</h3>
              <p className="text-gray-600">
                Get reliable advice from qualified pharmacists for your health needs..
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Medicines? Visit Us Today!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get genuine medicines and trusted healthcare products directly from our store. Rely on Shree-G Medical & Pharma for professional care 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors !rounded-button">
              Contact Us
            </Link>
            <Link href="/gallery" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors !rounded-button">
              View Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
