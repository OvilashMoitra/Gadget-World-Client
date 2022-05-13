import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import auth from '../../firebase.init';
import './AddNewItem.css'
const AddNewItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return
    }
    console.log(error)
    const onSubmit = (data) => {

        console.log(data, 'clicked')
        const url = `http://localhost:5000/gadgets`
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        toast('Product Added')
        clear()
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className='d-flex'>
                <div className="add-img">
                    <img className='d-md-block d-none' src={"https://images.unsplash.com/photo-1519335553051-96f1218cd5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxlJTIwZ2FkZ2V0c3xlbnwwfHwwfHw%3D&w=1000&q=80"} alt="" />
                </div>
                <div className="add-form my-5">
                    <h3 className='my-2'><strong>Add Item</strong></h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className='text-left'><strong>User Email</strong></label>
                        <br />
                        <input className='form-input' type='email' defaultValue={`${user?.email}`} readOnly {...register("email", { required: true })} /> <br />
                        <label className='text-left'><strong>Name</strong></label>
                        <br />
                        <input className='form-input' placeholder='Enter the name here' {...register("name", { required: true })} /> <br />
                        <label className='text-left'><strong>Product Description</strong></label><br />
                        <textarea className='form-input' placeholder='Please enter theb description here' name="description" id="" cols="10" rows="10" {...register("description", { required: true })}></textarea><br />
                        <label className='text-left'><strong>Image URL</strong></label><br />
                        <input className='form-input' placeholder='Enter the image link' type='url' {...register("img", { required: true })} /> <br />
                        <label className='text-left'><strong>Stock Quantity</strong></label> <br />
                        <input className='form-input' placeholder='Enter the stock' type='number' {...register("stock", { required: true })} /> <br />
                        <label className='text-left'><strong>Seller Name</strong></label> <br />
                        <input className='form-input' placeholder='Enter the seller name' type='text'  {...register("SellerName", { required: true })} /> <br />
                        <label className='text-left'><strong>Sold</strong></label> <br />
                        <input className='form-input' placeholder='Enter the quantity sold' type='number'  {...register("sold", { required: true })} /> <br />
                        <label className='text-left'><strong>Category</strong></label>
                        <select {...register("category", { required: true })}  >
                            <option value="camera">Camera</option>
                            <option value="mobile-phone">Mobile Phone</option>
                            <option value="laptop">Laptop</option>
                        </select>
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className='submit-btn' type="submit" />
                    </form>
                </div>
                <ToastContainer></ToastContainer>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddNewItem;