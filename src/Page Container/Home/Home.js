import { faFilter, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Chart from '../../Components/Chart/Chart';
import Filtered from '../../Components/Filtered/Filtered';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css'
const Home = () => {
    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const [gadgets, setGadgets] = useState([]);
    const [filter, setFilter] = useState('');
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/gadgets/filter?gadget=${filter}`)
            .then(res => res.json())
            .then(data => setFilteredGadgets(data));
    }, [filter]);
    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then(res => res.json())
            .then(data => setGadgets(data));
    }, []);
    const filtering = (gadget) => {
        setFilter(gadget)
        setIsFiltered(true)
    }
    const clearFilter = () => {
        setIsFiltered(false)
        setFilter('')
    }
    console.log(isFiltered, filter)

    return (
        <div>
            <Navbar></Navbar>
            <p className='text-center'><strong>Filter Gadget  <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon></strong></p>
            <FontAwesomeIcon title='clear filter' onClick={clearFilter} icon={faFilterCircleXmark}></FontAwesomeIcon>
            <div className='filter'>
                <div onClick={() => filtering('laptop')} >
                    <h1>Laptop</h1>
                    <img src={"https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/laptops/img-0224/X-Pro-2022.png"} alt="" />
                </div>
                <div onClick={() => filtering('mobile-phone')} >
                    <h1>Phone</h1>
                    <img src={"https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone13-family-lineup-220308_big.jpg.large.jpg"} alt="" />
                </div>
                <div onClick={() => filtering('camera')} >
                    <h1>Camera</h1>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkn7Xu8VLs6CBnyaOQUsujUCxExlz7UheLGw&usqp=CAU"} alt="" />
                </div>
            </div>
            <div className='my-5'>
                <h1 className='text-center mt-5 '>{filter}</h1>
                <div className='gadget-collections'>
                    {
                        !isFiltered ? gadgets.map(gadget => <Filtered key={gadget._id} gadget={gadget}></Filtered>) : filteredGadgets.map(gadget => <Filtered key={gadget._id} gadget={gadget}></Filtered>)
                    }
                </div>
            </div>
            <Chart></Chart>
            <Footer></Footer>
        </div >
    );
};

export default Home;