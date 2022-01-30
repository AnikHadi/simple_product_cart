import React from 'react';
import { addToLocalDb, deleteFromDb } from '../../utilities/FakeDb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {_id, about, name, address, age, balance, email, gender, phone} = props.cosmetic;

    const balance222 = [5, 12, 45, 78, 95];

    // const total = balance222.reduce( (sum, num) => {
    //     return sum + num
    // } , 0)
    const punches = id => {
        addToLocalDb(id)
    }

    const deleteCart = id => {
        deleteFromDb(id)
    }


    return (
        <div className='cosmetic'>
            <h2>Name: {name}</h2>
            <h5>ID: {_id}</h5>
            <p>Age: {age}</p>
            <p>Phone: </p>
            {/* <p>Email: {email}</p>
            <p>Address: {address}</p> */}
            <p>Balance: $ {balance}</p>
            {/* <p>Gender: {gender}</p>
            <p>About: {about}</p> */}
            <button onClick={() => deleteCart(_id)}>Remove</button>
            <button onClick={() =>punches(_id)}>Bye now</button>
        </div>
    );
};

export default Cosmetic;