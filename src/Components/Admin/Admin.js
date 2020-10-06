import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../logos/logo.png'
import plus from '../../logos/plus.png'
import user from '../../logos/users.png'
import dlt from '../../logos/trash.png'

const Admin = () => {
    const [students, setStudent] = useState([])
    const loadAllMember = () => {
        fetch('https://volunteer-network-kba.herokuapp.com/students')
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setStudent(data)
                }
            })
    }
    useEffect(() => {
        loadAllMember()
    }, [students])

    const deleteItem = (id) => {
        fetch(`https://volunteer-network-kba.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(result => {
                if (result) {
                  loadAllMember()
                }
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
                        <h5 style={{marginLeft: "160px"}}>Registered Volunteer list</h5>
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
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email id</th>
                                    <th scope="col">Registration date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                      students.map(member => <tr>
                                        <td>{member.registry.name}</td>
                                        <td>{member.registry.email}</td>
                                        <td>{member.registry.date}</td>
                                        <td><button class="btn btn-danger" onClick={() => deleteItem(member._id)}><img src={dlt} style={{ width: '25px' }} alt="" /></button></td>
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

export default Admin;