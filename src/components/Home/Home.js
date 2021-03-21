import React, { useState } from "react";
import fakeData from "../../fakeData.json";
import Rider from "../Rider/Rider";
import "./Home.css";
const Home = () => {
    const [data, setData] = useState(fakeData);
    console.log(data);
    return (
        <div className="home">
            <div
                style={{ width: "80%", margin: "0 auto" }}
                className="row ride-container"
            >
                {data.map((data) => (
                    <Rider data={data}></Rider>
                ))}
            </div>
        </div>
    );
};

export default Home;
