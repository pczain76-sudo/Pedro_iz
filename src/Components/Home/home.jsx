import Contact from "../../../../React_Router/src/components/contact/contact"
import { Link } from "react-router-dom";
function Home() {
  return (
    <main>

      {/* HERO SECTION */}
<section className="relative min-h-screen flex items-center overflow-hidden justify-center">

  {/* Background Image */}
  <img
    src='hero.jpg'
    alt="Sportswear pic"
    className="absolute inset-0 w-full h-full object-cover"
  />
  

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>


  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

    <p className="uppercase tracking-[5px] text-4xl text-gray-300 flex justify-center mt-5 underline underline-offset-10  ">
      PEDRO SportsWear
    </p>


    <h1 className="mt-5 text-4xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-5xl">
      We Create
      <span className="text-blue-500"> Premium </span>
      Sportswear
      For The World
    </h1>


    <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-200">
      Manufacturer and exporter of high-performance sportswear,
      gym wear, team uniforms and custom apparel trusted by
      global brands.
    </p>


   {/* Buttons */}
<div className="mt-10 flex flex-wrap gap-5">

  <Link
    to="/products"
    className="
    bg-white 
    text-black 
    px-8 
    py-4 
    rounded-full 
    font-semibold
    hover:bg-gray-200
    transition
    "
  >
    Explore Collection
  </Link>


  <Link
    to="/contact"
    className="
    border 
    border-white 
    px-8 
    py-4 
    rounded-full 
    font-semibold
    hover:bg-white
    hover:text-black
    transition
    "
  >
    Contact Us
  </Link>

</div>

    {/* Trust Stats */}
    <div className="mt-16 flex flex-wrap gap-12">

      <div>
        <h3 className="text-3xl font-bold">
          1+
        </h3>
        <p className="text-gray-300">
          Years Experience
        </p>
      </div>


      <div>
        <h3 className="text-3xl font-bold">
          25+
        </h3>
        <p className="text-gray-300">
          Countries Exported
        </p>
      </div>


      <div>
        <h3 className="text-3xl font-bold">
          3K+
        </h3>
        <p className="text-gray-300">
          Products Delivered
        </p>
      </div>

    </div>


  </div>

</section>

      {/* ABOUT PREVIEW */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Trusted Sportswear Exporter
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            We specialize in custom sportswear manufacturing
            with international quality standards and reliable
            worldwide shipping.
          </p>

        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Featured Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-semibold">
                Tracksuits
              </h3>

              <p className="mt-3 text-gray-600">
                Premium quality tracksuits for teams and athletes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-semibold">
                Gym Wear
              </h3>

              <p className="mt-3 text-gray-600">
                Modern gym apparel with comfort and performance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-semibold">
                Team Uniforms
              </h3>

              <p className="mt-3 text-gray-600">
                Custom football, cricket and basketball uniforms.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">

            <div className="text-center">
              <h3 className="text-2xl font-semibold">
                Premium Quality
              </h3>

              <p className="mt-3 text-gray-600">
                High-quality fabrics and durable stitching.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold">
                Worldwide Export
              </h3>

              <p className="mt-3 text-gray-600">
                Supplying sportswear to international clients.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold">
                Custom Manufacturing
              </h3>

              <p className="mt-3 text-gray-600">
                Private label and custom branding services.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready To Place Your Order?
          </h2>

          <p className="mt-4 text-lg">
            Contact us today for wholesale and bulk inquiries.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold cursor-pointer">
            <Link to='/contact'>
            Contact Us for Query
            </Link>
          </button>

        </div>
      </section>

    </main>
  )
}

export default Home