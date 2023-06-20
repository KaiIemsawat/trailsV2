import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const AddTrail = (props) => {
    const [trail, setTrail] = useState({
        trailName: "",
        distance: "",
        description: "",
        location: "",
        wheelchairAccess: false,
        image: "",
    });
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setTrail({ ...trail, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/addTrail", trail)
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };

    return <div>AddTrail</div>;
};

export default AddTrail;
