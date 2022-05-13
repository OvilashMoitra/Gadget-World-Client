import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tabl from '../../Components/Table/Table';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Gadgets.css'
const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [user] = useAuthState(auth)
    const params = useParams()
    const find = (id) => {
        const item = gadgets.filter(elem => elem._id === id)
        return item[0]
    }
    useEffect(() => {
        fetch(`https://desolate-temple-57383.herokuapp.com/gadgets`)
            .then(res => res.json())
            .then(data => setGadgets(data));
    }, []);

    const clear = (id) => {
        const confirm = window.confirm('Want to delete?')
        const item = find(id)
        const ownerProduct = { ...item, 'email': user.email }
        console.log(ownerProduct)
        const url = `https://desolate-temple-57383.herokuapp.com/ownerdata`
        if (confirm) {
            fetch(`https://desolate-temple-57383.herokuapp.com/gadgets/${id}`, {
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
            fetch(url, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(ownerProduct)
            })
        }

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="container manageProduct-section">
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
            </div>
            <div className='text-center'>
                <Link to={"/addItem"} className='navigate'>Add Product</Link>
            </div>
            <Footer />
        </div>
    );
};

export default Gadgets;