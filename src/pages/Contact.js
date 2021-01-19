import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Bretagne</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0632804723">
                                <span className="clickInput" onClick={() => { alert('Téléphone copié !');}}>06 32 80 47 23</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="a5crespe@enib.fr">
                                <span className="clickInput" onClick={() => { alert('E-mail copié !');}}>a5crespe@enib.fr</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/adrien-crespel-56130" target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/AdrienCrespel" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/AdrienCrespel56" target="_blank" rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/adrien_crespel" target="_blank" rel="noopener noreferrer">
                            <h4>Instagram</h4>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;