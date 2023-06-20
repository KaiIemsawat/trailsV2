import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const DisplayAll = (props) => {
    const [allTrails, setAllTrails] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/allTrails")
            .then((resp) => {
                console.log(resp);
                setAllTrails(resp.data);
                // console.log(allTrails);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return <div>
        {
            allTrails.map((eachTrail, index) => (
                <div key={index}>
                    <p><span style={{ fontWeight: "bold" }}>Trail Name : </span>{eachTrail.trailName}</p>
                    <p><span style={{ fontWeight: "bold" }}>Distance : </span>{eachTrail.distance}</p>
                    <p><span style={{ fontWeight: "bold" }}>Description : </span>{eachTrail.description}</p>
                    <p><span style={{ fontWeight: "bold" }}>Location : </span>{eachTrail.location}</p>
                    <p><span style={{ fontWeight: "bold" }}>Difficalty Level : </span>{eachTrail.difficalty}</p>
                    {
                        eachTrail.wheelchairAccess ?
                        (<p><span style={{ fontWeight: "bold" }}>Wheelchair Accessibilirty : </span>Yes</p>)
                        : 
                        (<p><span style={{ fontWeight: "bold" }}>Wheelchair Accessibilirty : </span>No</p>)
                    }
                </div>
            ))
        } 
    </div>;
};

export default DisplayAll;
