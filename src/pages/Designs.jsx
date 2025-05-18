import React, { useState, useEffect } from 'react';

// 3D Image Carousel Component with mobile responsiveness
const Carousel3D = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);
  
  // Calculate positions and styles for each slide
  const getSlideStyle = (index) => {
    const diff = (index - currentIndex + items.length) % items.length;
    let translateZ = 0;
    let translateX = 0;
    let opacity = 0;
    let scale = 0.7;
    let zIndex = 0;
    
    if (diff === 0) {
      // Current slide
      translateZ = 0;
      translateX = 0;
      opacity = 1;
      scale = 1;
      zIndex = 10;
    } else if (diff === 1 || diff === items.length - 1) {
      // Next or previous slide
      translateZ = -150;
      translateX = diff === 1 ? 300 : -300;
      opacity = 0.8;
      scale = 0.85;
      zIndex = 5;
    } else {
      // Other slides
      translateZ = -300;
      translateX = diff < items.length / 2 ? 500 : -500;
      opacity = 0.5;
      scale = 0.7;
      zIndex = 1;
    }
    
    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.5s ease-in-out'
    };
  };
  
  // Handle slide navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Pause autoplay temporarily when user interacts
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  
  const nextSlide = () => {
    goToSlide((currentIndex + 1) % items.length);
  };
  
  const prevSlide = () => {
    goToSlide((currentIndex - 1 + items.length) % items.length);
  };
  
  // Handle touch events for swipe on mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };
  
  // Image loading state handler
  const [loadedImages, setLoadedImages] = useState({});
  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({...prev, [index]: true}));
  };
  
  return (
    <div className="w-full relative my-12 h-64 sm:h-80 md:h-96">
      {/* 3D carousel container */}
      <div 
        className="perspective-1000 w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full transform-style-3d">
          {items.map((item, index) => (
            <div
              key={index}
              className="absolute w-full md:w-4/5 mx-auto left-0 right-0 h-full"
              style={getSlideStyle(index)}
            >
              <div className="relative w-full h-full bg-white rounded-lg shadow-xl overflow-hidden">
                {/* Placeholder/loading state */}
                {!loadedImages[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="w-10 h-10 border-4 border-t-orange-600 border-red-200 rounded-full animate-spin"></div>
                  </div>
                )}
                
                {/* Image */}
                <img
                  src={item.image || '/api/placeholder/600/400'}
                  alt={item.title || `Design slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  onLoad={() => handleImageLoad(index)}
                  style={{ opacity: loadedImages[index] ? 1 : 0 }}
                />
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">{item.title || `Design ${index + 1}`}</h3>
                  <p className="text-sm opacity-90">{item.description || ''}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-orange-600 rounded-full p-2 sm:p-3 shadow-lg z-20 transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-orange-600 rounded-full p-2 sm:p-3 shadow-lg z-20 transition-all"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentIndex === index ? 'bg-orange-600 w-4 sm:w-6' : 'bg-white bg-opacity-60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Design showcase component
const DesignShowcase = ({ title, description, image, category }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Design image */}
      <div className="relative h-48 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="w-8 h-8 border-4 border-t-orange-600 border-red-200 rounded-full animate-spin"></div>
          </div>
        )}
        
        <img
          src={image || '/api/placeholder/400/300'}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'transform scale-110' : ''
          }`}
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
        
        {/* Category badge */}
        <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      
      {/* View details overlay (appears on hover) */}
      <div className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

// Process step component
const ProcessStep = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-4 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold relative">
        {number}
        <div className="absolute -right-1 -top-1 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-800">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Designs = () => {
  // Design carousel items
  const carouselItems = [
    {
      title: "Modern Logo Design",
      description: "Corporate identity creation for tech startups",
      image: "/images/designs/logo-design.jpg"
    },
    {
      title: "Professional Brochure",
      description: "Multi-page product showcase with elegant layout",
      image: "/images/designs/brochure-design.jpg"
    },
    {
      title: "Social Media Campaign",
      description: "Integrated visual strategy for brand growth",
      image: "/images/designs/social-media.jpg"
    },
    {
      title: "Restaurant Menu Design",
      description: "Appetizing layouts that enhance dining experience",
      image: "/images/designs/menu-design.jpg"
    },
    {
      title: "Event Poster",
      description: "Eye-catching promotional materials with clear messaging",
      image: "/images/designs/poster-design.jpg"
    }
  ];
  
  // Design showcase items
  const showcaseItems = [
    {
      title: "Corporate Identity",
      description: "Complete branding package with logo, business card, and letterhead",
      image: "/images/designs/corporate-identity.jpg",
      category: "Branding"
    },
    {
      title: "Restaurant Menu",
      description: "Elegant food menu design with mouth-watering imagery",
      image: "/images/designs/restaurant-menu.jpg",
      category: "Print"
    },
    {
      title: "Event Promotion",
      description: "Integrated campaign materials for corporate events",
      image: "/images/designs/event-promotion.jpg",
      category: "Marketing"
    },
    {
      title: "E-commerce Graphics",
      description: "Product photography and banner designs for online stores",
      image: "/images/designs/ecommerce.jpg",
      category: "Digital"
    },
    {
      title: "Magazine Layout",
      description: "Editorial design with balanced typography and imagery",
      image: "/images/designs/magazine.jpg",
      category: "Print"
    },
    {
      title: "App Interface",
      description: "User-friendly mobile application UI/UX design",
      image: "/images/designs/app-interface.jpg",
      category: "Digital"
    },
    {
      title: "Billboard Design",
      description: "Large-format advertising with impactful visuals",
      image: "/images/designs/billboard.jpg",
      category: "Outdoor"
    },
    {
      title: "Product Packaging",
      description: "Custom package designs that stand out on shelves",
      image: "/images/designs/packaging.jpg",
      category: "Branding"
    },
    {
      title: "Annual Report",
      description: "Data visualization and corporate storytelling",
      image: "/images/designs/annual-report.jpg",
      category: "Print"
    }
  ];

  // Design services
  const designServices = [
    {
      title: "Logo Designing",
      description: "Custom logos to represent your brand identity with precision and creativity.",
      icon: "✏️"
    },
    {
      title: "Brochure Design",
      description: "Professional multi-page brochures that effectively communicate your message and offerings.",
      icon: "📄"
    },
    {
      title: "Banner Design",
      description: "Eye-catching banner designs for both digital marketing and physical promotions.",
      icon: "🖼️"
    },
    {
      title: "Social Media Posts",
      description: "Engaging social media content optimized for different platforms and audience engagement.",
      icon: "📱"
    },
    {
      title: "Flyer/Poster",
      description: "Creative flyers and posters that demand attention and drive action for events and promotions.",
      icon: "📃"
    },
    {
      title: "Menu Cards",
      description: "Stylish menu designs for restaurants and cafes that enhance the dining experience.",
      icon: "🍽️"
    },
    {
      title: "Packaging Design",
      description: "Product packaging that protects while making a memorable impression on customers.",
      icon: "📦"
    },
    {
      title: "UI/UX Design",
      description: "User interface and experience design for websites and mobile applications.",
      icon: "💻"
    }
  ];

  // Design process steps
  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description: "We learn about your brand, goals, and audience to establish design direction.",
      icon: "🔍"
    },
    {
      number: "2",
      title: "Concept",
      description: "Our designers create initial concepts based on project requirements.",
      icon: "💡"
    },
    {
      number: "3",
      title: "Refinement",
      description: "We refine the selected concept through collaborative feedback and iteration.",
      icon: "✏️"
    },
    {
      number: "4",
      title: "Delivery",
      description: "Final designs are delivered in all requested formats ready for implementation.",
      icon: "🚀"
    }
  ];
  
  // Design categories for filtering
  const categories = ["All", "Branding", "Print", "Digital", "Marketing", "Outdoor"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter showcase items by category
  const filteredShowcase = activeCategory === "All" 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-50 to-pink-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-90"></div>
        <div className="relative container mx-auto flex flex-col items-center text-center py-16 px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 relative">
            Our Design Services
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-400"></span>
          </h2>
          <div className="max-w-3xl mb-8">
            <p className="text-base sm:text-lg text-white">
              At Sri Digital, our design services are crafted to bring your vision to life. Whether you need a striking logo, a professional brochure, or engaging social media content, we've got you covered with creativity and precision.
            </p>
          </div>
        </div>
      </div>
      
      {/* 3D Carousel Section */}
      <div className="container mx-auto px-4 -mt-12 sm:-mt-16 mb-12">
        <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">Featured Designs</h3>
          <Carousel3D items={carouselItems} />
        </div>
      </div>
      
      {/* Design Process */}
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-12 text-center">
          Our Design Process
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
      
      {/* Design Services */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-12 text-center">
            Comprehensive Design Services
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {designServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{service.icon}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-orange-600">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Design Portfolio */}
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Design Portfolio
        </h3>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShowcase.map((item, index) => (
            <DesignShowcase
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
            />
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-600 to-pink-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Bring Your Design Vision to Life?
          </h3>
          <p className="text-white max-w-2xl mx-auto mb-8">
            Let our creative team transform your ideas into stunning visual assets that elevate your brand and engage your audience.
          </p>
          <button className="bg-white text-orange-600 hover:bg-yellow-50 font-bold px-8 py-3 rounded-lg transition-colors shadow-lg">
            Request a Free Design Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Designs;