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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg shadow-sm border-b border-blue-100/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-2xl shadow-lg">
                <Icon name="Mountain" className="w-9 h-9 text-white" />
              </div>
              <div>
                <div className="font-bold text-2xl text-gray-900 tracking-tight">
                  ДАГЕСТАН ТУРЫ
                </div>
                <div className="text-sm text-blue-600 -mt-1 font-medium">
                  Путешествия по Кавказу
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 relative group"
              >
                Главная
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("tours")}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 relative group"
              >
                Туры
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 relative group"
              >
                Галерея
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 relative group"
              >
                О нас
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 relative group"
              >
                Контакты
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-3">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Заказать тур
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Главная
                </button>
                <button
                  onClick={() => scrollToSection("tours")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Туры
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Галерея
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  О нас
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
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
