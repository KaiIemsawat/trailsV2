import "./App.css";
import DisplayAll from "./components/DisplayAll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddTrail from "./components/AddTrail";
import DisplayOne from "./components/DisplayOne";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<DisplayAll />} />
                    <Route path="/addTrail" element={<AddTrail />} />
                    <Route path="/oneTrail/:id" element={<DisplayOne />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
