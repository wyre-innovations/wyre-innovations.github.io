import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss your clean energy
            requirements. We're here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We're committed to providing exceptional service and support.
                Reach out to us through any of the following channels.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex-shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Our Office
                  </h3>
                  <p className="text-gray-600">
                    B-122, Shiv Bux Park, Old Gangaram School Building
                    <br />
                    Nangloi, New Delhi 110041
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex-shrink-0 shadow-sm">
                  <Phone className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="tel:+919034169378"
                      className="hover:text-primary-700 transition-colors duration-200"
                    >
                      +91-9034169378
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex-shrink-0 shadow-sm">
                  <Mail className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:contact@wyreinnovations.com"
                      className="hover:text-primary-700 transition-colors duration-200"
                    >
                      contact@wyreinnovations.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex-shrink-0 shadow-sm">
                  <Clock className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Business Hours
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              See location on map
            </h2>

            <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4092623639904!2d77.06995627528374!3d28.677401682042063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d050068d2574d%3A0x57a42adeb8f35ff8!2sWyre%20Innovations%20Private%20Limited!5e0!3m2!1sen!2sin!4v1758092565728!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wyre Innovations Office Location - Nangloi, New Delhi"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="card p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Wyre Innovations?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-700 mb-2">
                  5+
                </div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-700 mb-2">
                  100%
                </div>
                <p className="text-gray-600">Quality Assurance</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-700 mb-2">
                  24/7
                </div>
                <p className="text-gray-600">Technical Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
