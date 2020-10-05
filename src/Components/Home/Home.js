import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css'

function Home() {;
    const [works, setWorks] = useState([]);

    useEffect(()=>{
        fetch('https://volunteer-network-kba.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setWorks(data))
    }, [])

    const history = useHistory()
    const handleRegistry = (item) => {
        history.push('/registry', {params:item} );
    }
    return (
        <div className="container">
                <Header></Header>
                <h1 style={{marginBottom: '30px'}}>I GROW BY HELPING PEOPLE IN NEED.</h1>
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar">
                        <input className="search_input" type="text" name="" placeholder="Search..."/>
                        <Link href="#" claclassNamess="search_icon"><i className="fas fa-search"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    {
                        works.map(item=>
                        <div className="col-3" onClick={ () => handleRegistry(item)} key={item.name} style={{marginBottom:'30px'}}>
                           <div>
                               <img src={item.image} className="img-fluid" alt=""/>
                                <h4 className="bg-warning" style={{height:"60px", width:"255px", borderRadius:"0 0 5px 5px"}} >{item.name}</h4>
                            </div> 
                           
                            </div>)
                    }
                </div>
        </div>
    );
};

export default Home;