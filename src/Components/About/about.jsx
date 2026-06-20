function About() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            About Us
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Delivering premium quality sportswear to clients
            around the world with excellence, innovation,
            and reliability.
          </p>

        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Who We Are
          </h2>

          <p className="mt-8 text-lg text-gray-600 text-center max-w-4xl mx-auto">
            We are a leading manufacturer and exporter of
            sportswear, gym wear, tracksuits, hoodies,
            team uniforms, and custom athletic apparel.
            Our commitment to quality, craftsmanship,
            and customer satisfaction has helped us build
            strong partnerships across international markets.
          </p>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-3xl font-bold">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-600">
              To provide premium quality sportswear
              that combines performance, comfort,
              and modern design while maintaining
              international manufacturing standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-4 text-gray-600">
              To become a globally trusted sportswear
              manufacturing partner known for quality,
              innovation, and long-term business relationships.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="text-center">
              <h3 className="text-2xl font-semibold">
                Premium Materials
              </h3>

              <p className="mt-3 text-gray-600">
                High-quality fabrics and durable production.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold">
                Worldwide Shipping
              </h3>

              <p className="mt-3 text-gray-600">
                Reliable export services for global clients.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold">
                Custom Manufacturing
              </h3>

              <p className="mt-3 text-gray-600">
                Private label and custom branding solutions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="text-center px-6">

          <h2 className="text-4xl font-bold">
            Let's Build Something Great Together
          </h2>

          <p className="mt-4 text-lg">
            Contact us today for bulk orders,
            private labeling, and export inquiries.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold cursor-pointer">
            Contact Us
          </button>

        </div>
      </section>

    </main>
  );
}

export default About;