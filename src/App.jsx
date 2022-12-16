import "./App.css";
import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import ToggleNav from "./components/navigation/ToggleNav.jsx";
import Spinner from "./components/spinner/Spinner.jsx";

function App() {
    const Home = React.lazy(() => import("./pages/home/Home.jsx"));
    const Stack = React.lazy(() => import("./pages/stack/Stack.jsx"));
    const Works = React.lazy(() => import("./pages/works/Works.jsx"));

    return (
        <div className="App">
            <ToggleNav />
            <React.Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stack" element={<Stack />} />
                    <Route path="/works" element={<Works />} />
                </Routes>
            </React.Suspense>
        </div>
    );
}

export default App;
