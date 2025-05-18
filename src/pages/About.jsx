import Carousel from './Carousel.jsx';

const About = () => (
  <div className="min-h-screen bg-gradient-to-r from-red-100 to-orange-100 flex flex-col items-center text-center p-4 sm:p-6">
    {/* Header Section */}
    <h2 className="text-2xl sm:text-4xl font-bold text-red-600 mb-6 underline decoration-wavy decoration-yellow-500">About Us</h2>

    {/* Introductory Paragraph */}
    <div className="max-w-3xl mb-8">
      <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
        Sri Digital has been a trusted name in flex printing and LED solutions for over a decade. Our mission is to help businesses shine with creative, high-quality signage and design services that leave a lasting impression. From small startups to large enterprises, we’ve empowered countless brands to stand out with our innovative printing and design solutions.
      </p>
    </div>

    {/* Image Carousel */}
    <Carousel items={[
      "/src/assets/print 023 copy.jpg", // Team working on a project // Office environment
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Client event
    ]} />

    {/* Our Mission Section */}
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-2xl w-full mb-8 transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-4">Our Mission</h3>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
        At Sri Digital, we aim to transform your ideas into visually stunning realities. We are committed to delivering top-notch flex printing and LED signage solutions with creativity, precision, and a passion for excellence.
      </p>
    </div>

    {/* Our Vision Section */}
    <div className="bg-orange-50 p-6 sm:p-8 rounded-lg shadow-md max-w-2xl w-full mb-8">
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-4">Our Vision</h3>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
        We envision a world where every business can make a bold statement through exceptional signage and design. Sri Digital strives to be the leading provider of printing and LED solutions, setting new standards in quality and innovation.
      </p>
    </div>

    {/* Our Team Section
    <div className="max-w-4xl w-full mb-8">
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-6">Meet Our Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center">
            <p className="text-gray-500 text-sm">Team Member 1</p>
          </div>
          <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
          <p className="text-gray-600 text-sm">Creative Director</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center">
            <p className="text-gray-500 text-sm">Team Member 2</p>
          </div>
          <h4 className="text-lg font-semibold text-gray-800">Jane Smith</h4>
          <p className="text-gray-600 text-sm">Lead Designer</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center">
            <p className="text-gray-500 text-sm">Team Member 3</p>
          </div>
          <h4 className="text-lg font-semibold text-gray-800">Mike Johnson</h4>
          <p className="text-gray-600 text-sm">Printing Specialist</p>
        </div>
      </div>
    </div> */}

    {/* Milestones Section */}
    <div className="bg-orange-50 p-6 sm:p-8 rounded-lg shadow-md max-w-2xl w-full mb-8">
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-4">Our Milestones</h3>
      <ul className="text-base sm:text-lg text-gray-700 list-disc list-inside space-y-2">
        <li>2021: Founded Sri Digital with a small team in udumalpet.</li>
        <li>2022: Expanded services to include LED signage solutions.</li>
        <li>2023: Completed 50+ projects for clients across Tamilnadu.</li>
        <li>2024: Won the Best Signage Provider Award in Tamil Nadu.</li>
        <li>2025: Celebrating 4 years of excellence in printing and design.</li>
      </ul>
    </div>

    {/* Client Testimonials Placeholder */}
    <div className="max-w-4xl w-full mb-8">
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-6">What Our Clients Say</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-base italic mb-4">
            "Sri Digital transformed our brand with their stunning LED signage. Highly recommend their services!"
          </p>
          <p className="text-gray-600 text-sm font-semibold">- Client A</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-base italic mb-4">
            "The team at Sri Digital delivered our flex banners on time with exceptional quality. Amazing work!"
          </p>
          <p className="text-gray-600 text-sm font-semibold">- Client B</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;