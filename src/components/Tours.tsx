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
      title: "Махачкала - Дербент",
      description:
        "Исторический тур по древнейшему городу России и столице республики",
      duration: "2 дня",
      price: "8 500 ₽",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      highlights: ["Крепость Нарын-Кала", "Джума-мечеть", "Каспийское море"],
    },
    {
      id: 2,
      title: "Гунибское плато",
      description: "Восхождение на историческое плато с потрясающими видами",
      duration: "1 день",
      price: "6 000 ₽",
      image:
        "https://images.unsplash.com/photo-1464822759844-d150baec3013?w=800&h=600&fit=crop",
      highlights: ["Гунибская крепость", "Горные пейзажи", "Аварские села"],
    },
    {
      id: 3,
      title: "Сулакский каньон",
      description: "Поездка к одному из самых глубоких каньонов в мире",
      duration: "1 день",
      price: "5 500 ₽",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      highlights: ["Глубина 1920м", "Катание на катере", "Смотровые площадки"],
    },
    {
      id: 4,
      title: "Большой тур по Дагестану",
      description: "Полное погружение в культуру и природу республики",
      duration: "7 дней",
      price: "25 000 ₽",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      highlights: [
        "Все основные достопримечательности",
        "Этнические села",
        "Национальная кухня",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Популярные туры
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите идеальный маршрут для вашего путешествия по Дагестану
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.duration}
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {tour.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {tour.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="space-y-2">
                  {tour.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0"
                      />
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-4 border-t border-gray-100">
                <div className="w-full flex items-center justify-between">
                  <div className="text-2xl font-bold text-emerald-600">
                    {tour.price}
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Подробнее
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4"
          >
            Смотреть все туры
            <Icon name="ArrowRight" className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tours;
