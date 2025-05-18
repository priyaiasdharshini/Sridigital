import Carousel from './Carousel.jsx';

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-b from-white to-red-50 flex flex-col items-center text-center p-4 sm:p-6">
    {/* Header Section */}
    <h2 className="text-2xl sm:text-4xl font-bold text-red-600 mb-6 bg-red-100 px-6 py-3 rounded-full shadow-md">Contact Us</h2>

    {/* Introductory Paragraph */}
    <div className="max-w-3xl mb-8">
      <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
        Ready to bring your ideas to life? Reach out to Sri Digital today, and let’s create something amazing together! We’re here to assist with all your printing and LED signage needs, from custom designs to professional installations.
      </p>
    </div>



    {/* Contact Information Section */}
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-lg w-full mb-8 transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-4">Get in Touch</h3>
      <p className="text-base sm:text-lg text-gray-700 mb-2 font-semibold">
        Phone: 86101 80704 | 84894 70585
      </p>
      <p className="text-base sm:text-lg text-gray-700 mb-4 font-semibold">
        Email: <a href="mailto:sridigitaludt@gmail.com" className="text-red-600 hover:underline">sridigitaludt@gmail.com</a>
      </p>
      <p className="text-base sm:text-lg text-gray-700 font-semibold">
        WhatsApp: <a href="https://wa.me/918610180704" className="text-red-600 hover:underline">Chat with Us</a>
      </p>
    </div>

    {/* Office Address Section */}
    <div className="bg-red-50 p-6 sm:p-8 rounded-lg shadow-md max-w-lg w-full mb-8">
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-4">Our Office</h3>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
        Sri Digital <br />
        123 Main Street, Near Central Plaza <br />
        Coimbatore, Tamil Nadu 641001 <br />
        India
      </p>
    </div>

    {/* Business Hours Section */}
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-lg w-full mb-8">
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-4">Business Hours</h3>
      <p className="text-base sm:text-lg text-gray-700">
        Monday - Saturday: 9:00 AM - 6:00 PM IST <br />
        Sunday: Closed
      </p>
    </div>

    {/* Contact Form Placeholder */}
    <div className="bg-red-50 p-6 sm:p-8 rounded-lg shadow-md max-w-lg w-full mb-8">
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-4">Send Us a Message</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-left text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            disabled
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            disabled
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-left text-gray-700 font-medium mb-1">Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            disabled
          ></textarea>
        </div>
        <button
          className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors duration-200"
          disabled
        >
          Send Message (Disabled)
        </button>
      </div>
    </div>

    {/* Map Placeholder */}
    <div className="bg-gray-200 h-64 sm:h-80 w-full max-w-3xl rounded-lg shadow-md flex items-center justify-center mb-8">
      <p className="text-gray-500 text-sm sm:text-base text-center px-4">
        Map Placeholder: Interactive map showing Sri Digital’s location in Coimbatore.
      </p>
    </div>
  </div>
);

export default Contact;