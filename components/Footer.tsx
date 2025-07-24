"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-4 block font-sans">
              <div className="text-2xl font-bold leading-tight">
                <div className="text-blue-400">Shree-G</div>
                <div className="text-lg font-medium text-green-400">
                  Medical & Pharma
                </div>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              We provide trusted medical and pharma solutions that care for your
              health and well-being. Our team is dedicated to delivering
              reliable healthcare services and quality products that truly make
              a difference.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ "
                className="text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-facebook-fill text-xl"></i>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/place/Shree+G+Medical+Morgarhi/@22.0071451,76.9431802,15z/data=!4m6!3m5!1s0x3bd7d9003d16b36d:0x4ae3d57e62ea26d5!8m2!3d22.0098507!4d76.9432231!16s%2Fg%2F11x2gyvryv?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-map-pin-2-fill text-xl"></i>
                </div>
              </a>
              <a
                href="https://www.instagram.com/drx_pooja_man/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-instagram-fill text-xl"></i>
                </div>
              </a>
              {/* <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-linkedin-fill text-xl"></i>
                </div>
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line"></i>
                </div>
                Main Road Morghari , Harda-461441
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                +91 9726734893
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </div>
                Shreegmedical@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Shree-G Medical & Pharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
