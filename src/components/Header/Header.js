import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../App";
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <Link
                        to="/home"
                        class="navbar-brand justify-content-center"
                        style={{ color: "#ff8000", textDecoration: "none" }}
                    >
                        <h3>Vroom Riders</h3>
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup"
                    >
                        <div class="navbar-nav ">
                            <Link to="/home" class="nav-link active">
                                <h4>Home</h4>
                            </Link>

                            <Link to="/destination" class="nav-link active">
                                <h4>Destination</h4>
                            </Link>

                            <Link to="/blog" class="nav-link active">
                                <h4> Blog</h4>
                            </Link>
                            <Link to="/contact" class="nav-link active">
                                <h4>Contact</h4>
                            </Link>

                            {loggedInUser.email ? (
                                <h5>{loggedInUser.email}</h5>
                            ) : (
                                <Link
                                    to="/login"
                                    className="header-link"
                                    class="nav-link"
                                    style={{
                                        background: "orange",
                                        color: "#fff",
                                        padding: "12px 20px",
                                        borderRadius: "5px",
                                    }}
                                >
                                    <h5>Login</h5>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
