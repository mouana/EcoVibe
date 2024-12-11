import React, { useState } from 'react';
import { FaComment, FaEye, FaClock } from 'react-icons/fa';

const articles = [
  {
    image: '/service/img5.png',
    category: 'Tips',
    title: 'Choosing the Right Plants for Your Climate Zone',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas...',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Proin fermentum, quam et euismod cursus, ligula ipsum laoreet arcu, vitae congue sapien ligula non odio. Fusce vitae...',
    comments: 10,
    views: '10K',
    time: '5 min ago',
  },
  {
    image: '/service/img6.png',
    category: 'Insight',
    title: 'How to Create a Low Maintenance Landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas...',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Sed euismod felis non turpis tincidunt interdum...',
    comments: 50,
    views: '15K',
    time: '7 min ago',
  },
  {
    image: '/service/img7.png',
    category: 'Insight',
    title: 'Landscaping Trends for the Modern Homeowner',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas...',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Integer sed lacus vel nunc dapibus pharetra et et metus...',
    comments: 100,
    views: '20K',
    time: '10 min ago',
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
          <div className="flex items-center mr-4">
            <FaComment className="mr-1" />
            {article.comments}
          </div>
          <div className="flex items-center mr-4">
            <FaEye className="mr-1" />
            {article.views}
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1" />
            {article.time}
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green-600 text-white py-2 px-4 rounded-full w-full hover:bg-green-700 transition"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
