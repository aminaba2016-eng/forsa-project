import React from 'react';
import "./footer.css";
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                <Link to='/contact'>        <h4> NOUS CONTACTER </h4></Link>
                        
                        <ul className="list-unstyled">
                            <li>Forsa.tn</li>
                            <li> Avenue Farhat hacched - Gabes- 6020 </li>
                            <li>21693815001</li>
                            <li>contact@forsa.tn </li>
                        </ul>
                    </div>
                   
                   
                    <div className="col">
                        <h4>FORSA.TN </h4>
                
                        <ul className="list-unstyled">
                            <li>Conditions d'utilisation</li>
                            <li>Conditions générales de vente </li>
                            <li>Contactez nous</li>
                        </ul>
                    </div>
                    
                
             </div>
        </div>
    </div>
    )
} 


export default Footer