import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-700 text-white overflow-hidden pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-amber-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-amber-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            <span className="block text-white">Откройте красоты</span>
            <span className="block text-amber-400 text-6xl md:text-8xl">
              Дагестана
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed animate-fade-in max-w-4xl mx-auto font-light">
            Путешествуйте по живописным горам, древним крепостям и бирюзовым
            озерам. Откройте для себя уникальную культуру и безграничное
            гостеприимство народов Кавказа
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("tours")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-10 py-5 text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <Icon name="Mountain" className="mr-3 w-6 h-6" />
              Выбрать тур
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-3 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-10 py-5 text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              <Icon name="Phone" className="mr-3 w-6 h-6" />
              Связаться с нами
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Icon
                  name="Users"
                  className="mx-auto mb-4 w-12 h-12 text-amber-300"
                />
                <h3 className="text-xl font-semibold mb-2">500+ туристов</h3>
                <p className="text-gray-300">Довольных путешественников</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Icon
                  name="MapPin"
                  className="mx-auto mb-4 w-12 h-12 text-amber-300"
                />
                <h3 className="text-xl font-semibold mb-2">15+ маршрутов</h3>
                <p className="text-gray-300">По всему Дагестану</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Icon
                  name="Star"
                  className="mx-auto mb-4 w-12 h-12 text-amber-300"
                />
                <h3 className="text-xl font-semibold mb-2">5 лет опыта</h3>
                <p className="text-gray-300">Организации туров</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
