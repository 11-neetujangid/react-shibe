import axios from 'axios';
import React, { useState } from 'react';

const Home = () => {
    const [data, getData] = useState(() => {
        axios.get(`https://shibe.online/api/shibes?count=10`)
            .then(res => getData(res.data))
    });
    return (
        <>
            <h1>Home</h1>
            <div className="item-container">
                {
                    data.map(record => (
                        <>
                            <p>{record}</p>
                            <img src={record} alt='img' />
                        </>
                    ))
                }
            </div>
        </>
    )
}
export default Home;