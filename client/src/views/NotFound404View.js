import React from 'react';
import img404 from '../assets/images/bg-404.png'
import constants from '../constants';
import navigation from '../utilities/navigation';


const notFoundView = () =>(
    <div id="error-404">
        <div className="error-code text-shadow">Page Not Found (404)</div>
        <div className="error-message">
            Opps! Regrettably.. the page you are requesting cannot be located... this guy knows how you feel...
            <img src={img404} className="img-404" alt="Route not found"/>
            <button className="button-cancel" onClick={() => navigation.go(constants.ROUTES.HOME)}>Try Again?</button>
        </div>
    </div>
);

export default notFoundView;