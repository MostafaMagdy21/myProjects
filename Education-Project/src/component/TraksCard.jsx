import React from 'react';
import {Link} from 'react-router-dom';

const TraksCard = () => (
    <div className="col-6 d-flex mb-3">
        <div className="lesson-img">
            <img src="" alt="" className="w-100 h-100"/>
        </div>
        <div className="lesson-tittle">
            <Link to="/tech/:id">
                <h1>Trak One</h1>
            </Link>
        </div>
    </div>
);

export default TraksCard;