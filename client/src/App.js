import "./App.css";
import DisplayAll from "./components/DisplayAll";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DisplayAll />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
