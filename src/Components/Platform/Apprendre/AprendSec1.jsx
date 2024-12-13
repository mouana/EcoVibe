import React from 'react'

function AprendSec1() {
  return (
    <div>  
        <div className="">
          {/* Green Background Div */}
          <div className="uk-background-primary uk-padding-large uk-text-center uk-text-bold uk-light">
            <h1 className="uk-heading-medium">
              Maroc : Vers une Transition Énergétique Verte avec 100% d’Énergies Renouvelables d’ici 2050
            </h1>
          </div>
    
          {/* Image Section */}
          <div className="">
            <img
              src="./2.jpg" // Replace with your actual image URL
              alt="Transition Energétique"
              className="uk-width-1-1 uk-height-medium uk-object-cover"
            />
          </div>
    
          {/* Question Section */}
          <div className="uk-text-center uk-padding">
            <h2 className="">Comment faire ?</h2>
          </div>
    
          {/* Text Section */}
          <div className="uk-text-muted uk-background-default m-4">
            <p>
              Aujourd'hui, passer aux énergies renouvelables n'est plus une option, mais une nécessité. Face au changement climatique et à la dégradation de l'environnement, il est urgent d'adopter des solutions énergétiques durables et écologiques. Les énergies renouvelables permettent non seulement de réduire les émissions de CO2, mais aussi de réaliser des économies à long terme. Découvrez à travers nos vidéos informatives les avantages des énergies renouvelables et les étapes pour les adopter.
            </p>
          </div>
        </div>
      </div>
  )
}

export default AprendSec1