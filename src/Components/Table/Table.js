import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Tabl = ({ elem, clear }) => {

    return (
        <tr>
            <tr></tr>
            <td>
                {elem.name}
            </td>
            <td>
                <img src={`${elem.img}`} style={{ width: '150px' }} alt="" />
            </td>
            <td>{elem.stock}</td>
            <td>{elem.sold}</td>
            {
                clear ? <td>
                    <button onClick={() => clear(elem._id)} style={{ color: 'white', borderRadius: "30px 30px 70px 110px", backgroundColor: 'red', fontWeight: "bold", border: 'none', width: '83px' }} >Delete</button>
                </td> : null
            }
        </tr>
    );
};

export default Tabl;