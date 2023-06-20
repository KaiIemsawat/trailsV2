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

    return <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>Trail Name : </label>
                <input type="text" onChange={changeHandler} name="trailName" value={trail.trailName}/>
            </div>
            <div>
                <label>Distance : </label>
                <input type="text" onChange={changeHandler} name="distance" value={trail.distance}/>
            </div>
            <div>
                <label>Description : </label>
                <input type="text" onChange={changeHandler} name="description" value={trail.description}/>
            </div>
            <div>
                <label>Location : </label>
                <input type="text" onChange={changeHandler} name="location" value={trail.location}/>
            </div>
            <div>
                <span>Wheelchair accessibility : </span>
                <input type="radio" onChange={changeHandler} name="wheelchairAccess" value={true}/><label>True</label>
                <input type="radio" onChange={changeHandler} name="wheelchairAccess" value={false}/><label>False</label>
            </div>
            <div>
                <label>Link Image : </label>
                <input type="text" onChange={changeHandler} name="image" value={trail.image}/>
            </div>
            <button>submit</button>
        </form>
    </div>;
};

export default AddTrail;
