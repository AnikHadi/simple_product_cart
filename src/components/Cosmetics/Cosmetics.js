import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'


const Cosmetics = () => {

    const [Cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('./Cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    return (
        <div>
            <h2>Cosmetics Shop: </h2>
            <div className='cosmetics'>
                {
                    Cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic._id}></Cosmetic>)
                }
            </div>
        </div>
    );
};

export default Cosmetics;