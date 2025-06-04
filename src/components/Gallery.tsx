import { Card } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop",
      title: "Горы Дагестана",
      location: "Высокогорье",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1464822759844-d150baec3013?w=600&h=400&fit=crop",
      title: "Сулакский каньон",
      location: "Дубки",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=600&fit=crop",
      title: "Древняя архитектура",
      location: "Дербент",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      title: "Каспийское море",
      location: "Махачкала",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1464822759844-d150baec3013?w=600&h=800&fit=crop",
      title: "Горные села",
      location: "Гуниб",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=600&fit=crop",
      title: "Культурное наследие",
      location: "Кубачи",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Галерея красот Дагестана
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Взгляните на удивительные пейзажи и достопримечательности, которые
            ждут вас в путешествии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={image.id}
              className={`group relative overflow-hidden bg-transparent border-0 cursor-pointer hover:scale-105 transition-all duration-300 ${
                index === 0 || index === 4 ? "md:row-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    index === 0 || index === 4 ? "h-96 md:h-full" : "h-64"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-sm">📍 {image.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
