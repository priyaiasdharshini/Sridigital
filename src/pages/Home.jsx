import { useState } from 'react';
import Carousel from './Carousel.jsx';

const Home = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState('services');
  
  // Testimonials data
  const testimonials = [
    {
      name: "Raj Kumar",
      company: "Food Planet Restaurant",
      text: "Sri Digital transformed our restaurant's branding with stunning LED signage. The quality and attention to detail exceeded our expectations.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Eventique",
      text: "We've been using Sri Digital for all our event banners and flex prints. Their reliability and quick turnaround time make them our go-to printing partner.",
      rating: 5
    },
    {
      name: "Arun Mehta",
      company: "Mehta Textiles",
      text: "The cloth printing quality is exceptional. Our brand imagery looks vibrant and professional thanks to Sri Digital's expertise.",
      rating: 4
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-100 flex flex-col items-center text-center">
      {/* Hero Section */}
      <header className="w-full py-6 px-4 bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">SD</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-600">Sri Digital</h1>
          </div>
          <nav className="flex space-x-6">
            <a href="#services" className="text-gray-700 hover:text-orange-600 font-medium">Services</a>
            
            <a href="#testimonials" className="text-gray-700 hover:text-orange-600 font-medium">Testimonials</a>

          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 text-left mb-8 md:mb-0 md:pr-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Shaping Your <span className="text-orange-600">Ideas</span> Into Reality</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Your premier partner for high-quality digital printing and LED signage solutions. Stand out from the competition with our expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition duration-300">
                Get a Quote
              </button>
              <button className="border-2 border-orange-600 text-orange-600 py-3 px-6 rounded-lg font-medium hover:bg-red-50 transition duration-300">
                View Portfolio
              </button>
            </div>
          </div>
         
        </div>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="text-gray-600 mt-2">Comprehensive printing and design solutions for your business</p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="/src\assets\retailstrorefrontledbanner.jpeg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">LED Signage</h3>
              <p className="text-gray-600">
                Eye-catching LED displays customized for your business. Increase visibility and attract more customers with vibrant, energy-efficient signage.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Flex Printing</h3>
              <p className="text-gray-600">
                High-quality flex banners and posters printed with premium materials. Perfect for advertising, events, and promotions.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Branding Solutions</h3>
              <p className="text-gray-600">
                Complete branding packages including logo design, business cards, brochures, and digital assets to establish your brand identity.
              </p>
            </div>
          </div>

          {/* Services List */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Our Complete Range of Services</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">LED Signage</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Flex Printing</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Cloth Printing</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Wall Posters</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Visiting Cards</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Vinyl Stickers</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Menu Cards</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Flyers/Posters</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Logo Designing</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Brochure Design</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Banner Design</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Social Media Posts</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Vehicle Wraps</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Exhibition Displays</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Flex Pasting</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                <p className="text-gray-700">Fitting Works</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Sri Digital</h2>
            <p className="text-gray-600 mt-2">What sets us apart from the competition</p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Premium Quality Materials</h3>
                <p className="text-gray-600">We use only the highest quality materials to ensure durability and vibrant colors that stand the test of time.</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 textorange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Quick Turnaround Time</h3>
                <p className="text-gray-600">We understand that time is crucial. Our efficient processes ensure your projects are completed on schedule.</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">End-to-End Solutions</h3>
                <p className="text-gray-600">From design to installation, we handle every aspect of your project with expertise and professionalism.</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Dedicated Support Team</h3>
                <p className="text-gray-600">Our experienced team is always available to provide guidance and support throughout your project.</p>
              </div>
            </div>
          </div>
        </section>



        {/* Testimonials Section */}
        <section id="testimonials" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
            <p className="text-gray-600 mt-2">Hear from our satisfied customers</p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">Find answers to common questions</p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What types of materials do you use for flex printing?</h3>
              <p className="text-gray-600">We use premium quality vinyl and starflex materials that are durable, weather-resistant, and maintain color vibrancy for a long time. Our materials are sourced from trusted suppliers to ensure the highest quality prints.</p>
            </div>
            
            <div className="mb-6 border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How long does it take to complete an LED signage project?</h3>
              <p className="text-gray-600">The timeline varies depending on the complexity and size of the project. Simple LED signs can be completed in 3-5 business days, while more complex custom designs may take 7-10 business days. We'll provide you with a specific timeline during our initial consultation.</p>
            </div>
            
            <div className="mb-6 border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you provide installation services for your products?</h3>
              <p className="text-gray-600">Yes, we offer comprehensive installation services for all our products. Our experienced team ensures proper fitting and installation at your location. We also provide maintenance services to keep your signage and prints looking their best.</p>
            </div>
            
            <div className="mb-6 border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can you help with the design process if I don't have one ready?</h3>
              <p className="text-gray-600">Absolutely! Our professional design team can create custom designs based on your requirements and brand guidelines. We'll work closely with you to develop concepts that meet your vision and marketing objectives.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What is the minimum order quantity for printing services?</h3>
              <p className="text-gray-600">We accommodate orders of all sizes, from single prints to bulk orders. There's no minimum order requirement, and we ensure the same quality and attention to detail regardless of order size.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-orange-600 text-white p-8 sm:p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Brand's Visual Identity?</h2>
            <p className="text-lg mb-6">Let's bring your ideas to life with our premium printing and signage solutions.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-orange-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
                Request a Quote
              </button>
              <button className="border-2 border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
};

export default Home;
