'use client'
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ArrowRight, Leaf, Truck, Sun, Menu, X, MapPin, Phone } from "lucide-react";
import Shiitake from '../public/shitake_mushroom.webp'
import Oyster from '../public/american_oyester_mushroom.webp'
import Portobello from '../public/portobello_mushrrom.webp'
import Image from "next/image";

const mushroomImages = {
  Shiitake,
  Oyster,
  Portobello
};

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>SP Harvest - Premium Organic Mushrooms | Paluwalgala Road, Koswatta, Nattandiya</title>
        <meta name="description"
              content="SP Harvest is Sri Lanka&apos;s leading organic mushroom farm located on Paluwalgala Road, Koswatta, Nattandiya. We offer premium Shiitake, Oyster, and Portobello mushrooms grown sustainably in the perfect climate of Sri Lanka. Buy fresh, locally grown mushrooms today!"/>
        <meta name="keywords"
              content="organic mushrooms Koswatta, SP Harvest Paluwalgala Road, Shiitake mushrooms Nattandiya, Oyster mushrooms Koswatta, Portobello mushrooms, sustainable farming Sri Lanka, farm-to-table Koswatta, fresh mushrooms Paluwalgala Road, best mushroom farm Nattandiya, buy organic mushrooms Sri Lanka"/>
        <meta property="og:title" content="SP Harvest - Premium Organic Mushroom Farm | Paluwalgala Road, Koswatta, Nattandiya"/>
        <meta property="og:description"
              content="Discover Sri Lanka&apos;s finest organic mushrooms from SP Harvest on Paluwalgala Road, Koswatta, Nattandiya. We grow premium Shiitake, Oyster, and Portobello varieties in our state-of-the-art farm. Order fresh, locally grown mushrooms today!"/>
        <meta property="og:image" content="https://www.spharvest.com/images/organic-mushrooms-sp-harvest.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="geo.region" content="LK"/>
        <meta name="geo.placename" content="Koswatta"/>
        <link rel="canonical" href="https://www.spharvest.com"/>
        <link rel="alternate" hreflang="en" href="https://www.spharvest.com"/>
        <link rel="alternate" hreflang="si" href="https://www.spharvest.com/si"/>
        <link rel="alternate" hreflang="ta" href="https://www.spharvest.com/ta"/>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <header className="bg-gradient-to-r from-green-800 to-green-600 text-white p-4 fixed w-full z-10 backdrop-blur-sm bg-opacity-95 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight">
              <a
                  href="/"
                  title="SP Harvest - Organic Mushroom Farm"
                  className="text-white hover:text-green-100 transition-colors duration-300"
              >
                SP Harvest
              </a>
            </h1>
            <nav
                aria-label="Main navigation"
                className={`${
                  isMenuOpen 
                    ? "flex flex-col absolute top-full left-0 right-0 bg-gradient-to-r from-green-800 to-green-600 p-6 shadow-lg backdrop-blur-sm bg-opacity-95 transition-all duration-300 ease-in-out" 
                    : "hidden"
                } justify-between md:flex md:items-center md:space-x-8`}
            >
              <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
                {["Home", "About", "Products", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      onClick={() => setIsMenuOpen(false)}
                      href={`#${item.toLowerCase()}`}
                      className="text-lg hover:text-green-200 transition-all duration-300 ease-in-out relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-200 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className="text-white md:hidden hover:text-green-200 transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={28} aria-hidden="true" />
              ) : (
                <Menu size={28} aria-hidden="true" />
              )}
            </button>
          </div>
        </header>

        <main>
          <section id="home" className="relative bg-gradient-to-b from-green-700 via-green-600 to-green-500 text-white py-48">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
            <div className="container mx-auto text-center relative z-1 px-4">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Sri Lanka&apos;s Premium <span className="text-green-200">Organic Mushrooms</span>
              </h1>
              <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto">
                Experience the finest locally grown organic mushrooms from SP Harvest. 
                Sustainably cultivated in the perfect climate of Sri Lanka.
              </p>
              <div className="flex justify-center items-center space-x-6 mb-10">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-200 mr-2" />
                  <span>Paluwalgala Road, Koswatta, Nattandiya</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-200 mr-2" />
                  <a href="tel:+94776983904" className="hover:text-green-200 transition-colors">+94 77 698 3904</a>
                </div>
              </div>
              <a
                href="#products"
                className="inline-flex items-center bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                Explore Our Products
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </section>

          <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
                Why Choose <span className="text-green-700">SP Harvest</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    icon: Leaf,
                    title: "Local Sustainable Farming",
                    description: "Our mushrooms are grown using eco-friendly practices in Sri Lanka's perfect climate conditions."
                  },
                  {
                    icon: Truck,
                    title: "Island-wide Delivery",
                    description: "Fresh delivery across Sri Lanka, from our farm to your doorstep within hours."
                  },
                  {
                    icon: Sun,
                    title: "Sri Lankan Quality",
                    description: "Certified organic mushrooms grown to the highest standards in our local facilities."
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 bg-gray-50 group hover:-translate-y-2">
                    <item.icon
                      className="mx-auto text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300"
                      size={56}
                      aria-hidden="true"
                    />
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="products" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                Our Premium <span className="text-green-700">Local Mushroom Selection</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    name: "Shiitake",
                    description: "Premium quality Shiitake mushrooms, grown in controlled environments in Sri Lanka.",
                    price: "Rs. 1200/250g"
                  },
                  {
                    name: "Oyster",
                    description: "Fresh local Oyster mushrooms, perfect for Sri Lankan cuisine.",
                    price: "Rs. 800/250g"
                  },
                  {
                    name: "Portobello",
                    description: "Large, meaty Portobello mushrooms grown in our Sri Lankan facilities.",
                    price: "Rs. 1000/250g"
                  }
                ].map((mushroom, index) => (
                  <article
                    key={mushroom.name}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={mushroomImages[mushroom.name]}
                        alt={`Fresh ${mushroom.name} mushrooms from SP Harvest Sri Lanka`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        quality={85}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{mushroom.name}</h3>
                      <p className="text-gray-600 mb-4">{mushroom.description}</p>
                      <p className="text-green-700 font-semibold">{mushroom.price}</p>
                      <a
                        href={`https://wa.me/94776983904?text=I&apos;m interested in ${mushroom.name} mushrooms`}
                        className="mt-4 inline-flex items-center text-green-700 hover:text-green-800 transition-colors"
                      >
                        Order via WhatsApp
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                Contact <span className="text-green-700">SP Harvest</span>
              </h2>
              <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Visit Our Farm</h3>
                    <p className="text-gray-600 mb-4">
                      SP Harvest Organic Mushroom Farm<br />
                      Paluwalgala Road<br />
                      Koswatta<br />
                      Nattandiya<br />
                      Sri Lanka
                    </p>
                    <div className="space-y-2">
                      <a href="tel:+94776983904" className="flex items-center text-green-700 hover:text-green-800">
                        <Phone className="w-5 h-5 mr-2" />
                        +94 77 698 3904
                      </a>
                      <a href="https://wa.me/94776983904" className="flex items-center text-green-700 hover:text-green-800">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} SP Harvest Organic Mushroom
              Farm. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
