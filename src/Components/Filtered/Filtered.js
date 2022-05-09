import React from 'react';
import { Link } from 'react-router-dom';
import './Filtered.css'
const Filtered = ({ gadget }) => {

    return (
        <div>
            <div>
                <section className="gadgets">
                    <div className="gadget-collections">
                        <div className="gadget">
                            <img src={gadget.img} alt="" />
                            <div>
                                <h1>{gadget.name}</h1>
                                <h3>${gadget.price}</h3>
                                <p>{gadget.description.length > 300 ? gadget.description.slice(0, 300) + '...' : gadget.description}</p>
                                <p> <strong>Remain Quantity {gadget.quantity} pices</strong></p>
                            </div>
                            <Link className='stock mx-auto' to={`/gadgets/${gadget._id}`}>Update Stock</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Filtered;