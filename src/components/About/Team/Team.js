import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../../Shared/Navbar/Navbar';
import { Fade } from 'react-reveal';
import MobileApp from '../../Shared/MobileApp/MobileApp';
import Footer from '../../Shared/Footer/Footer';

const Team = () => {
    const teamData = [
        {
            name: 'Sam Richerdon',
            title: 'Head Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/team/team-1_qawv4t.jpg'
        },
        {
            name: 'Jannifer Harper',
            title: 'Sous Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/team/team-2_wfv3sa.jpg'
        },
        {
            name: 'Jonathan Coronado',
            title: 'Burger Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/team/team-3_vwvvk9.jpg'
        },
        {
            name: 'Jorge Stucky',
            title: 'Grill Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/team/team-4_y7oizi.jpg'
        },
        {
            name: 'Anthony Backer',
            title: 'Fry Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786145/testo-burger-project/team/team-5_zuhpcb.jpg'
        },
        {
            name: 'Lea Victoria',
            title: 'Roast Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786146/testo-burger-project/team/team-6_hcrvxt.jpg'
        },
        {
            name: 'Justin Roberto',
            title: 'Pizza Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786145/testo-burger-project/team/team-7_tndagx.jpg'
        },
        {
            name: 'Stephanie Reed',
            title: 'Executive Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786145/testo-burger-project/team/team-8_d48orv.jpg'
        }
    ];

    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786145/testo-burger-project/team/team-page_hhrn9a.jpg';

    return (
        <section id='team-testo'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='team-banner' className="container-fluid" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>MEET THE TEAM</h5>
            </section>

            <section id='team-grid' className='container'>
                <div className="row g-3">
                    {
                        teamData.map(teamMember => {
                            const { name, title, image } = teamMember;
                            return (
                                <div className="col-md-3 team-card-hover">
                                    <div className='card rounded-3'>
                                        <img src={image} className="card-img h-100 rounded-3 team-card-image" alt="..." />
                                        <div className='team-card-icons'>
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
                                        <h5 className="card-title text-uppercase member-name fw-bold">{name}</h5>
                                        <p className="card-text member-title">{title}</p>
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