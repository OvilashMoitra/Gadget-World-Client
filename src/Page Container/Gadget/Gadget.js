import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './Gadget.css'
const Gadget = () => {
    const params = useParams();
    const [gadget, setGadget] = useState({})
    const [value, setValue] = useState()
    const { quantity } = gadget;
    useEffect(() => {
        const url = `http://localhost:5000/gadgets/${params.id}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setGadget(data))
    }, [])
    function removeOne() {
        let newQuantity = quantity - 1;
        const newProduct = { ...gadget, quantity: newQuantity }
        //copy all previous data if exist in product and setup new quantity 
        setGadget(newProduct);
        fetch(`http://localhost:5000/gadget/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
    }
    function restock(e) {
        e.preventDefault()
        setValue(e.target?.[0].value)
        let newQuantity = parseInt(quantity) + parseInt(e.target?.[0].value);
        const newProduct = { ...gadget, quantity: newQuantity }
        // //copy all previous data if exist in product and setup new quantity 
        setGadget(newProduct);
        fetch(`http://localhost:5000/gadgets/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => alert('stock added'))
        setValue(e.target?.[0].value == '')
    }
    console.log(gadget?.quantity)
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
                        <p> <strong>Remain Quantity {quantity} pices</strong></p>
                        <div className='d-flex'>
                            <button onClick={() => removeOne(gadget?._id)}>Button</button>
                            <form onSubmit={restock} className='ms-5'>
                                <input type="number" name="restock" id="" />
                                <button type="submit">Restock</button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Gadget;