import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo from './../../logos/logo.png'
import plus from '../../logos/plus.png'
import user from '../../logos/users.png'
import upload from '../../logos/upload.png'
import './Event.css'

function Event() {

    let history = useHistory()
    const handleAddEvent = () => {
        const name = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;
        const submit = { name: name, date: date, description: description }
        fetch("https://volunteer-network-kba.herokuapp.com/event", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(submit)
        })
            .then(result => {
                alert('Bohut boro kaam koiralaicho. khushi?')
            })
    }

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <NavLink to="/home">
                <img style={{ width: "250px", height: "80px"}} src={logo} alt="" />
            </NavLink>
            <div className="collapse navbar-collapse" >

                <ul>
                    <h5 style={{marginLeft: "160px"}}>Add a new Event</h5>
                </ul>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <NavLink activeClassName="selected" to='/admin'><img src={user} style={{ width: '20px' }} alt="" /><span>Registered Volunteer list</span></NavLink>
                    <br />
                    <NavLink activeClassName="selected" to='/event'><img src={plus} style={{ width: '20px' }} alt="" /><span> Add event</span></NavLink>
                </div>
                <div className="col-2">

                </div>

                <div className="col-8">
                        <div className="container input-field">
                            <div className="row">

                                <div className="col-6">
                                    <label><strong>Event Name</strong></label>
                                    <br/>
                                    <input style={{ width: '300px' }} id="title" type="text" />
                                </div>
                                <div className="col-6">
                                    <label><strong>Date</strong></label>
                                    <input type="date" id="date" style={{ width: '100%' }} />
                                </div>
                                <div className="col-6">
                                    <label><strong> Description </strong> </label>
                                    <input type="text" id="description" style={{ width: '300px', height:"100px" }} />
                                </div>
                                <div style={{marginTop:"20px"}} className="col-6">
                                <label><strong> Banner </strong> </label>
                                <br/>
                                <button type="button" class="btn btn-outline-success"><img src={upload} style={{ width: '20px' }} alt=""/>  Upload Image</button>
                                </div>
                            </div>
                            <br />
                            <div style={{marginLeft: '25%'}} className="col-6">
                                <button className="btn btn-success" onClick={handleAddEvent}>Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

                </div>
    );
};

export default Event;