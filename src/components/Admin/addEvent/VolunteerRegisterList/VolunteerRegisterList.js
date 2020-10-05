import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Home/Header/Header';
import trashImg from '../../logos/trash-2 9.png'
import plus from '../../logos/plus 1.png'
import UsersListImg from '../../logos/users-alt 1.png'

const VolunteerRegisterList = () => {
    const [AllActivitiesList, setAllActivitiesList] = useState([{}]);
    useEffect(() => {
        fetch('https://glacial-brook-87015.herokuapp.com/VolunteerRegisterList')
            .then(res => res.json())
            .then(data => setAllActivitiesList(data));
    })

    const deleteActivities = (_id) => {
        fetch(`https://glacial-brook-87015.herokuapp.com/RegisterInfoDelete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                    
            })
    }
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="d-flex">
                <div style={{width:"22%"}}>
                    <Link to='/volunteerRegisterList'><h6 style={{ marginTop: '10%', marginLeft: '10px' }}><img style={{ width: '15%', cursor: 'pointer' }} src={UsersListImg} alt="" /> Volunteer register list</h6></Link>
                    <Link to='/addEvent'><h5 style={{marginTop:'10%',marginLeft:'20px'}}><img style={{width:'15%', cursor:'pointer'}} src={plus} alt=""/> Add event</h5></Link>
                </div>
                <div style={{backgroundColor: '#A2C9FD'}}>
                    <div style={{margin: '30px', borderRadius: '20px',backgroundColor: '#FFFFFF', fontWeight: 'bold'}}>
                        <table className="table" style={{marginTop: '20px'}}>
                            <thead style={{backgroundColor: '#4D9FF2', borderRadius: '20px'}}>
                                <tr style={{margin:'20px'}}>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Registating Date</th>
                                    <th scope="col">Volunteer List</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {AllActivitiesList.map(Lists =>
                                    <tr key={Lists._id}>
                                        <th scope="row">{Lists.itemId}</th>
                                        <td>{Lists.Name}</td>
                                        <td>{Lists.email}</td>
                                        <td>{Lists.RegisterTime}</td>
                                        <td>{Lists.VolunteerName}</td>
                                        <tb><img onClick={() => deleteActivities(Lists._id)} style={{width:'60%', backgroundColor:'red', borderRadius: '10px', marginTop: '5px', cursor:'pointer'}} src={trashImg} alt=""/></tb>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerRegisterList;