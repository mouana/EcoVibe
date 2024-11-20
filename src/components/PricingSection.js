import React from 'react';

const plans = [
  {
    title: 'Basic Plan',
    tag: 'Package',
    price: '$40.00',
    duration: '/Per month',
    features: [
      'Initial Consultation',
      'Labor Costs',
      'Materials and Plants',
      'Equipment and Machinery',
    ],
    buttonText: 'Purchase',
  },
  {
    title: 'Standard Plan',
    tag: 'Package',
    price: '$80.00',
    duration: '/Per month',
    features: [
      'Initial Consultation',
      'Labor Costs',
      'Materials and Plants',
      'Equipment and Machinery',
      'Permits and Inspection Fees',
    ],
    buttonText: 'Purchase',
  },
  {
    title: 'Premium Plan',
    tag: 'Promo',
    price: '$120.00',
    duration: '/Per month',
    features: [
      'Initial Consultation',
      'Labor Costs',
      'Materials and Plants',
      'Equipment and Machinery',
      'Permits and Inspection Fees',
      'Maintenance Packages',
    ],
    buttonText: 'Purchase',
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Tableau <span className="text-green-600">des tarifs</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative w-full md:w-1/3 bg-white rounded-xl shadow-lg border ${
                index === 1 ? '' : 'border-gray-200'
              }`}
            >
              {/* Badge */}
              <div
                className={`absolute top-4 right-4 px-4 py-1 rounded-full text-white text-sm font-medium ${
                  index === 2 ? 'bg-green-600' : 'bg-gray-400'
                }`}
              >
                {plan.tag}
              </div>

              {/* Title */}
              <div className="px-6 py-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">{plan.title}</h3>
                <div className="text-5xl font-extrabold text-green-600">{plan.price}</div>
                <p className="text-gray-500 text-sm">{plan.duration}</p>
              </div>

              {/* Features */}
              <ul className="px-6 py-4 space-y-3 border-t border-gray-200">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-gray-700">
                    <span className="text-green-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="px-6 py-4">
                <button className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
