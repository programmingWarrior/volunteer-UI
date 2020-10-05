import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Home/Header/Header';

const VolunteerActivities = () => {
    const [Activities, setActivities] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://glacial-brook-87015.herokuapp.com/RegisterInfo?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setActivities(data));
    })

    const deleteActivities = (_id) => {
        fetch(`https://glacial-brook-87015.herokuapp.com/RegisterInfoDelete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                alert("deleted successfully")
            })
    }

    return (
        <div>
            <Header></Header>
            <div className="d-flex">
                <h5>You have: {Activities.length}</h5>
                <div className="row">
                    {Activities.map(Act =>
                        <div key={Act._id} className="card mb-3" style={{ maxWidth: "540px", margin: '10px',marginTop: '40px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={Act.img} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{Act.VolunteerName}</h5>
                                        <p className="card-text">{Act.email}</p>
                                        <p className="card-text d-flex align-items-end"><small className="text-muted"><button type="button" className="btn btn-primary" onClick={() => deleteActivities(Act._id)}>delete</button></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VolunteerActivities;