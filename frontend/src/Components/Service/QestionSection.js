import React, { useState } from 'react';

const questions = [
  {
    question: 'Spécialisez-vous dans l\'aménagement paysager résidentiel et commercial ?',
    answer:
      "Oui, nous avons une grande expérience dans l'aménagement paysager résidentiel et commercial. Que vous ayez besoin d'améliorer l'apparence de votre maison ou de créer un espace extérieur accueillant pour votre entreprise, nous pouvons vous aider.",
  },
  {
    question: 'Proposez-vous des options d\'aménagement paysager durables et écologiques ?',
    answer:
      "Oui, nous proposons une variété d'options durables et écologiques pour répondre à vos besoins paysagers tout en respectant l'environnement.",
  },
  {
    question: 'Comment demander une consultation ou un devis pour mon projet d\'aménagement paysager ?',
    answer:
      "Vous pouvez demander une consultation en visitant notre site web et en remplissant le formulaire de contact, ou en appelant directement notre bureau.",
  },
  {
    question: 'Quels sont les facteurs qui influencent le coût d\'un projet d\'aménagement paysager ?',
    answer:
      "Plusieurs facteurs, tels que la taille du projet, les matériaux et la complexité du design, influencent le coût d'un projet d'aménagement paysager.",
  },
  {
    question: 'À quelle fréquence dois-je planifier des services d\'entretien paysager ?',
    answer:
      "L'entretien paysager doit généralement être planifié en fonction des besoins de votre propriété et du type de plantes que vous avez.",
  },
];

const QuestionSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-screen-lg">
        <h2 className="text-4xl font-bold text-center mb-8">
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
