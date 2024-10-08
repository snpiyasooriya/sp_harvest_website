'use client'
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ArrowRight, Leaf, Truck, Sun, Menu, X } from "lucide-react";

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
        <title>SP Harvest - Premium Organic Mushrooms | Sustainably Grown in SRI LANKA</title>
        <meta name="description"
              content="SP Harvest offers fresh, sustainably grown organic mushrooms. Discover our premium Shiitake, Oyster, and Portobello varieties. Order now for farm-to-table freshness!"/>
        <meta name="keywords"
              content="organic mushrooms, SP Harvest, Shiitake, Oyster, Portobello, sustainable farming, farm-to-table"/>
        <meta property="og:title" content="SP Harvest - Premium Organic Mushrooms | Sustainably Grown"/>
        <meta property="og:description"
              content="Discover fresh, sustainably grown organic mushrooms from SP Harvest. Premium Shiitake, Oyster, and Portobello varieties available for farm-to-table freshness."/>
        <meta property="og:image" content="https://www.spharvest.com/images/organic-mushrooms-sp-harvest.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <link rel="canonical" href="https://www.spharvest.com"/>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <header className="bg-green-700 text-white p-4 fixed w-full z-10">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <a
                  href="/"
                  title="SP Harvest - Organic Mushroom Farm"
                  className="text-white"
              >
                SP Harvest
              </a>
            </h1>
            <nav
                aria-label="Main navigation"
                className={`${isMenuOpen ? "flex flex-col absolute top-full left-0 right-0 bg-green-700 p-4 shadow-md" : "hidden"} justify-between md:flex md:items-center md:space-x-4`}
            >
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <li>
                  <a
                      onClick={() => setIsMenuOpen(false)}
                      href="#home"
                      className="hover:underline text-white transition-all transition-duration: 150ms  ease-in-out"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setIsMenuOpen(false)}
                    href="#about"
                    className="hover:underline text-white transition-all duration-500 ease-in-out"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setIsMenuOpen(false)}
                    href="#products"
                    className="hover:underline text-white transition-all duration-500 ease-in-out"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:underline text-white transition-all duration-500 ease-in-out"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <button
              className="text-white md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </header>

        <main>
          <section id="home" className="bg-green-600 text-white py-40">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">
                Discover the Magic of Organic Mushrooms
              </h2>
              <p className="text-xl mb-8">
                Sustainably grown, deliciously fresh organic mushrooms from SP
                Harvest
              </p>
              <a
                href="#products"
                className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-100 transition duration-300"
              >
                Explore Our Organic Mushroom Products
              </a>
            </div>
          </section>

          <section id="about" className="py-16">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
                About SP Harvest Organic Mushroom Farm
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Leaf
                    className="mx-auto text-green-600 mb-4"
                    size={48}
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-green-700">
                    Sustainable Organic Farming
                  </h3>
                  <p className="text-gray-700">
                    We use eco-friendly practices to grow our organic mushrooms.
                  </p>
                </div>
                <div className="text-center">
                  <Truck
                    className="mx-auto text-green-600 mb-4"
                    size={48}
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-green-700">
                    Fresh Farm-to-Table Delivery
                  </h3>
                  <p className="text-gray-700">
                    From our organic farm to your table in record time.
                  </p>
                </div>
                <div className="text-center">
                  <Sun
                    className="mx-auto text-green-600 mb-4"
                    size={48}
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-green-700">
                    Quality Guaranteed Organic Mushrooms
                  </h3>
                  <p className="text-gray-700">
                    We ensure the highest quality in every organic mushroom.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="products" className="bg-gray-100 py-16">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Our Organic Mushroom Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {["Shiitake", "Oyster", "Portobello"].map((mushroom) => (
                  <article
                    key={mushroom}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={`/images/${mushroom.toLowerCase()}-mushrooms.jpg`}
                      alt={`Fresh organic ${mushroom} mushrooms from SP Harvest`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        Organic {mushroom} Mushrooms
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Fresh, organic {mushroom.toLowerCase()} mushrooms grown
                        sustainably at SP Harvest.
                      </p>
                      <a
                        href={`/products/${mushroom.toLowerCase()}-mushrooms`}
                        className="flex items-center text-green-600 font-semibold hover:underline"
                      >
                        Learn more about our organic {mushroom.toLowerCase()}{" "}
                        mushrooms{" "}
                        <ArrowRight
                          className="ml-2"
                          size={16}
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-16">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Contact SP Harvest Organic Mushroom Farm
              </h2>
              <form
                className="max-w-lg mx-auto"
                name="contact"
                method="POST"
                data-netlify="true"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
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
