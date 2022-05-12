import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tabl from '../../Components/Table/Table';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [product, setProduct] = useState({})
    const params = useParams()
    const find = (id) => {
        const item = gadgets.filter(elem => elem._id === id)
        setProduct(item)
    }
    useEffect(() => {
        fetch(`http://localhost:5000/gadgets`)
            .then(res => res.json())
            .then(data => setGadgets(data));
    }, []);
    const clear = (id) => {
        find(id)
        console.log(product)
        const url = `http://localhost:5000/ownerdata`
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
        // .then(res => res.json())
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
            <Navbar></Navbar>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Stock</th>
                        <th>Sold</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        gadgets.map(elem => <Tabl clear={clear} key={elem._id} elem={elem}></Tabl>)
                    }
                </tbody>
            </Table>
            <Footer />
        </div>
    );
};

export default Gadgets;