import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

function Review() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [totalWork, setTotalWork] = useState([])
   
    const history = useHistory();

    const review=()=>{
        fetch(`https://localhost:4200/review?email=${loggedInUser.email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setTotalWork(data.limit)
                    }, [])

    }
    useEffect(() => {
        review();
    }, [])
    const deletework = (id) => {
        fetch(`https://localhost:4200/delete/${id}`, {
            method: 'DELETE',
        })
            .then(result => {
                if (result) {
                  review()
                }
            })
    }

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
                                        <img src={work.image} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-7">
                                        <h3>{work.name}
                                            <br />
                                            {work.date}
                                        </h3>
                                        <button onClick={deletework} className="btn btn-danger">Delete</button>
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