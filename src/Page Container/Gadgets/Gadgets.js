import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tabl from '../../Components/Table/Table';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const params = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/gadgets`)
            .then(res => res.json())
            .then(data => setGadgets(data));
    }, []);
    const clear = (id) => {
        fetch(`http://localhost:5000/gadgets/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = gadgets.filter(service => service._id !== id);
                setGadgets(remaining)
                toast('Product deleted')
            })
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        gadgets.map(elem => <Tabl clear={clear} key={elem._id} elem={elem}></Tabl>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Gadgets;