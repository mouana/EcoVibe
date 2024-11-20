import React, { useState } from 'react';
import HeroSec from './HeroSec';
import ProjectCard from './ProjectCard'; // Importing ProjectCard
import '../css/test.css';
import { Pagination, Modal, Button } from 'react-bootstrap';

const projectData = [
    { image: "/1.jpg", title: "Soleil pour Demain", description: "Ce projet vise à installer des panneaux solaires dans les zones résidentielles rurales, réduisant la dépendance au réseau électrique.", status: "60% complété." },
    { image: "/2.jpg", title: "Biomasse pour Tous", description: "Ce projet vise à installer des panneaux solaires dans les zones résidentielles rurales, réduisant la dépendance au réseau électrique.", status: "60% complété." },
    { image: "/3.jpg", title: "Soleil pour Demain", description: "Ce projet vise à installer des panneaux solaires dans les zones résidentielles rurales, réduisant la dépendance au réseau électrique.", status: "100% complété." },
    { image: "/4.jpg", title: "Biomasse pour Tous", description: "Ce projet vise à installer des panneaux solaires dans les zones résidentielles rurales, réduisant la dépendance au réseau électrique.", status: "50% complété." },
    { image: "/5.jpg", title: "Soleil pour Demain", description: "Ce projet vise à installer des panneaux solaires dans les zones résidentielles rurales, réduisant la dépendance au réseau électrique.", status: "100% complété." },
    { image: "/6.jpg", title: "Biomasse pour Tous", description: "Ce projet vise à installer des panneaux solaires dans les zones résidentielles rurales, réduisant la dépendance au réseau électrique.", status: "100% complété." },
    { image: "/72.jpg", title: "Soleil pour Demain", description: "Ce projet vise à installer des panneaux solaires dans les zones résidentielles rurales, réduisant la dépendance au réseau électrique.", status: "100% complété." },
    { image: "/8.jpg", title: "Biomasse pour Tous", description: "Ce projet vise à installer des panneaux solaires dans les zones résidentielles rurales, réduisant la dépendance au réseau électrique.", status: "90% complété." },
    { image: "/9.jpg", title: "Soleil pour Demain", description: "Ce projet vise à installer des panneaux solaires dans les zones résidentielles rurales, réduisant la dépendance au réseau électrique.", status: "100% complété." },
    { image: "/10.jpg", title: "Biomasse pour Tous", description: "Ce projet vise à installer des panneaux solaires dans les zones résidentielles rurales, réduisant la dépendance au réseau électrique.", status: "70% complété." },
    { image: "/11.jpg", title: "Soleil pour Demain", description: "Ce projet vise à installer des panneaux solaires dans les zones résidentielles rurales, réduisant la dépendance au réseau électrique.", status: "100% complété." },
];

const MainPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const projectsPerPage = 4;

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projectData.slice(indexOfFirstProject, indexOfLastProject);

    const handleShowDetails = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handlePaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <HeroSec />
            <div className="container my-5">
                <div className="row">
                    {currentProjects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            {...project} 
                            onShowDetails={handleShowDetails} // Pass the handleShowDetails function as prop
                        />
                    ))}
                </div>

                <Pagination>
                    <Pagination.Prev onClick={() => handlePaginationClick(currentPage - 1)} disabled={currentPage === 1} />
                    {[...Array(Math.ceil(projectData.length / projectsPerPage))].map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            onClick={() => handlePaginationClick(index + 1)}
                            active={index + 1 === currentPage}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => handlePaginationClick(currentPage + 1)} disabled={currentPage === Math.ceil(projectData.length / projectsPerPage)} />
                </Pagination>

                <div className="container my-5">
                    <div className="row d-flex">
                        <div className="image-container">
                            <img src="/9.jpg" alt="Description of the image" width="200" height="10" className="img-fluid" />
                            <p className="overlay-text-2">
                            <h1>Solutions Innovantes pour le Développement de l'Énergie Durable</h1>
                <p>Nous offrons des solutions innovantes qui favorisent la durabilité et promeuvent l'énergie propre pour un avenir plus vert.</p>
                <ul>
                  <li>Expertise en Technologies Renouvelables : Spécialisés dans les solutions solaires, éoliennes et de stockage d'énergie.</li>
                  <li>Solutions Personnalisées : Systèmes énergétiques adaptés pour répondre à des besoins spécifiques et maximiser l'efficacité.</li>
                  <li>Impact Durable : Axés sur la réduction des empreintes carbone et la promotion de la gestion environnementale.</li>
                  <li>Service Complet : De l'installation à la maintenance en passant par les audits énergétiques, nous offrons un soutien complet.</li>
                  <li>Innovation Continue : Utilisation des dernières technologies et pratiques pour promouvoir l'adoption des énergies renouvelables.</li>
                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {selectedProject && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProject.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={selectedProject.image} alt="Project" className="img-fluid" />
                        <h1>{selectedProject.title}</h1>
                        <p>{selectedProject.description}</p>
                        <p>{selectedProject.status}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            )}

           
        </div>
    );
};

export default MainPage;
