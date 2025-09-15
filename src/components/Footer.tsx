import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg shadow-md">
                <Image
                  src="/logo.png"
                  alt="Wyre Innovations Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Wyre Innovations
              </span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Leading OEM provider of sine wave inverters, solar inverters, MPPT
              controllers, and Li-ion BMS solutions for clean energy storage.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">
                  B-122, Shiv Bux Park, Old Gangaram School Building
                  <br />
                  Nangloi, New Delhi 110041
                  <br />
                  India
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91-9034169378</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@wyreinnovations.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary-700 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-primary-700 transition-colors duration-200"
                >
                  OEM
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary-700 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* OEM */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">OEM</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products#home-ups"
                  className="text-gray-600 hover:text-primary-700 transition-colors duration-200"
                >
                  Sine Wave Inverter
                </Link>
              </li>
              <li>
                <Link
                  href="/products#solar-inverter"
                  className="text-gray-600 hover:text-primary-700 transition-colors duration-200"
                >
                  Solar Inverter
                </Link>
              </li>
              <li>
                <Link
                  href="/products#mppt-controller"
                  className="text-gray-600 hover:text-primary-700 transition-colors duration-200"
                >
                  MPPT Controller (Standalone)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              Copyright © {currentYear} Wyre Innovations. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="https://www.crunchbase.com/organization/wyre-innovations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-700 transition-colors duration-200 text-sm"
              >
                Crunchbase
              </Link>
              <Link
                href="https://github.com/Wyre-Innovations/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-700 transition-colors duration-200 text-sm"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/company/wyre-innovations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-700 transition-colors duration-200 text-sm"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
