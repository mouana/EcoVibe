import React,{useState} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./HowItWorks.css";
import { FaCalculator, FaChartLine, FaLeaf } from "react-icons/fa";

 function Decouvrir(){
    const [showDetails, setShowDetails] = useState(false);

    const handleViewMore = () => {
      setShowDetails(!showDetails);
    };
    
return(
<div>
 <section className="simulator-section py-5" style={{ backgroundColor: "#ffffff" }}>
 <div className="container">
   <div className="row align-items-center">
     {/* Texte principal à gauche */}
     <div className="col-md-6 mb-4 mb-md-0">
       <h5 className="text-uppercase" style={{ color: "#007AFF", fontWeight: "bold" }}>
         Découvrez votre potentiel
       </h5>
       <h2 className="mt-3 mb-4" style={{ color: "#000000", fontWeight: "bold" }}>
         Simulez vos économies et votre impact environnemental dès aujourd'hui !
       </h2>
       <p style={{ color: "#000000" }}>
         Utilisez notre simulateur intuitif pour calculer vos économies d'énergie et 
         votre contribution à la planète en passant à l'énergie renouvelable. 
         Découvrez en quelques clics combien vous pouvez économiser tout en réduisant 
         votre empreinte carbone.
       </p>
 
     </div>

    
     <div className="col-md-6">
       <div className="d-flex flex-column gap-3">
    
         <div
           className="p-3 rounded border"
           style={{ backgroundColor: "#f9f9f9", borderColor: "#e0e0e0" }}
         >
           <h5 className="d-flex" style={{ color: "#000000", fontWeight: "bold" }}>
             <FaCalculator size={30} style={{ color: "#82D49D", marginRight: "8px" }} />
             Calcul Facile
           </h5>
           <p style={{ color: "#000000" }}>
             Indiquez vos données de consommation pour obtenir une estimation précise 
             de vos économies d'énergie.
           </p>
         </div>

         {/* Bloc 2 */}
         <div
           className="p-3 rounded border"
           style={{ backgroundColor: "#f9f9f9", borderColor: "#e0e0e0" }}
         >
           <h5 className="d-flex" style={{ color: "#000000", fontWeight: "bold" }}>
             <FaChartLine size={30} style={{ color: "#82D49D", marginRight: "8px" }} />
             Résultats en Temps Réel
           </h5>
           <p style={{ color: "#000000" }}>
             Visualisez instantanément vos économies et votre impact écologique en fonction 
             de votre consommation énergétique.
           </p>
         </div>

         {/* Bloc 3 */}
         <div
           className="p-3 rounded border"
           style={{ backgroundColor: "#f9f9f9", borderColor: "#e0e0e0" }}
         >
           <h5 className="d-flex" style={{ color: "#000000", fontWeight: "bold" }}>
             <FaLeaf size={30} style={{ color: "#82D49D", marginRight: "8px" }} />
             Impact Environnemental
           </h5>
           <p style={{ color: "#000000" }}>
             Comprenez comment vos actions contribuent à un avenir plus durable pour la planète.
           </p>
         </div>
       </div>
     </div>
   </div>
 </div>
</section>
</div>
);
 };
export default Decouvrir;