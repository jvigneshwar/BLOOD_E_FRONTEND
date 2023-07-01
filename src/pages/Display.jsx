import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Display.css'
import { Icon } from '@iconify/react';

const Display = () => {
    const { bloodGroup, city } = useParams();
    const [Details, setDetails] = useState();
    const [Loading,setLoading] = useState(true);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/showDetails`, {
            headers: {
                bloodGroup,
                city,
            }
        })
        .then(data => { setDetails(data.data); setLoading(false)})
        .catch(err => console.log(err))
    }, [bloodGroup, city])
    return (
        <div className='Display'>
            <div className='search-details'>
                <p className='blood-group'>{bloodGroup}</p>
                <p className='blood-group'>{city}</p>
            </div>
            { Loading ? <div className='Loading'>
                            <div className="ele"></div>
                            <div className="ele"></div>
                            <div className="ele"></div>
                            <div className="ele"></div>
                            <div className="ele"></div>
                            <div className="ele"></div>
                        </div> :
            <div className='show-data'>
                {Details && Details.map((item,index) => {
                    return (
                        <div className='card' key={index}>
                            <div className='card-name'>{item.name}</div>
                            <div className='card-group'>{item.bloodGroup}</div>
                            <div className='card-city'>{item.city}</div>
                            <div className='card-no'>{item.mobileNo}</div>
                            <a className='card-call' href={`tel:${item.mobileNo}`}><Icon icon="material-symbols:call" /></a>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}

export default Display