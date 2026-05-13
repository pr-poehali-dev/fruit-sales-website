import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+7 (999) 123-45-67";

const fruits = [
  { emoji: "🍎", name: "Яблоки", desc: "Свежие, сочные, хрустящие", price: "от 89 ₽/кг", badge: "Хит" },
  { emoji: "🍊", name: "Апельсины", desc: "Сочные и ароматные", price: "от 129 ₽/кг", badge: "Акция" },
  { emoji: "🍇", name: "Виноград", desc: "Сладкий без косточек", price: "от 199 ₽/кг", badge: "" },
  { emoji: "🍌", name: "Бананы", desc: "Спелые, из Эквадора", price: "от 79 ₽/кг", badge: "" },
  { emoji: "🍓", name: "Клубника", desc: "Свежая, ягода-ягода", price: "от 249 ₽/кг", badge: "Новинка" },
  { emoji: "🥭", name: "Манго", desc: "Тропическое лакомство", price: "от 299 ₽/кг", badge: "" },
  { emoji: "🍍", name: "Ананас", desc: "Целый или нарезанный", price: "от 349 ₽/шт", badge: "" },
  { emoji: "🍋", name: "Лимоны", desc: "Свежие, без воска", price: "от 99 ₽/кг", badge: "" },
];

const promotions = [
  { emoji: "🛍️", title: "3 кг яблок = 4-й в подарок", desc: "При покупке от 3 кг яблок — 1 кг бесплатно!", color: "from-orange-400 to-orange-600" },
  { emoji: "🚚", title: "Бесплатная доставка", desc: "При заказе от 1500 ₽ доставка бесплатно", color: "from-green-400 to-green-600" },
  { emoji: "🎁", title: "Скидка 15% новым клиентам", desc: "Первый заказ — скидка 15% на всё!", color: "from-yellow-400 to-orange-500" },
];

