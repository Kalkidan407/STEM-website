import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide from "../assets/481900bd65.webp";
import card from "../assets/eb7164234b.jpg";
import card2 from "../assets/4fb29c9cb0.jpg";
import bgImg2 from "../assets/85b17355c4.webp";

const backgroundImages = [bgImg2, bgImg2, bgImg2];
const sliderImages = [slide, slide, slide];

const cardData = [
  { id: 1, image: card, name: "Device 1", description: "Short description 1" },
  { id: 2, image: card2, name: "Device 2", description: "Short description 2" },
  { id: 3, image: card, name: "Device 3", description: "Short description 3" },
  { id: 4, image: card2, name: "Device 4", description: "Short description 4" },
  { id: 5, image: card, name: "Device 5", description: "Short description 5" },
  { id: 6, image: card2, name: "Device 6", description: "Short description 6" },
  { id: 7, image: card, name: "Device 7", description: "Short description 7" },
  { id: 8, image: card2, name: "Device 8", description: "Short description 8" },
  { id: 9, image: card, name: "Device 9", description: "Short description 9" },
  {
    id: 10,
    image: card2,
    name: "Device 10",
    description: "Short description 10",
  },
];

export default function MainSection() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSection3Page, setActiveSection3Page] = useState(1);
  const [activeSection4Page, setActiveSection4Page] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setSliderIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setSliderIndex(
      (prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length
    );
  };

  const renderCardGrid = (cards, sectionNumber) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative bg-white rounded-lg  overflow-hidden"
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">{card.name}</h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
          {hoveredCard === card.id && (
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2 bg-white bg-opacity-90">
              <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">
                View
              </button>
              <button className="px-3 py-1 bg-green-500 text-white rounded text-sm">
                Contact us
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <main className="flex flex-col bg-white">
      {/* Section 1: Dynamic Background with Search */}
      <section
        className="h-[780px] w-auto bg-cover bg-center transition-all duration-1000 ease-in-out mb-10"
        style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }}
      ></section>

      {/* Section 2: Image Slider */}
      <section className="relative mb-10">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
          >
            {sliderImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[587px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Section 3: Card Grid with Two Pages */}
      <section className="py-16 bg-white mb-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8 text-lg font-semibold">
            <a
              href="#featured"
              className={`mx-4 pb-1 relative ${
                activeSection3Page === 1 ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection3Page(1);
              }}
            >
              Featured Products
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ease-out ${
                  activeSection3Page === 1 ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </a>
            <a
              href="#new-arrivals"
              className={`mx-4 pb-1 relative ${
                activeSection3Page === 2 ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection3Page(2);
              }}
            >
              New Arrivals
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ease-out ${
                  activeSection3Page === 2 ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </a>
          </div>
          {activeSection3Page === 1 && renderCardGrid(cardData.slice(0, 5), 3)}
          {activeSection3Page === 2 && renderCardGrid(cardData.slice(5, 10), 3)}
        </div>
      </section>

      {/* Section 4: Card Grid with Two Pages */}
      <section className="py-16 bg-gray-100 mb-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8 text-lg font-semibold">
            <a
              href="#best-sellers"
              className={`mx-4 pb-1 relative ${
                activeSection4Page === 1 ? "text-green-600" : "text-gray-600"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection4Page(1);
              }}
            >
              Best Sellers
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform origin-left transition-transform duration-300 ease-out ${
                  activeSection4Page === 1 ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </a>
            <a
              href="#special-offers"
              className={`mx-4 pb-1 relative ${
                activeSection4Page === 2 ? "text-green-600" : "text-gray-600"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection4Page(2);
              }}
            >
              Special Offers
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform origin-left transition-transform duration-300 ease-out ${
                  activeSection4Page === 2 ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </a>
          </div>
          {activeSection4Page === 1 && renderCardGrid(cardData.slice(0, 5), 4)}
          {activeSection4Page === 2 && renderCardGrid(cardData.slice(5, 10), 4)}
        </div>
      </section>

      {/* Section 5: Blank */}
      <section className="py-16 bg-white mb-10">
        <div className="container mx-auto px-4">
          {/* Add your content for section 5 here */}
        </div>
      </section>
    </main>
  );
}
