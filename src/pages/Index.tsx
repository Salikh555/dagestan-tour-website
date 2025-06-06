import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-xl">
                <Icon name="Mountain" className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">
                  ДАГЕСТАН ТУРЫ
                </div>
                <div className="text-xs text-gray-500 -mt-1">
                  Туристическое агентство
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 relative group"
              >
                Главная
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("tours")}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 relative group"
              >
                Туры
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 relative group"
              >
                Галерея
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 relative group"
              >
                О нас
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 relative group"
              >
                Контакты
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Заказать тур
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-left text-gray-700 hover:text-emerald-600"
                >
                  Главная
                </button>
                <button
                  onClick={() => scrollToSection("tours")}
                  className="text-left text-gray-700 hover:text-emerald-600"
                >
                  Туры
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-left text-gray-700 hover:text-emerald-600"
                >
                  Галерея
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-700 hover:text-emerald-600"
                >
                  О нас
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-emerald-600"
                >
                  Контакты
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div id="hero">
        <Hero />
      </div>
      <div id="tours">
        <Tours />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
