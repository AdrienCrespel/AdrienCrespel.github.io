import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-gamepad"></i>
                    <span>Jeu vidéo</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-film"></i>
                    <span>Cinéma</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-globe-europe"></i>
                    <span>Voyage</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-rocket"></i>
                    <span>Espace</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;