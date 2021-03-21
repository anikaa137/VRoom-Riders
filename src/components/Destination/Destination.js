import { useParams } from "react-router";
import fakeData from "../../fakeData.json";
import React, { useState } from "react";
import "./Destination.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserFriends } from '@fortawesome/free-solid-svg-icons';


const Destination = () => {
    const [search, setSearch] = useState(false);

    const { id } = useParams();
    // console.log(id);
    const [data, setData] = useState(fakeData);
    // console.log(data);
    const rider = data.find((data) => data.id == id);
    // console.log(a);

    const handleSearch = () => {
        setSearch(true);
    };
    return (
        
        <div className="destinationContainer">
            { id ? search ? <div className="mainLocationContainer">
                <div className="locationArea">
                    <h3>Chittagong</h3>
                    <h3>Dhaka</h3>
                </div>
                <div className="locationContainer">
                    <img src={rider.photo} alt="" />
                    <h5>{rider.name} </h5>
                    <h4><FontAwesomeIcon icon={faUserFriends} /> 4</h4>
                    <h4>$69</h4>
                </div>
                <div className="locationContainer">
                    <img src={rider.photo} alt="" />
                    <h5>{rider.name} </h5>
                    <h4><FontAwesomeIcon icon={faUserFriends} /> 5</h4>
                    <h4>$75</h4>
                </div>
                <div className="locationContainer">
                    <img src={rider.photo} alt="" />
                    <h5>{rider.name} </h5>
                    <h4><FontAwesomeIcon icon={faUserFriends} /> 6</h4>
                    <h4>$80</h4>
                </div>
            </div> :
                <div className="addressFiled">
                    <form action="">
                        <input type="text" name="" placeholder="Chitagong" /><br /><br />
                        <input type="text" name="" placeholder="Dhaka" /> <br /><br />
                        <button onClick={handleSearch}>Search</button>
                    </form>
                </div> :
                search ? <div className="mainLocationContainer">
                    <div className="locationArea">
                        <h3>From</h3>
                        <h3>To</h3>
                    </div>
                    <div className="locationContainer">
                        <img src={data[0].photo} alt="" />
                        <h5>{data[0].name} </h5>
                        <h4><FontAwesomeIcon icon={faUserFriends} /> 4</h4>
                        <h4>$69</h4>
                    </div>
                    <div className="locationContainer">
                        <img src={data[0].photo} alt="" />
                        <h5>{data[0].name} </h5>
                        <h4><FontAwesomeIcon icon={faUserFriends} /> 5</h4>
                        <h4>$75</h4>
                    </div>
                    <div className="locationContainer">
                        <img src={data[0].photo} alt="" />
                        <h5>{data[0].name} </h5>
                        <h4><FontAwesomeIcon icon={faUserFriends} /> 6</h4>
                        <h4>$80</h4>
                    </div>
                </div> :
                    <div className="addressFiled">
                        <form action="">
                            <input type="text" name="" placeholder="From" /><br /><br />
                            <input type="text" name="" placeholder="To" /> <br /><br />
                            <button onClick={handleSearch}>Search</button>
                        </form>
                    </div>
            }
            <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236206.47791826713!2d91.67977898204921!3d22.32619178518328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1616237778894!5m2!1sen!2sbd"
                 allowfullscreen=""
                    loading="lazy"
                 ></iframe>
             </div>
        </div>
    );
};

export default Destination;
