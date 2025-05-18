import React, { useState, } from 'react';

// Sample project data with more details
const projectsData = [
  {
    id: 1,
    title: "Commercial LED Display",
    description: "A vibrant LED display installation for a shopping mall entrance, featuring dynamic content management system.",
    image: "/src/assets/led.jpeg",
    category: "LED Installation",
    client: "Shree Sakthi sweets & bakery"
  },
  {
    id: 2,
    title: "Retail Store front Banner Led",
    description: "Premium quality flex banner with Led weatherproof coating for long-term outdoor use with vibrant color retention.",
    image: "/src/assets/fashionled.jpeg",
    category: "Flex Printing",
    client: "Roopam Design Hub"
  },
  {
    id: 3,
    title: "Corporate Logo Backdrop",
    description: "Custom designed backdrop for annual corporate event with precision fitting and seamless installation.",
    image: "/src/assets/urtechnologies.jpeg",
    category: "Logos", 
    client: "UR Technologies."
  },
  {
    id: 4,
    title: "Restaurant Menu Boards",
    description: "Set of illuminated menu displays with interchangeable panels for a restaurant chain.",
    image: "/src/assets/foodmenu.jpeg",
    category: "Custom Displays",
    client: "Nature Store"
  },
  {
    id: 5,
    title: "Building Wrap LOGO",
    description: "Large-scale building wrap advertisement with specialized installation techniques for a product launch.",
    image: "/src/assets/logos1.jpeg",
    category: "Logos",
    client: "Our Thiruthani"
  },
  {
    id: 5,
    title: "Building Wrap LOGO",
    description: "Large-scale building wrap advertisement with specialized installation techniques for a product launch.",
    image: "/src/assets/logos2.jpeg",
    category: "Logos",
    client: "Nachunu Naalu Kadai"
  }
];

// Categories for filtering projects
const categories = [
  "All Projects",
  "LED Installation",
  "Flex Printing",
  "Event Solutions",
  "Custom Displays",
  "Logos"
];

// Project image component with error handling and loading state
const ProjectImage = ({ src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    setHasError(true);
  };
  
  return (
    <div className={`relative w-full h-full ${className}`}>
      {!imageLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 text-gray-500">
          <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span className="text-sm">{alt || "Image Unavailable"}</span>
        </div>
      ) : (
        <img 
          src={src || '/api/placeholder/400/300'}
          alt={alt}
          className={`w-full h-full object-cover ${!imageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

// Project card component
const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="h-48 relative">
        <ProjectImage 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Client: {project.client}</span>
          <button 
            onClick={() => onViewDetails(project)}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

// Project details modal component
const ProjectDetailsModal = ({ project, onClose }) => {
  if (!project) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-auto">
        <div className="relative">
          <div className="h-64 sm:h-80 md:h-96">
            <ProjectImage 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              {project.category}
            </span>
          </div>
          
          <p className="text-gray-700 mb-6">{project.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-700 mb-2">Client</h4>
              <p className="text-gray-600">{project.client}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold text-gray-700 mb-2">Project Type</h4>
              <p className="text-gray-600">{project.category}</p>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={onClose}
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Image Gallery for featured projects
const ImageGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <div className="relative bg-gray-800 rounded-lg overflow-hidden">
      <div className="h-64 sm:h-80 md:h-96 relative">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ProjectImage 
              src={image.src || '/api/placeholder/800/600'} 
              alt={image.alt || 'Gallery Image'} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h4 className="text-white font-semibold text-lg">{images[activeIndex].alt}</h4>
        </div>
      </div>
      
      <button 
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button 
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button 
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  // For a real implementation, you'd use state to handle category filtering
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Featured project images
  const featuredImages = [
    { 
      src: "/src/assets/flex.jpeg", 
      alt: "A large flex banner installed at a public event" 
    },
    { 
      src: "/src/assets/shreepooranamsweetsled.jpeg", 
      alt: "A fitted LED display on a building facade" 
    },
    { 
      src: "/src/assets/thebossmobiles.jpeg", 
      alt: "A detailed flex pasting project for a retail store" 
    },
    { 
      src: "/src/assets/corporate.jpeg", 
      alt: "Custom signage solution for corporate branding" 
    },
    { 
      src: "/src/assets/hostelladies.jpeg", 
      alt: "Indoor LED display with dynamic content" 
    }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = activeCategory === "All Projects" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };
  
  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16">
      {/* Hero Section */}
      <div className="container mx-auto text-center px-4 mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-red-600 mb-6 inline-block bg-yellow-100 px-6 py-3 rounded-lg">
          Our Portfolio
        </h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-base sm:text-lg text-gray-800">
            At Sri Digital, we showcase our expertise in flex pasting, fitting, and LED signage solutions. 
            Each project demonstrates our commitment to quality, durability, and precision execution.
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container mx-auto flex justify-center flex-wrap gap-2 mb-12 px-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base transition-all ${
              activeCategory === category
                ? "bg-red-600 text-white font-semibold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Project Gallery */}
      <div className="bg-gray-900 py-12 mb-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="max-w-4xl mx-auto">
            <ImageGallery images={featuredImages} />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
          {activeCategory === "All Projects" ? "All Projects" : activeCategory + " Projects"}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Services Highlight */}
      <div className="bg-red-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Our Expertise in Flex & LED Solutions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 border-l-4 border-red-500">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Flex Pasting Excellence</h4>
                <p className="text-gray-600">
                  We provide premium quality flex pasting with wrinkle-free application and 
                  weather-resistant finishing, ensuring your advertisements maintain their 
                  visual appeal for extended periods.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-red-500">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Precision Fitting</h4>
                <p className="text-gray-600">
                  Our team excels in precise fitting works for all types of displays, 
                  ensuring structural integrity and professional appearance for both 
                  indoor and outdoor installations.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-red-500">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">LED Display Solutions</h4>
                <p className="text-gray-600">
                  From storefront displays to large billboard installations, our LED 
                  solutions provide vibrant, energy-efficient advertising with customizable 
                  content management systems.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-red-500">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Custom Design & Installation</h4>
                <p className="text-gray-600">
                  We offer end-to-end services from design consultation to final installation, 
                  tailoring each solution to meet your specific branding and visibility requirements.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Call to Action */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Transform Your Advertising?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let us help you create impactful visual communications with our premium flex printing and LED display solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
              Get a Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium px-8 py-3 rounded-lg transition-colors">
              View More Projects
            </button>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal 
          project={selectedProject} 
          onClose={handleCloseDetails} 
        />
      )}
    </div>
  );
};

export default Works;