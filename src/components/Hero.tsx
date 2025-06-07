import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 text-white overflow-hidden pt-20">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-slate-800/90 to-gray-900/85" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-amber-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-amber-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-8 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium tracking-wider uppercase">
              Туристическое агентство
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in leading-tight">
            <span className="block text-white">Туры по</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Дагестану
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed animate-fade-in max-w-4xl mx-auto font-light">
            Откройте для себя величественные горы, древние крепости и бирюзовые
            каньоны. Почувствуйте настоящее кавказское гостеприимство и создайте
            незабываемые воспоминания
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("tours")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-12 py-6 text-xl rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-0"
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
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-12 py-6 text-xl rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-semibold bg-transparent backdrop-blur-sm"
            >
              <Icon name="Phone" className="mr-3 w-6 h-6" />
              Связаться
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                <Icon
                  name="Users"
                  className="mx-auto mb-4 w-14 h-14 text-blue-400"
                />
                <div className="text-4xl font-bold mb-2 text-white">1000+</div>
                <p className="text-gray-300 text-lg">Довольных туристов</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                <Icon
                  name="MapPin"
                  className="mx-auto mb-4 w-14 h-14 text-blue-400"
                />
                <div className="text-4xl font-bold mb-2 text-white">25+</div>
                <p className="text-gray-300 text-lg">Уникальных маршрутов</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                <Icon
                  name="Award"
                  className="mx-auto mb-4 w-14 h-14 text-blue-400"
                />
                <div className="text-4xl font-bold mb-2 text-white">7</div>
                <p className="text-gray-300 text-lg">Лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
