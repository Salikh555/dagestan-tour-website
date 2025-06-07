import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Shield",
      title: "Безопасность",
      description:
        "Все маршруты проверены и безопасны. Страховка включена в стоимость.",
    },
    {
      icon: "Users",
      title: "Опытные гиды",
      description: "Местные жители, знающие каждый уголок родного края.",
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход",
      description: "Составляем программы под ваши интересы и возможности.",
    },
    {
      icon: "Award",
      title: "Высокое качество",
      description: "Только проверенные отели, рестораны и транспорт.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О нашей компании
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Мы — команда путешественников и местных жителей, влюбленных в
              Дагестан. Уже 5 лет мы показываем гостям самые красивые и
              интересные места нашей республики.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наша миссия — познакомить вас с настоящим Дагестаном: его
              природой, культурой, традициями и гостеприимными людьми. Мы
              создаем не просто туры, а незабываемые впечатления на всю жизнь.
            </p>

            <div className="flex flex-wrap gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-gray-600">Довольных туристов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-gray-600">Уникальных маршрутов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">7</div>
                <div className="text-gray-600">Лет на рынке</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-cyan-50"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={feature.icon}
                      className="w-8 h-8 text-blue-600"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
