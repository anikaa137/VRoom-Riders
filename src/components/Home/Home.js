import React, { useState } from "react";
import fakeData from "../../fakeData.json";
import Rider from "../Rider/Rider";
import "./Home.css"
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
{/* <div class="card bg-dark text-white">
  <img src="..." class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div> */}