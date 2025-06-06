import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Tours = () => {
  const tours = [
    {
      id: 1,
      title: "Сулакский каньон + Чиркейское водохранилище",
      description:
        "Путешествие к одному из самых глубоких каньонов мира и живописному водохранилищу",
      duration: "1 день",
      price: "от 4 500 ₽",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      highlights: [
        "Глубина каньона 1920м",
        "Катание на катере",
        "Смотровые площадки",
        "Фотосессия",
      ],
      popular: true,
    },
    {
      id: 2,
      title: "Древний Дербент",
      description:
        "Исследование самого древнего города России с уникальной архитектурой",
      duration: "1 день",
      price: "от 3 800 ₽",
      image:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
      highlights: [
        "Крепость Нарын-Кала",
        "Джума-мечеть VIII века",
        "Музей ковра",
        "Дегустация вин",
      ],
    },
    {
      id: 3,
      title: "Гунибское плато + аварские села",
      description:
        "Восхождение на историческое плато с посещением традиционных горных сел",
      duration: "1 день",
      price: "от 5 200 ₽",
      image:
        "https://images.unsplash.com/photo-1464822759844-d150baec3013?w=800&h=600&fit=crop",
      highlights: [
        "Гунибская крепость",
        "Панорамные виды",
        "Этнические села",
        "Мастер-классы",
      ],
    },
    {
      id: 4,
      title: "Кубачи - село мастеров",
      description:
        "Знакомство с уникальными традициями златокузнецов высокогорного села",
      duration: "1 день",
      price: "от 4 800 ₽",
      image:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
      highlights: [
        "Музей златокузнецов",
        "Мастер-классы",
        "Традиционные промыслы",
        "Горные пейзажи",
      ],
    },
    {
      id: 5,
      title: "Махачкала - Каспийское море",
      description:
        "Обзорная экскурсия по столице с отдыхом на берегу Каспийского моря",
      duration: "1 день",
      price: "от 3 200 ₽",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      highlights: [
        "Центральная мечеть",
        "Набережная",
        "Местная кухня",
        "Пляжный отдых",
      ],
    },
    {
      id: 6,
      title: "Большой тур по Дагестану",
      description: "Комплексное путешествие по всем знаковым местам республики",
      duration: "3-7 дней",
      price: "от 18 000 ₽",
      image:
        "https://images.unsplash.com/photo-1464822759844-d150baec3013?w=800&h=600&fit=crop",
      highlights: [
        "Все достопримечательности",
        "Проживание",
        "Питание",
        "Транспорт",
      ],
      featured: true,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="mb-4">
            <span className="inline-block px-6 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium tracking-wider uppercase">
              Наши туры
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Популярные маршруты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Выберите идеальное путешествие по красотам Дагестана. Каждый тур
            создан с любовью к родному краю
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden ${
                tour.featured ? "ring-2 ring-amber-400 scale-105" : ""
              }`}
            >
              {tour.popular && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  🔥 Популярный
                </div>
              )}

              {tour.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Рекомендуем
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.duration}
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors leading-tight">
                  {tour.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {tour.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-6">
                <div className="space-y-3">
                  {tour.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"
                      />
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-4 border-t border-gray-100">
                <div className="w-full flex items-center justify-between">
                  <div className="text-2xl font-bold text-slate-900">
                    {tour.price}
                  </div>
                  <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    Подробнее
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Смотреть все туры
            <Icon name="ArrowRight" className="ml-3 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tours;
