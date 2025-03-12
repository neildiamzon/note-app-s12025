import React from "react";
import {baseUrl} from "../constants";
import axios from "axios";
import FormData from "form-data";
import {useEffect} from "react";

function Logout() {
        const [error, setError] = React.useState("");
        const FormData = require('form-data');
    //localStorage.removeItem("Token");
    function logout() {
        let data = new FormData();

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: baseUrl +'/users/logout/',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("Token")
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setError("Success logout")
                localStorage.removeItem("Token");
            })
            .catch((error) => {
                console.log(error);
                setError("error")
            });
    }

    return (
        <div>
            <h1>Logout</h1>
            <button onClick={logout}>Logout</button>
            <p>{error}</p>
        </div>
    )
}

export default Logout