import React from 'react';
import FakeData from '../../FakeData/FakeData';

function Inventory() {

    
    const handleAddService = () => {
        // const service = {};
        fetch('https://volunteer-network-kba.herokuapp.com/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(FakeData)
        })
    }

    return (
        <div>
            <button onClick={handleAddService}>Add service</button>
        </div>
    );
};

export default Inventory;