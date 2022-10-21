import React from 'react';
import {Link} from 'react-router-dom';


export const TechCards = ({tech}) =>(
    <div className="card">
        {/* <img src="#" className="card-img-top"/> */}

        <div className="pictur">
            ...
        </div>

        <div className="card-body">
            <h5 className="card-title">{tech.name}</h5>
            <p className="card-text">
                street: {tech.address.street}
            </p>
            <p className="card-text">
                suite: {tech.address.suite}
            </p>
            <p className="card-text">
                city: {tech.address.city}
            </p>
            <p className="card-text">
                zipcode: {tech.address.zipcode}
            </p>
            <Link type="btn" className="btn btn-primary btn-link" to={`/tech/:${tech.id}`}>LEARN</Link>
        </div>
    </div>
)

export default TechCards;