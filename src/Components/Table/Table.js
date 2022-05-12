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
                    <button onClick={() => clear(elem._id)} >Delete</button>
                </td> : null
            }
        </tr>
    );
};

export default Tabl;