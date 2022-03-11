import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../../Shared/Navbar/Navbar';
import teamBackground from '../../../images/team/team-page.jpg';
import teamPic1 from '../../../images/team/team-1.jpg';
import teamPic2 from '../../../images/team/team-2.jpg';
import teamPic3 from '../../../images/team/team-3.jpg';
import teamPic4 from '../../../images/team/team-4.jpg';
import teamPic5 from '../../../images/team/team-5.jpg';
import teamPic6 from '../../../images/team/team-6.jpg';
import teamPic7 from '../../../images/team/team-7.jpg';
import teamPic8 from '../../../images/team/team-8.jpg';
import { Fade } from 'react-reveal';
import MobileApp from '../../Shared/MobileApp/MobileApp';
import Footer from '../../Shared/Footer/Footer';

const teamData = [
    {
        name: 'Sam Richerdon',
        title: 'Head Chef',
        image: teamPic1
    },
    {
        name: 'Jannifer Harper',
        title: 'Sous Chef',
        image: teamPic2
    },
    {
        name: 'Jonathan Coronado',
        title: 'Burger Chef',
        image: teamPic3
    },
    {
        name: 'Jorge Stucky',
        title: 'Grill Chef',
        image: teamPic4
    },
    {
        name: 'Anthony Backer',
        title: 'Fry Chef',
        image: teamPic5
    },
    {
        name: 'Lea Victoria',
        title: 'Roast Chef',
        image: teamPic6
    },
    {
        name: 'Justin Roberto',
        title: 'Pizza Chef',
        image: teamPic7
    },
    {
        name: 'Stephanie Reed',
        title: 'Executive Chef',
        image: teamPic8
    }
];

const Team = () => {
    return (
        <section id='teamTesto'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='teamBackground' className="container-fluid" style={{ backgroundImage: `url(${teamBackground})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>MEET THE TEAM</h5>
            </section>

            <section id='teamGrid' className='container'>
                <div className="row g-3">
                    {
                        teamData.map(teamMember => {
                            const { name, title, image } = teamMember;
                            return (
                                <div className="col-md-3 teamCardHover">
                                    <div className='card rounded-3'>
                                        <img src={image} className="card-img h-100 rounded-3 teamCard-image" alt="..." />
                                        <div className='teamCard-icons'>
                                            <Fade bottom>
                                                <div className="card-img-overlay d-flex justify-content-evenly align-items-end">
                                                    <FontAwesomeIcon className="text-light fs-3" icon={faFacebook} />
                                                    <FontAwesomeIcon className="text-light fs-3" icon={faTwitter} />
                                                    <FontAwesomeIcon className="text-light fs-3" icon={faInstagram} />
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-uppercase memberName fw-bold">{name}</h5>
                                        <p className="card-text memberTitle">{title}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </section>

            <MobileApp />
            <Footer />
        </section>
    );
};

export default Team;