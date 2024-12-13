import React, { useState } from 'react';
import { FaComment, FaEye, FaClock } from 'react-icons/fa';

const articles = [
  {
    image: `${process.env.PUBLIC_URL}/service/img5.png`,
    category: 'Conseils',
    title: 'Choisir les bonnes plantes pour votre zone climatique',
    description: 'Le choix des plantes adaptées à votre zone climatique est essentiel pour garantir un jardin durable et résistant. Découvrez comment choisir les meilleures plantes pour votre région.',
    fullDescription: 'Lorsque vous aménagez votre jardin, il est crucial de sélectionner des plantes qui prospèrent dans les conditions climatiques locales. En tenant compte des températures, de l’humidité et du type de sol, vous pouvez créer un jardin florissant tout au long de l’année. Cet article vous guide à travers les différentes étapes pour choisir des plantes adaptées à votre zone climatique, garantissant ainsi une croissance saine et une faible consommation d’eau.',
  },
  {
    image: `${process.env.PUBLIC_URL}/service/img6.png`,
    category: 'Conseils',
    title: 'Comment créer un paysage à faible entretien',
    description: 'Créer un paysage à faible entretien ne signifie pas sacrifier l’esthétique. Découvrez des astuces simples pour aménager un jardin magnifique qui demande peu de soins.',
    fullDescription: 'Un paysage à faible entretien peut être aussi beau que fonctionnel. Il suffit de choisir des plantes résistantes, de planifier un aménagement efficace et d’incorporer des éléments de design faciles à maintenir. Cet article explore différentes stratégies pour réduire les besoins en entretien de votre jardin tout en conservant un espace extérieur attrayant. De l’optimisation de l’arrosage à la sélection de plantes adaptées, apprenez à créer un environnement qui vous fera gagner du temps et de l’énergie.',
  },
  {
    image: `${process.env.PUBLIC_URL}/service/img7.png`,
    category: 'Tendances',
    title: 'Les tendances paysagères pour le propriétaire moderne',
    description: 'Le design paysager évolue constamment. Découvrez les dernières tendances qui transforment les jardins modernes et les espaces extérieurs.',
    fullDescription: 'Les tendances paysagères actuelles mettent l’accent sur des designs modernes, durables et esthétiques. Des jardins minimalistes aux espaces extérieurs multifonctionnels, cet article explore les nouveautés en matière de paysage, en soulignant l’importance de la durabilité et de l’intégration des technologies modernes. Apprenez comment transformer votre espace extérieur en un lieu à la fois pratique et élégant, tout en restant fidèle aux valeurs écologiques.',
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold text-center mb-8">
          Blog et <span className="text-green-600">Articles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArticleCard = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-green-600 font-semibold text-sm mb-2 block">
          {article.category}
        </span>
        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {isExpanded ? article.fullDescription : article.description}
        </p>
        <div className="flex items-center text-gray-500 text-xs mb-4">
          
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green-600 text-white py-2 px-4 rounded-full w-full hover:bg-green-700 transition"
        >
          {isExpanded ? 'Montrer moins' : 'Lire plus'}
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
