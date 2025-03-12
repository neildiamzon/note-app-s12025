import React from "react";
import Home from "./Home";
import {baseUrl} from "../constants";
import axios from "axios";

function Register() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");

    function usernameChangeHandler(event) {
        setUsername(event.target.value);
    }

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    }

    function emailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function register() {
        if (username === "" || password === "" || email === "") {
            setError("All fields are required");
        } else {
            let data = JSON.stringify({
                "username": username,
                "password": password,
                "email": email
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: baseUrl + '/users/register/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    setError("Registration successful");
                })
                .catch((error) => {
                    console.log(error);

                    setError(error.response.data);
                });
        }
    }

    return (
        <div>
            <Home/>
            <h1>Register</h1>
            <p>Email: <input type="email" onChange={emailChangeHandler}/></p>
            <p>Username: <input type="text" onChange={usernameChangeHandler}/></p>
            <p>Password: <input type="password" onChange={passwordChangeHandler}/></p>
            <p><button onClick={register}>Register</button></p><p>{error}</p>
        </div>
    )
}

export default Register