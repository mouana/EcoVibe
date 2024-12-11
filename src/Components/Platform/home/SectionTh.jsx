import React, { useState } from "react";
import "uikit/dist/css/uikit.min.css";
import { useNavigate } from "react-router";
const SectionTh = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const NavTo = useNavigate()
  const content = [
    {
      id: 1,
      title: "Éducation",
      sections: [
        {
          title: "Systèmes d'Énergie Solaire",
          description: "Ce module couvre les bases de l'énergie solaire, en se concentrant sur les technologies photovoltaïques (PV) et les systèmes thermiques solaires. Il aborde la conception, l'installation et la maintenance des panneaux solaires",
          image: "1.jpg",
        },
        {
          title: "Énergie Éolienne et Technologie des Éoliennes",
          description: "Ce module explore la production d'énergie éolienne, les principes aérodynamiques et le fonctionnement des éoliennes. Il inclut la conception des turbines, leur efficacité et l'évaluation des sites pour les parcs éoliens",
          image: "2.jpg",
        },
        {
          title: "Biomasse et Bioénergie",
          description: "Ce module examine la conversion des matériaux organiques en énergie, tels que les déchets agricoles et le bois. Il traite des différents types de bioénergie, des technologies de conversion et de l'impact environnemental de la production de bioénergie",
          image: "3.jpg",
        },
        {
          title: "Gestion de l'Énergie et Réseaux Intelligents",
          description: "Ce module se concentre sur la gestion des ressources énergétiques renouvelables et l'intégration des réseaux intelligents (smart grids) pour optimiser la distribution et l'utilisation de l'énergie dans les systèmes modernes",
          image: "4.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Transport",
      sections: [
        {
          title: "Véhicule utilitaire",
          description: "Un véhicule utilitaire (comme une camionnette ou un fourgon) est essentiel pour transporter des équipements, des outils et des matériaux nécessaires sur le terrain. Il permet aux techniciens de se déplacer facilement entre différents sites de travail tout en assurant la sécurité et la protection de leurs outils",
          image: "5.jpg",
        },
        {
          title: "Vélo électrique",
          description: "Un vélo électrique est un moyen de transport écologique et efficace pour les techniciens travaillant dans des zones urbaines ou à distance plus courte. Il permet de se déplacer rapidement tout en réduisant l'empreinte carbone, tout en offrant une option flexible et pratique pour les déplacements quotidiens",
          image: "6.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Énergie",
      sections: [
        {
          title: "Énergie solaire",
          description: "L'énergie solaire est produite à partir de la lumière du soleil, principalement via des panneaux photovoltaïques ou des systèmes thermiques. C'est l'une des sources d'énergie renouvelable les plus courantes et prometteuses",
          image: "8.jpg",
        },
        {
          title: "Énergie éolienne",
          description: "L'énergie éolienne est générée à partir du vent à l'aide de turbines. Elle est de plus en plus utilisée dans le monde entier pour produire de l'électricité, en particulier dans les zones venteuses.",
          image: "1.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "Experte",
      sections: [
        {
          title: "Ingénierie des systèmes énergétiques",
          description: "Cette expertise consiste à concevoir, installer et optimiser des systèmes de production d'énergie renouvelable, comme les panneaux solaires ou les éoliennes. Cela inclut l'analyse de la faisabilité, la planification et la gestion des installations",
          image: "12.jpg",
        },
        {
          title: "Gestion de l'efficacité énergétique",
          description: "Les experts en gestion de l'efficacité énergétique travaillent sur la réduction de la consommation d'énergie en optimisant les systèmes existants, la gestion de la demande et l'intégration des énergies renouvelables pour améliorer la durabilité des bâtiments et des industries",
          image: "bg1.jpg",
        },
      ],
    },
  ];

  const handleButtonClick = (id) => {
    setSelectedButton(id);
  };
  function Link(){
    if(selectedButton ===1){
      NavTo ("/")
    }else if(selectedButton === 2){
      NavTo ("/")
    }else if(selectedButton === 3){
      NavTo ("/")
    }else {
      NavTo ("/")
    }
    }
    
  

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Nos Travaux</h1>
      {/* Buttons */}
      <div className="flex gap-4 justify-center mb-8">
        {content.map((item) => (
          <button
            key={item.id}
            onClick={() => handleButtonClick(item.id)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition w-50 h-16"
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-2"
        uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300"
      >
        {content
          .find((item) => item.id === selectedButton)
          .sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg"
            >
              <div
                className="w-24 h-30 overflow-hidden flex"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-2" onClick={Link}>
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p>{section.description.substring(0, 40)}...</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectionTh;
