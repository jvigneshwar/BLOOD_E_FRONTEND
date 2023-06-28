import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Display.css'

const Display = () => {
    const { bloodGroup, city } = useParams();
    const [Details, setDetails] = useState();
    useEffect(() => {
        axios.get('http://localhost:4000/showDetails', {
            headers: {
                bloodGroup,
                city,
            }
        })
            .then(data => { setDetails(data.data); console.log(data.data); })
            .catch(err => console.log(err))
    }, [bloodGroup, city])
    return (
        <div className='Display'>
            <p>{bloodGroup}</p>
            <p>{city}</p>
            <table>
                <tr>
                    <th>name</th>
                    <th>blood group</th>
                    <th>city</th>
                    <th>mobile no</th>
                </tr>
                {Details && Details.map((item) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.bloodGroup}</td>
                            <td>{item.city}</td>
                            <td>{item.mobileNo}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Display