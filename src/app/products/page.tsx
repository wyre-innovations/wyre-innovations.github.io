"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Battery,
  Zap,
  Shield,
  Gauge,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  applications: string[];
  icon: React.ComponentType<any>;
}

const products: Product[] = [
  {
    id: "home-ups",
    name: "Sine Wave Inverter Systems",
    category: "Uninterruptible Power Supply",
    description:
      "Reliable backup power solutions designed for residential applications, ensuring continuous power supply during outages.",
    features: [
      "Pure sine wave output",
      "Intelligent battery management",
      "Overload protection",
      "LCD display with status indicators",
      "Automatic voltage regulation",
      "Silent operation",
    ],
    specifications: {
      "Power Rating": "600VA - 5000VA",
      "Input Voltage": "160V - 280V AC",
      "Output Voltage": "220V ± 10% AC",
      Frequency: "50Hz ± 1%",
      "Battery Type": "Lead Acid / Li-ion",
      Efficiency: "> 85%",
      "Transfer Time": "< 10ms",
    },
    applications: [
      "Home lighting and fans",
      "Computer and networking equipment",
      "Television and entertainment systems",
      "Security systems",
      "Medical equipment (home use)",
    ],
    icon: Battery,
  },
  {
    id: "solar-inverter",
    name: "Solar Inverter (Off-Grid)",
    category: "Solar Power Systems",
    description:
      "Complete off-grid solar power systems that convert DC power from solar panels to AC power for household use.",
    features: [
      "MPPT charge controller integrated",
      "Pure sine wave output",
      "Battery priority modes",
      "Solar priority operation",
      "Remote monitoring capability",
      "Weather-resistant design",
    ],
    specifications: {
      "Power Rating": "1KW - 10KW",
      "Input Voltage (DC)": "12V / 24V / 48V",
      "Output Voltage (AC)": "220V ± 5%",
      "Solar Input": "150V - 450V DC",
      "MPPT Efficiency": "> 99%",
      "Overall Efficiency": "> 90%",
      "Operating Temperature": "-10°C to +60°C",
    },
    applications: [
      "Rural electrification",
      "Remote cabins and cottages",
      "Agricultural applications",
      "Telecom towers",
      "Emergency backup systems",
    ],
    icon: Zap,
  },
  {
    id: "mppt-controller",
    name: "MPPT Charge Controller (Standalone)",
    category: "Solar Charge Controllers",
    description:
      "Advanced Maximum Power Point Tracking controllers for optimal solar energy harvesting and battery charging.",
    features: [
      "Advanced MPPT algorithm",
      "Multi-stage charging",
      "Temperature compensation",
      "Programmable parameters",
      "Data logging capability",
      "Protection against reverse polarity",
    ],
    specifications: {
      "Current Rating": "10A - 100A",
      "System Voltage": "12V / 24V / 48V Auto",
      "Max PV Voltage": "150V",
      "MPPT Efficiency": "> 99.5%",
      "Self Consumption": "< 10mA",
      "Operating Temperature": "-35°C to +60°C",
      "Protection Rating": "IP32",
    },
    applications: [
      "Solar home systems",
      "RV and marine applications",
      "Street lighting systems",
      "Water pumping systems",
      "Battery charging stations",
    ],
    icon: Gauge,
  },
];

export default function ProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else if (prev.length < 3) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const handleCompare = () => {
    if (selectedProducts.length >= 2) {
      setShowComparison(true);
    }
  };

  const selectedProductsData = products.filter((p) =>
    selectedProducts.includes(p.id),
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our OEM Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of OEM components for manufacturing partners,
            designed for reliability, efficiency, and sustainability.
          </p>
        </div>

        {/* Comparison Controls */}
        {!showComparison && (
          <div className="mb-8 p-4 bg-gradient-to-r from-primary-50 to-green-50 rounded-lg border border-primary-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-700">
                Select OEM solutions to compare (up to 3):{" "}
                {selectedProducts.length}/3 selected
              </div>
              <button
                onClick={handleCompare}
                disabled={selectedProducts.length < 2}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedProducts.length >= 2
                    ? "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-md hover:shadow-lg transform hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Compare Selected ({selectedProducts.length})
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {!showComparison && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className="card card-hover overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg shadow-sm">
                      <product.icon className="w-6 h-6 text-primary-700" />
                    </div>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleProductSelection(product.id)}
                        className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-600">Compare</span>
                    </label>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-primary-700 font-medium mb-3">
                    {product.category}
                  </p>
                  <p className="text-gray-600">{product.description}</p>
                </div>

                {/* Features */}
                <div className="p-6 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Applications
                  </h4>
                  <ul className="space-y-1">
                    {product.applications.slice(0, 3).map((app, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        • {app}
                      </li>
                    ))}
                    {product.applications.length > 3 && (
                      <li className="text-sm text-gray-500">
                        +{product.applications.length - 3} more...
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Comparison View */}
        {showComparison && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                OEM Solution Comparison
              </h2>
              <button
                onClick={() => setShowComparison(false)}
                className="btn-secondary"
              >
                Back to OEM Solutions
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gradient-to-r from-primary-50 to-green-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Feature
                    </th>
                    {selectedProductsData.map((product) => (
                      <th
                        key={product.id}
                        className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                      >
                        {product.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Specifications Comparison */}
                  {Object.keys(
                    selectedProductsData[0]?.specifications || {},
                  ).map((spec) => (
                    <tr key={spec} className="bg-white hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {spec}
                      </td>
                      {selectedProductsData.map((product) => (
                        <td
                          key={product.id}
                          className="px-6 py-4 text-sm text-gray-600"
                        >
                          {product.specifications[spec] || "N/A"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary-50 via-green-50 to-emerald-50 rounded-2xl p-8 border border-primary-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Choosing the Right OEM Solution?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our technical team is ready to help you select the perfect OEM
            components for your manufacturing requirements.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center justify-center group"
          >
            Get Expert Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}
