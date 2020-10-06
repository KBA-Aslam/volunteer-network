import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from './../../logos/logo.png'
import './Registry.css'

function Registry() {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()

    const onSubmit = data => {
        console.log('form submitted', data)
          const registryDetails = {...loggedInUser, registry: data, date: new Date()}
    
          fetch('https://volunteer-network-kba.herokuapp.com/registry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registryDetails)
            })
            .then(res => res.json())
            .then(data =>{
                   console.log(data)
                   history.push('/review');
            })
        };

        

    return (
        <div className="body">
            <img style={{width: "200px", height: "60px"}} src={logo} alt="logo"></img>
            <div className="form-box  d-flex justify-content-center">
                
                <form className="regi-form" onSubmit={handleSubmit(onSubmit)}>
                    
                <h6>Register as Volunteer</h6>

            <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
            {errors.name && <span className="error">Name is required</span>}
            
            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/>
            {errors.email && <span className="error">Email is required</span>}

            <input name="date" ref={register({ required: true })}  placeholder="Date"/>
            {errors.date && <span className="error">Date is required</span>}
            
            <input name="description" ref={register({ required: true })}  placeholder="Description" />
            {errors.description && <span className="error">Description is required</span>}
            
            <input name="organize" ref={register({ required: true })}  placeholder="Organize the books at library"/>
            {errors.organize && <span className="error">Organize is required</span>}
            
            <input value="submit" type="submit" />
                </form>
    </div>
        </div>
    );
};

export default Registry;