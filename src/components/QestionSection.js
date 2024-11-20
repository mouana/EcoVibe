import React, { useState } from 'react';

const questions = [
  {
    question: 'Do you specialize in both residential and commercial landscaping?',
    answer:
      "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
  },
  {
    question: 'Do you provide sustainable and eco-friendly landscaping options?',
    answer:
      "Yes, we offer a variety of sustainable and eco-friendly options to meet your landscaping needs while caring for the environment.",
  },
  {
    question: 'How do I request a consultation or estimate for my landscaping project?',
    answer:
      "You can request a consultation by visiting our website and filling out the contact form, or by calling our office directly.",
  },
  {
    question: 'What factors influence the cost of a landscaping project?',
    answer:
      "Several factors, such as project size, materials, and design complexity, influence the cost of a landscaping project.",
  },
  {
    question: 'How often should I schedule landscape maintenance services?',
    answer:
      "Landscape maintenance should generally be scheduled based on the needs of your property and the type of plants you have.",
  },
];

const QuestionSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
   <div className="w-full mx-auto max-w-[90%]">


        <h2 className="text-4xl font-bold text-center mb-8"style={{ fontFamily: 'Arial, sans-serif' }}>
          Foire Aux <span className="text-green-600">Questions</span>
        </h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className={`border rounded-lg shadow-sm transition ${
                activeIndex === index ? 'bg-green-600 text-white' : 'bg-white'
              }`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left px-6 py-4 font-medium focus:outline-none flex justify-between items-center"
              >
                <span>{item.question}</span>
                <span>
                  {activeIndex === index ? (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 border-t text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
