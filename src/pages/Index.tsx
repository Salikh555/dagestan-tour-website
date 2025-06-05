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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Mountain" className="w-8 h-8 text-emerald-600" />
              <span className="font-bold text-xl text-gray-900">
                Дагестан Туры
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("tours")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Туры
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Контакты
              </button>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
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
