import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-amber-300">
              Туры по Дагестану
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Откройте для себя удивительный мир Дагестана вместе с нами.
              Незабываемые путешествия по самым красивым уголкам Кавказа.
            </p>
            <div className="flex space-x-4">
              <div className="bg-emerald-600 p-2 rounded-full hover:bg-emerald-700 transition-colors cursor-pointer">
                <Icon name="Instagram" className="w-5 h-5" />
              </div>
              <div className="bg-emerald-600 p-2 rounded-full hover:bg-emerald-700 transition-colors cursor-pointer">
                <Icon name="Phone" className="w-5 h-5" />
              </div>
              <div className="bg-emerald-600 p-2 rounded-full hover:bg-emerald-700 transition-colors cursor-pointer">
                <Icon name="Mail" className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">
              Быстрые ссылки
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Туры
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">
              Популярные туры
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Сулакский каньон
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Дербент
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Гунибское плато
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Большой тур
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-12 text-center">
          <p className="text-gray-400">
            © 2024 Туры по Дагестану. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
