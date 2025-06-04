import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-800 via-teal-700 to-cyan-600 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Открой для себя
            <span className="block text-amber-300">Дагестан</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed animate-fade-in">
            Незабываемые туры по самым красивым местам Кавказа. Горные вершины,
            древние села и гостеприимство горцев ждут вас!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 text-lg rounded-full"
            >
              <Icon name="Mountain" className="mr-2" />
              Выбрать тур
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 text-lg rounded-full"
            >
              <Icon name="Phone" className="mr-2" />
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
