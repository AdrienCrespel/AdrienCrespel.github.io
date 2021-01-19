import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Adrien Crespel</h1>
                    <h2>Ingénieur en informatique</h2>
                    <h3>CV</h3>
                    <div className="pdf">
                        <a href="../media/CV.pdf" target="_blank">Télécharger</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;