import React from 'react';
import FakeData from '../../FakeData/FakeData';

function Inventory() {

    const handleAddService = () => {
        // const service = {};
        fetch('http://localhost:4200/addService', {
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