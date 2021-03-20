import { useParams } from "react-router";
import fakeData from "../../fakeData.json";
import React, { useState } from "react";
import "./Destination.css";

const Destination = () => {
    const [search, setSearch] = useState(false);

    const { id } = useParams();
    console.log(id);
    const [data, setData] = useState(fakeData);
    console.log(data);
    const a = data.find((data) => data.id == id);
    console.log(a);

    const handleSearch = () => {
        setSearch(true);
    };
    return (
        <div className="destination container">
            {id ? (
                search ? (
                    <div>
                        <h5>{a.name} </h5>
                        <img src={a.photo} alt="" width="200px" />
                    </div>
                ) : (
                    <div>
                        <form action="">
                            <input
                                type="text"
                                name=""
                                placeholder="Chittagong"
                            />
                            <br />
                            <br />
                            <input
                                type="text"
                                name=""
                                placeholder="Dhaka"
                            />{" "}
                            <br />
                            <br />
                            <button onClick={handleSearch}>Search</button>
                        </form>
                    </div>
                )
            ) : search ? (
                <div
                    class="alert alert-danger"
                    role="alert"
                    style={{ width: "40%", height: "30%" }}
                >
                    Please, select a ride...
                </div>
            ) : (
                <div>
                    <form action="">
                        <input type="text" name="" placeholder="From" />
                        <br />
                        <br />
                        <input type="text" name="" placeholder="To" /> <br />
                        <br />
                        <button onClick={handleSearch}>Search</button>
                    </form>
                </div>
            )}
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
