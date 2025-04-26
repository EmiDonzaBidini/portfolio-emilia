import React from "react";
import { services } from "../../portfolio";

export default function Services() {
  return (
    <section id="services" className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">{services.title}</h2>
      <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-10 whitespace-pre-line">
        {services.description}
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {services.offerings.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
      <p className="text-center mt-8 text-lg font-medium text-gray-800">
        {services.contactPrompt}
      </p>
    </section>
  );
}