const sections = ["Главная", "Каталог", "Доставка", "О нас", "Акции", "Контакты"];

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen font-golos" style={{ background: "var(--fruit-bg)" }}>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-3xl animate-float inline-block">🍊</span>
            <span className="font-pacifico text-xl" style={{ color: "var(--fruit-orange)" }}>
              ФруктоМаркет
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === s ? "text-white" : "text-gray-600 hover:text-orange-500"
                }`}
                style={activeSection === s ? { background: "var(--fruit-orange)" } : {}}
              >
                {s}
              </button>
            ))}
          </div>

          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105"
            style={{ background: "var(--fruit-green)" }}
          >
            <Icon name="Phone" size={16} />
            {PHONE}
          </a>

          <button className="md:hidden p-2 rounded-lg" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-orange-100 px-4 py-3 flex flex-col gap-2 animate-fade-in">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 font-medium"
              >
                {s}
              </button>
            ))}
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-white font-semibold"
              style={{ background: "var(--fruit-green)" }}
            >
              <Icon name="Phone" size={16} />
              {PHONE}
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="Главная" className="pt-16 min-h-screen flex items-center hero-gradient relative overflow-hidden">
        <div className="absolute top-20 right-[-100px] w-80 h-80 opacity-20 blob" style={{ background: "var(--fruit-orange)" }} />
        <div className="absolute bottom-20 left-[-60px] w-60 h-60 opacity-15 blob" style={{ background: "var(--fruit-green)" }} />

        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: "#FFF3E0", color: "var(--fruit-orange)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse inline-block" style={{ background: "var(--fruit-orange)" }} />
              Свежие фрукты каждый день
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6" style={{ color: "#1A1A1A" }}>
              Вкус спелых{" "}
              <span className="relative inline-block" style={{ color: "var(--fruit-orange)" }}>
                фруктов
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 Q100 2 198 8" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              — прямо к вашему столу!
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Заказывайте свежие фрукты по телефону — привезём сами или заберите самовывозом. Быстро, удобно, вкусно!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-transform hover:scale-105 shadow-lg"
                style={{ background: "var(--fruit-orange)" }}
              >
                <Icon name="Phone" size={22} />
                Позвонить и заказать
              </a>
              <button
                onClick={() => scrollTo("Каталог")}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg border-2 transition-all hover:scale-105 bg-white"
                style={{ borderColor: "var(--fruit-green)", color: "var(--fruit-green)" }}
              >
                Смотреть каталог
                <Icon name="ArrowRight" size={20} />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              {[
                { icon: "Truck", label: "Доставка за 2 часа" },
                { icon: "Leaf", label: "Только свежее" },
                { icon: "Star", label: "1000+ клиентов" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <Icon name={icon} size={18} style={{ color: "var(--fruit-green)" }} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center animate-fade-in">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl animate-float" style={{ border: "6px solid var(--fruit-yellow)" }}>
              <img
                src="https://cdn.poehali.dev/projects/a699812e-e408-4214-8e18-d2e33a1f4fbb/files/90c7ef35-49ed-4f69-bcec-de492689ff83.jpg"
                alt="Свежие фрукты"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 md:right-0 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <div>
                <div className="font-bold text-sm text-gray-800">Доставка</div>
                <div className="text-xs text-gray-500">от 200 ₽</div>
              </div>
            </div>
            <div className="absolute bottom-8 left-0 md:-left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <div>
                <div className="font-bold text-sm text-gray-800">4.9 / 5</div>
                <div className="text-xs text-gray-500">Отзывы покупателей</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* АКЦИИ */}
      <section id="Акции" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-4xl font-black mb-3" style={{ color: "#1A1A1A" }}>🔥 Акции и скидки</h2>
            <p className="text-gray-500 text-lg">Успей воспользоваться выгодными предложениями</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {promotions.map((promo) => (
              <div key={promo.title} className={`bg-gradient-to-br ${promo.color} rounded-3xl p-7 text-white shadow-lg card-hover`}>
                <div className="text-5xl mb-4">{promo.emoji}</div>
                <h3 className="text-xl font-black mb-2">{promo.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{promo.desc}</p>
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="mt-5 inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                >
                  <Icon name="Phone" size={14} />
                  Узнать подробнее
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КАТАЛОГ */}
      <section id="Каталог" className="py-20" style={{ background: "var(--fruit-bg)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-4xl font-black mb-3" style={{ color: "#1A1A1A" }}>🛒 Наш каталог</h2>
            <p className="text-gray-500 text-lg">Свежайшие фрукты по отличным ценам</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {fruits.map((fruit) => (
              <div key={fruit.name} className="bg-white rounded-3xl p-5 shadow-sm card-hover relative overflow-hidden">
                {fruit.badge && (
                  <div
                    className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full text-white"
                    style={{
                      background: fruit.badge === "Акция" ? "var(--fruit-orange)"
                        : fruit.badge === "Хит" ? "var(--fruit-red)"
                        : "var(--fruit-green)"
                    }}
                  >
                    {fruit.badge}
                  </div>
                )}
                <div className="text-5xl mb-3 text-center">{fruit.emoji}</div>
                <h3 className="font-black text-lg text-center text-gray-800 mb-1">{fruit.name}</h3>
                <p className="text-gray-400 text-xs text-center mb-3">{fruit.desc}</p>
                <div className="text-center font-bold text-base" style={{ color: "var(--fruit-orange)" }}>{fruit.price}</div>
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="mt-3 w-full flex items-center justify-center gap-1 py-2 rounded-xl text-white text-sm font-semibold transition-transform hover:scale-105"
                  style={{ background: "var(--fruit-green)" }}
                >
                  <Icon name="Phone" size={13} />
                  Заказать
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 mb-4">Не нашли нужный фрукт? Позвоните — у нас большой выбор!</p>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-lg transition-transform hover:scale-105"
              style={{ background: "var(--fruit-orange)" }}
            >
              <Icon name="Phone" size={20} />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ДОСТАВКА */}
      <section id="Доставка" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-4xl font-black mb-3" style={{ color: "#1A1A1A" }}>🚚 Доставка и самовывоз</h2>
            <p className="text-gray-500 text-lg">Выберите удобный для вас способ</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl p-8 shadow-sm card-hover" style={{ background: "#FFF3E0" }}>
              <div className="text-4xl mb-5">🚚</div>
              <h3 className="text-2xl font-black mb-4 text-gray-800">Доставка на дом</h3>
              <ul className="space-y-3 text-gray-600 text-sm font-medium">
                <li>⏱️ Доставка в течение 2 часов</li>
                <li>💰 От 200 ₽ за доставку</li>
                <li>🎁 Бесплатно при заказе от 1500 ₽</li>
                <li>📍 Доставляем по всему городу</li>
                <li>🕐 Работаем с 8:00 до 22:00</li>
              </ul>
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-transform hover:scale-105"
                style={{ background: "var(--fruit-orange)" }}
              >
                <Icon name="Phone" size={16} />
                Заказать доставку
              </a>
            </div>

            <div className="rounded-3xl p-8 shadow-sm card-hover" style={{ background: "#F0FFF4" }}>
              <div className="text-4xl mb-5">🏪</div>
              <h3 className="text-2xl font-black mb-4 text-gray-800">Самовывоз</h3>
              <ul className="space-y-3 text-gray-600 text-sm font-medium">
                <li>🆓 Самовывоз абсолютно бесплатно</li>
                <li>⚡ Заберите в любое удобное время</li>
                <li>📍 Адрес уточняйте по телефону</li>
                <li>🕐 Работаем с 8:00 до 21:00</li>
                <li>✅ Товар будет ждать вас готовым</li>
              </ul>
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-transform hover:scale-105"
                style={{ background: "var(--fruit-green)" }}
              >
                <Icon name="Phone" size={16} />
                Уточнить адрес
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* О НАС */}
      <section id="О нас" className="py-20" style={{ background: "var(--fruit-bg)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-4xl font-black mb-3" style={{ color: "#1A1A1A" }}>🌿 О нас</h2>
            <p className="text-gray-500 text-lg">Почему выбирают нас?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Мы — команда энтузиастов, которая любит свежие фрукты и хочет поделиться этой любовью с вами. Работаем напрямую с поставщиками, чтобы каждый фрукт был самым свежим и вкусным.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Уже более 5 лет мы доставляем радость на столы наших клиентов. Более 1000 довольных покупателей — лучшая награда для нас!
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "5+", label: "лет работы" },
                  { num: "1000+", label: "клиентов" },
                  { num: "50+", label: "видов фруктов" },
                ].map(({ num, label }) => (
                  <div key={label} className="text-center bg-white rounded-2xl p-4 shadow-sm">
                    <div className="text-3xl font-black" style={{ color: "var(--fruit-orange)" }}>{num}</div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🌱", title: "Свежесть", desc: "Фрукты поступают ежедневно от проверенных поставщиков" },
                { emoji: "💎", title: "Качество", desc: "Каждая партия проходит строгий контроль качества" },
                { emoji: "❤️", title: "Забота", desc: "Подберём лучшие фрукты специально для вас" },
                { emoji: "⚡", title: "Скорость", desc: "Доставим ваш заказ в течение 2 часов" },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-5 shadow-sm card-hover">
                  <div className="text-3xl mb-2">{emoji}</div>
                  <h4 className="font-black text-gray-800 mb-1">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="Контакты" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-4xl font-black mb-3" style={{ color: "#1A1A1A" }}>📞 Контакты</h2>
            <p className="text-gray-500 text-lg">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-3xl p-10 text-center mb-8 shadow-lg"
              style={{ background: "linear-gradient(135deg, var(--fruit-orange), #FFD700)" }}
            >
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-3xl font-black text-white mb-2">Позвоните нам!</h3>
              <p className="text-white/90 mb-6 text-lg">Принимаем заказы по телефону каждый день</p>
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-2xl font-black text-2xl shadow-lg transition-transform hover:scale-105"
                style={{ color: "var(--fruit-orange)" }}
              >
                <Icon name="Phone" size={28} />
                {PHONE}
              </a>
              <p className="text-white/80 mt-4 text-sm">Работаем с 8:00 до 22:00 без выходных</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                { emoji: "🕐", title: "Режим работы", desc: "Пн–Вс: 8:00 – 22:00" },
                { emoji: "📍", title: "Самовывоз", desc: "Адрес уточняйте по телефону" },
                { emoji: "🚚", title: "Зона доставки", desc: "По всему городу и пригороду" },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="text-center bg-gray-50 rounded-2xl p-5">
                  <div className="text-3xl mb-2">{emoji}</div>
                  <div className="font-black text-gray-800 mb-1">{title}</div>
                  <div className="text-gray-500 text-sm">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center" style={{ background: "#1A1A1A" }}>
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-2xl">🍊</span>
          <span className="font-pacifico text-lg text-white">ФруктоМаркет</span>
        </div>
        <p className="text-gray-400 text-sm">Свежие фрукты с доставкой на дом</p>
        <a
          href={`tel:${PHONE.replace(/\D/g, "")}`}
          className="inline-flex items-center gap-2 mt-3 text-sm font-semibold"
          style={{ color: "var(--fruit-yellow)" }}
        >
          <Icon name="Phone" size={14} />
          {PHONE}
        </a>
      </footer>

      {/* Floating call button (mobile) */}
      <a
        href={`tel:${PHONE.replace(/\D/g, "")}`}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 md:hidden transition-transform hover:scale-110"
        style={{ background: "var(--fruit-green)" }}
      >
        <Icon name="Phone" size={28} className="text-white" />
      </a>
    </div>
  );
}