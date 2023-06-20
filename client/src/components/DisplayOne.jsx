import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const DisplayOne = (props) => {
    const [oneTrail, setOneTrail] = useState({});
    const {id} = useParams();
    const nav = useNavigate();

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/getOneTrail/${id}`)
        .then((resp) => {
            console.log(resp.data);
            setOneTrail(resp.data);
        }).catch((err)=> {console.log(err)});
    }, []);

    return (
        <div>
            <h3>Trail's Details</h3>
            <p><span style={{ fontWeight: "bold" }}>Trail Name : </span>{oneTrail.trailName}</p>
            <p><span style={{ fontWeight: "bold" }}>Distance : </span>{oneTrail.distance}</p>
            <p><span style={{ fontWeight: "bold" }}>Description : </span>{oneTrail.description}</p>
            <p><span style={{ fontWeight: "bold" }}>Location : </span>{oneTrail.location}</p>
            <p><span style={{ fontWeight: "bold" }}>Difficalty Level : </span>{oneTrail.difficalty}</p>
            {
                oneTrail.wheelchairAccess ?
                <p><span style={{ fontWeight: "bold" }}>Wheelchair Accessible : </span>Yes</p> :
                <p><span style={{ fontWeight: "bold" }}>Wheelchair Accessible : </span>No</p>
            }
            {
                oneTrail.image ?
                <img src={oneTrail.image} alt={oneTrail.trailName} style={{width:"30%"}}/> : null
            }
        </div>
    )
}

export default DisplayOne