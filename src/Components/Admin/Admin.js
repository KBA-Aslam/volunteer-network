import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../logos/logo.png'
import plus from '../../logos/plus.png'
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
    }, [])

    const deleteItem = (id) => {
        fetch(`https://volunteer-network-kba.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
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
                    <img className="nav-logo" src={logo} alt="" />
                </NavLink>
                <div className="collapse navbar-collapse" >

                    <ul>
                        <h5> Volunteer register list</h5>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <NavLink activeClassName="selected" to='/register'><span>  Volunteer register list</span></NavLink>
                        <br />
                        <NavLink activeClassName="selected" to='/addEvent'><img src={plus} style={{ width: '17px' }} alt="" /><span> Add event</span></NavLink>
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
                                    <th scope="col">Volunteer list</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                      students.map(member => <tr>
                                        <td>{member.name}</td>
                                        <td>{member.email}</td>
                                        <td>{member.date}</td>
                                        <td>{member.workName}</td>
                                        <td><button class="btn btn-danger" onClick={() => deleteItem(member._id)}>delete</button></td>
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