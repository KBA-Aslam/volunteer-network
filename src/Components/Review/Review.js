import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import image from '../../logos/volImg.png';

function Review() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [totalWork, setTotalWork] = useState([])
   
    const history = useHistory();


    const review=()=>{
        fetch(`https://volunteer-network-kba.herokuapp.com/review?email=${loggedInUser.email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setTotalWork(data)
                    }, [])

    }
    useEffect(() => {
        review();
    }, [])
    const deletework = (id) => {
        fetch(`https://volunteer-network-kba.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(result => {
                if (result) {
                  review()
                }
            })
    }
    console.log(totalWork);
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        totalWork.map(work =>
                            <div className="col-6 shadow p-3 mb-5 bg-white rounded">
                                <div className="row">
                                    <div className="col-5">
                                        <img src={image} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-7">
                                        <h3>{work.registry.organize}</h3>
                                        <h4>{work.registry.date}</h4>
                                        <button style={{marginTop: "50px"}} onClick={deletework} className="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;