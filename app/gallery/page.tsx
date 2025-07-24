'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
   // { id: 'all', name: 'All' },
    // { id: 'creams/Gels ', name: 'Creams/Gels ' },
    // { id: 'mobile', name: 'Mobile Apps' },
    // { id: 'branding', name: 'Branding' },
    // { id: 'photography', name: 'Photography' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Betnovate-C Cream',
      category: 'creams/Gels',
      // image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20design%20on%20laptop%20screen%2C%20clean%20interface%2C%20product%20showcase%2C%20shopping%20cart%2C%20contemporary%20web%20design%2C%20professional%20layout%2C%20high-quality%20web%20development%20screenshot&width=600&height=400&seq=gallery-1&orientation=landscape',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReaqujMuBzSYfHFUNE9xmAfUDyi1kvDTDlyg&s',
      
 
      description: 'Betnovate-C is a prescription topical cream used to treat skin infections, inflammation, redness, and itching.'
    },
    {
      id: 2,
      title: 'Himalaya Bleminor',
      category: 'mobile',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_he6K38Gqh2NNDXTOz9uapI6soFOSvecUcg&s',
      //image: 'https://readdy.ai/api/search-image?query=Mobile%20banking%20app%20interface%20on%20smartphone%2C%20financial%20dashboard%2C%20clean%20UI%20design%2C%20secure%20banking%20features%2C%20modern%20mobile%20app%20design%2C%20professional%20fintech%20interface&width=600&height=400&seq=gallery-2&orientation=landscape',
      description: 'Himalaya Bleminor is a herbal anti-blemish cream that helps reduce dark spots, pigmentation, and uneven skin tone.'
    },
    {
      id: 3,
      title: 'V-Wash',
      category: 'branding',
      image:'https://cureka-static.s3.ap-south-1.amazonaws.com/Uploads/2025/01/v-wash-600x600.webp',
      //image: 'https://readdy.ai/api/search-image?query=Corporate%20brand%20identity%20design%20showcase%2C%20logo%20variations%2C%20business%20cards%2C%20letterhead%2C%20brand%20guidelines%2C%20professional%20branding%20materials%2C%20modern%20corporate%20design&width=600&height=400&seq=gallery-3&orientation=landscape',
      description: 'VWash helps maintain the natural pH balance of the intimate area, protecting against irritation, dryness, and infections'
    },
    {
      id: 4,
      title: 'Omni-Gel',
      category: 'photography',
      image:'https://uniqrr.com/cdn/shop/products/cipla-omni-gel-75gm-500x500.jpg?v=1654234044',
      //image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20setup%2C%20elegant%20product%20shots%2C%20studio%20lighting%2C%20commercial%20photography%2C%20high-end%20product%20display%2C%20professional%20photography%20equipment&width=600&height=400&seq=gallery-4&orientation=landscape',
      description: 'Omnigel is a fast-acting topical gel used for relief from muscle pain, joint pain, backache, sprains, and sports injuries.'
    },
    {
      id: 5,
      title: ' HairFly Onion Hair Oil',
      category: 'web',
      image:'https://smartwaywellness.com/wp-content/uploads/2023/02/HAIRFLY-ONION-OIL-1-4.jpg',
      //image: 'https://readdy.ai/api/search-image?query=Creative%20portfolio%20website%20design%2C%20artistic%20layout%2C%20project%20showcase%2C%20modern%20web%20design%2C%20responsive%20design%2C%20creative%20professional%20website&width=600&height=400&seq=gallery-5&orientation=landscape',
      description: 'HairFly Onion Hair Oil is enriched with red onion extract, which helps reduce hair fall, boost hair growth, and improve scalp health'
    },
    {
      id: 6,
      title: 'Dermi 5 Cream',
      category: 'mobile',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7peOrR1UBkuVQIunkS-VxeoIYPriyrqPQg&s',
      //image: 'https://readdy.ai/api/search-image?query=Food%20delivery%20mobile%20app%20interface%2C%20restaurant%20listings%2C%20food%20ordering%20system%2C%20modern%20mobile%20UI%2C%20food%20app%20design%2C%20user-friendly%20interface&width=600&height=400&seq=gallery-6&orientation=landscape',
      description: 'Dermi 5 is a prescription topical cream used to treat fungal skin infections, itching, redness, and inflammation. '
    },
    {
      id: 7,
      title: ' Panderm Plus Cream',
      category: 'branding',
      image:'https://5.imimg.com/data5/SELLER/Default/2024/9/451296539/BC/LM/SY/125943365/panderm-plus-cream.jpg',
      //image: 'https://readdy.ai/api/search-image?query=Restaurant%20brand%20identity%20design%2C%20menu%20design%2C%20logo%20on%20storefront%2C%20food%20service%20branding%2C%20hospitality%20industry%20design%2C%20restaurant%20marketing%20materials&width=600&height=400&seq=gallery-7&orientation=landscape',
      description: 'Panderm Plus is a topical cream used to treat skin infections caused by fungi or bacteria.'
    },
    {
      id: 8,
      title: 'CLO Vitamin G',
      category: 'photography',
       image:'https://m.media-amazon.com/images/I/51zK0XTLX7L.jpg',
      //image: 'https://readdy.ai/api/search-image?query=Professional%20event%20photography%2C%20corporate%20event%20coverage%2C%20conference%20photography%2C%20business%20networking%20event%2C%20professional%20photographer%20at%20work%2C%20event%20documentation&width=600&height=400&seq=gallery-8&orientation=landscape',
      description: 'CLO Vitamin G is a nutritional supplement rich in Cod Liver Oil and essential vitamins that support immunity.'
    },
    {
      id: 9,
      title: ' Joy Skin Purifying Face Wash',
      category: 'web',
       image:'https://media6.ppl-media.com//tr:h-150,w-150,c-at_max,dpr-2/static/img/product/389057/joy-skin-purifying-and-deep-detox-activated-charcoal-face-wash-150ml-and-charcoal-face-scrub-200ml-and-charcoal-face-mask-250gm-combo-pack-1_1_display_1724411911_80e1b221.jpg',
      //image: 'https://readdy.ai/api/search-image?query=SaaS%20dashboard%20interface%20design%2C%20analytics%20charts%2C%20data%20visualization%2C%20modern%20web%20application%2C%20business%20intelligence%20dashboard%2C%20professional%20software%20interface&width=600&height=400&seq=gallery-9&orientation=landscape',
      description: 'Joy Skin Purifying Face Wash gently cleanses and removes excess oil, dirt, and impurities. '
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore our portfolio of creative projects and successful collaborations 
              that showcase our expertise and dedication to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all !rounded-button ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <i className="ri-eye-line text-2xl text-gray-900"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {/* <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      View Details
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-image-line text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-600">Try selecting a different category to view more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our creative expertise and technical excellence.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors !rounded-button">
            Get In Touch
          </button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}