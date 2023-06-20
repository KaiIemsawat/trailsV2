import "./App.css";
import DisplayAll from "./components/DisplayAll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddTrail from "./components/AddTrail";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<DisplayAll />} />
                    <Route path="/addTrail" element={<AddTrail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
