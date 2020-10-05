import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Header from '../../Home/Header/Header';
import UsersListImg from '../../logos/users-alt 1.png'
import plus from '../../logos/plus 1.png'

const AddEvent = () => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        const addData = {...data}
        fetch('https://glacial-brook-87015.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addData)
        })
        .then(res => res.json(data))
            .then(result => {
                if (result) {
                    alert('event add successfully')
                }
            })
    };

    const inputStyle = {
        width:'40%',
        marginTop: '20px',
        marginLeft:'5%',
        padding:'20px',
        borderBottom: '5px solid #029545'
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="d-flex">
                <div style={{ width: "30%" }}>
                    <Link to='/volunteerRegisterList'><h5 style={{ marginTop: '10%', marginLeft: '30px' }}><img style={{ width: '15%', cursor: 'pointer' }} src={UsersListImg} alt="" /> Volunteer register list</h5></Link>
                    <Link to='/addEvent'><h5 style={{marginTop:'10%',marginLeft:'30px'}}><img style={{width:'15%', cursor:'pointer'}} src={plus} alt=""/> Add event</h5></Link>
                </div>
                <div style={{ backgroundColor: '#A2C9FD',width:'100%' }}>
                    <div style={{ margin: '30px', borderRadius: '20px', backgroundColor: '#FFFFFF', fontWeight: 'bold' }}>
                        
                        <form className="d-flex row" onSubmit={handleSubmit(onSubmit)}>
                            <input style={inputStyle} name="name" placeholder="Event Title" ref={register({ required: true })} /><br />
                                {errors.name && <span>your name is required<br /></span>}
                            
                            <input style={inputStyle} name="Date" type="date" placeholder="Date" ref={register({ required: true })} /><br />
                                {errors.Date && <span>Event Date is required<br /></span>}

                            <input style={inputStyle} name="Description" placeholder="Description" /><br />
                                
                            <input style={inputStyle} name="img" placeholder="img link" ref={register({ required: true })} /><br />
                                {errors.img && <span>img link is required<br /></span>}

                            <input style={{width:'60%', marginLeft:'15%', backgroundColor:'#029545',padding:'10px',borderBottom: '5px solid #F8EC11'}} className="submitBtn" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;