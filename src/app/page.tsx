import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Battery, Zap, Shield, Leaf } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Battery,
      title: "Customised for you",
      description:
        "Tailored solutions designed to meet your specific requirements and applications.",
    },
    {
      icon: Zap,
      title: "Efficient",
      description:
        "High-performance systems optimized for maximum energy conversion and minimal losses.",
    },
    {
      icon: Shield,
      title: "Support available",
      description:
        "Comprehensive technical support and assistance throughout your project lifecycle.",
    },
    {
      icon: Leaf,
      title: "Using reliable components",
      description:
        "Built with high-quality, tested components for long-lasting performance and durability.",
    },
  ];

  const products = [
    {
      name: "Sine Wave Inverter",
      description:
        "Reliable backup power solutions for residential applications",
      image: "/images/home-ups.jpg",
      href: "/products#home-ups",
    },
    {
      name: "Solar Inverter (Off-Grid)",
      description:
        "Complete solar power systems for independent energy generation",
      image: "/images/solar-inverter.jpg",
      href: "/products#solar-inverter",
    },
    {
      name: "MPPT Charge Controller (Standalone)",
      description:
        "Maximum power point tracking for optimal solar energy harvesting",
      image: "/images/mppt-controller.jpg",
      href: "/products#mppt-controller",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Clean Energy Solutions for a{" "}
              <span className="text-gradient-green">Sustainable Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
              Leading OEM provider of sine wave inverters, solar inverters, MPPT
              controllers, and Li-ion BMS solutions for clean energy storage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                href="/products"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Explore
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Wyre Innovations?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We partner with manufacturing firms and supply them with
              high-quality OEM components for clean energy solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card card-hover p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                  <feature.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 energy-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our OEM Range
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive clean energy solutions designed for reliability and
              efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={product.name}
                href={product.href}
                className="card card-hover group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center shadow-inner">
                  <Image
                    src="/logo.png"
                    alt="Wyre Innovations Logo"
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center text-primary-700 font-medium group-hover:translate-x-1 transition-transform duration-200">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="btn-primary inline-flex items-center justify-center group"
            >
              View All
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Power Your Future?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your clean energy requirements
            and find the perfect solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
}
