import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './Gadget.css'
const Gadget = () => {
    const params = useParams();
    const [gadget, setGadget] = useState({})
    const [value, setValue] = useState()
    const { stock } = gadget;
    useEffect(() => {
        const url = `https://desolate-temple-57383.herokuapp.com/gadgets/${params.id}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setGadget(data))
    }, [])
    function removeOne() {
        let newQuantity = stock - 1;
        const newProduct = { ...gadget, stock: newQuantity }
        //copy all previous data if exist in product and setup new quantity 
        setGadget(newProduct);
        fetch(`https://desolate-temple-57383.herokuapp.com/gadget/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
    }
    function restock(e) {
        e.preventDefault()
        if (e.target?.[0].value === '') {
            toast('Please add number here')
            setValue(e.target?.[0].value === '')
            return
        }
        if (e.target?.[0].value < 0) {
            toast('Product can not be negative')
            setValue(e.target?.[0].value === '')
            return
        }
        setValue(e.target?.[0].value)
        let newQuantity = parseInt(stock) + parseInt(e.target?.[0].value);
        const newProduct = { ...gadget, stock: newQuantity }
        // //copy all previous data if exist in product and setup new quantity 
        setGadget(newProduct);
        fetch(`https://desolate-temple-57383.herokuapp.com/gadget/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => alert('stock added'))
        setValue(e.target?.[0].value === '')
    }
    // console.log(gadget?.quantity)
    return (
        <div>
            <Navbar></Navbar>
            <section className="update">
                <div className="update-gadget">
                    <div className="image">
                        <img src={gadget?.img} alt="" />
                    </div>
                    <div className='text'>
                        <h1>{gadget?.name}</h1>
                        <h3>${gadget?.price}</h3>
                        <p>{gadget?.description}</p>
                        <p> <strong>Remain Quantity {gadget?.stock} pices</strong></p>
                        <div className='d-flex flex-direction-column'>
                            <button onClick={() => removeOne(gadget?._id)} className='action-btn'>Delivery</button>
                            <form onSubmit={restock} className='ms-5'>
                                <input placeholder='enter the stock here' className='mb-2' type="number" name="restock" id="" />
                                <button className='action-btn' type="submit">Restock</button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
            <div className='text-center'>
                <Link to={"/gadgets"} className='navigate'>Manage Inventories</Link>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Gadget;