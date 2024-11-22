import React from 'react';
import 'uikit/dist/css/uikit.min.css';
import { Link } from 'react-router-dom';

const SectionSe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-gray-100 space-y-8 md:space-y-0">
      {/* Contact Text */}
      <div className="w-full md:w-1/3 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Entrer en Contact</h2>
        <p className="text-gray-600 mb-4 text-sm md:text-base">
          Nous assurons fiabilité, tarifs bas, et surtout, sécurité et confort.
        </p>
        <p className="italic text-gray-500 mb-6 text-sm md:text-base">
          Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </p>
        <div className="flex space-x-4 text-2xl">
          <Link to="#" className="text-blue-600"><i className="fab fa-facebook"></i></Link>
          <Link to="#" className="text-blue-400"><i className="fab fa-twitter"></i></Link>
          <Link to="#" className="text-pink-500"><i className="fab fa-instagram"></i></Link>
        </div>
      </div>

      {/*  Contact Form */}
      <div className="w-full md:w-1/3 p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Nous Contacter</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              placeholder="Entrez votre nom"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Prénom</label>
            <input
              type="text"
              placeholder="Entrez votre prénom"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Entrez votre email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Votre message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/*Map */}
      <div className="w-full md:w-1/3 m-3">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.6743398175397!2d-7.984841184815011!3d31.628674681342038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee3dce2d0bf7%3A0x5e9e306d3db1466e!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2s!4v1696350340235!5m2!1sen!2s"
          width="100%"
          height="560"
          className="rounded-lg shadow-lg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default SectionSe;
