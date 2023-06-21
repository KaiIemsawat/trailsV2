import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const EditTrail = (props) => {
    const { id } = useParams();
    const nav = useNavigate();
    const [trail, setTrail] = useState({
        trailName: "",
        distance: "",
        description: "",
        location: "",
        wheelchairAccess: null,
        image: "",
    });

    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setTrail({ ...trail, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/getOneTrail/${id}`)
            .then((resp) => {
                console.log(resp.data);
                setTrail(resp.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/updateTrail/${id}`, trail)
            .then((resp) => {
                console.log(resp);
                nav("/");
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <h3>Edit Trail's Details</h3>
            <form onSubmit={submitHandler}>
            <div>
                <label>Trail Name : </label>
                <input type="text" onChange={changeHandler} name="trailName" value={trail.trailName}/>
                {
                    errors.trailName ? <p>{errors.trailName.message}</p> : null
                }
            </div>
            <div>
                <label>Distance : </label>
                <input type="text" onChange={changeHandler} name="distance" value={trail.distance}/>
                {
                    errors.distance ? <p>{errors.distance.message}</p> : null
                }
            </div>
            <div>
                <label>Description : </label>
                <textarea onChange={changeHandler} name="description" value={trail.description}/>
                {
                    errors.description ? <p>{errors.description.message}</p> : null
                }
            </div>
            <div>
                <label>Location : </label>
                <input type="text" onChange={changeHandler} name="location" value={trail.location}/>
                {
                    errors.location ? <p>{errors.location.message}</p> : null
                }
            </div>
            <div>
                <span>Wheelchair accessibility : </span>
                <input type="radio" onChange={changeHandler} name="wheelchairAccess" value={true}/><label>True</label>
                <input type="radio" onChange={changeHandler} name="wheelchairAccess" value={false}/><label>False</label>
                {
                    errors.wheelchairAccess ? <p>{errors.wheelchairAccess.message}</p> : null
                }
            </div>
            <div>
                <label>Dificalty Level : </label>
                <select onChange={changeHandler} name="difficalty" value={trail.difficalty}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div>
                <label>Link Image : </label>
                <input type="text" onChange={changeHandler} name="image" value={trail.image}/>
            </div>
            <button>submit</button>
        </form>
        </div>
    );
};

export default EditTrail;
