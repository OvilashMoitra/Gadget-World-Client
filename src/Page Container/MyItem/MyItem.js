import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Tabl from '../../Components/Table/Table';
import auth from '../../firebase.init';
import './MyItem.css'
const MyItem = () => {
    const [ownerDeletedProduct, setDeletedOwnerProduct] = useState([])
    const [ownerAddedProduct, setownerAddedProduct] = useState([])
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/mydata`)
            .then(res => res.json())
            .then(data => setDeletedOwnerProduct(data))
    }, [])
    console.log(user?.email)
    // if (loading) {
    //     return
    // } else {
    //     fetch(`http://localhost:5000/mydata?mailid=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setownerAddedProduct(data))
    // }
    useEffect(() => {
        if (!loading) {
            fetch(`http://localhost:5000/mydata?mailid=${user?.email}`)
                .then(res => res.json())
                .then(data => setownerAddedProduct(data))
        }
    }, [user])
    // fetch(`http://localhost:5000/mydata?mailid=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => setownerAddedProduct(data))
    // fetch(`http://localhost:5000/mydata`)
    //     .then(res => res.json())
    //     .then(data => setDeletedOwnerProduct(data))
    // fetch(`http://localhost:5000/mydata?mailid=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => setownerAddedProduct(data))

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
                const remaining = ownerAddedProduct.filter(product => product._id !== id);
                setownerAddedProduct(remaining)
                toast('Product deleted')
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className='mydata'>
                <div className="added-item">
                    <p className='text-center'><strong>Added Item</strong></p>
                    <Table striped bordered hover>
                        <thead className='table-header'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Stock</th>
                                <th>Sold</th>
                            </tr>
                        </thead>
                        {
                            ownerAddedProduct.length !== 0 ? <tbody> {ownerAddedProduct.map(elem => <Tabl clear={clear} key={elem._id} elem={elem}></Tabl>)
                            }</tbody> : null
                        }
                    </Table>
                </div>
                <div className="deleted-item">
                    <p className='text-center'><strong>Deleted Item</strong></p>
                    <Table striped bordered hover>
                        <thead className='table-header' >
                            <tr >
                                <th></th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Stock</th>
                                <th>Sold</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ownerDeletedProduct.map(elem => <Tabl key={elem._id} elem={elem}></Tabl>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
            <Footer />
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyItem;