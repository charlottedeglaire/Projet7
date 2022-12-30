import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    {/* Page par default */}
                    <Route index element={<Home />} />
                    {/* Routage Page */}
                    <Route path="/home" element={<Home />} />
                    <Route path={`/logement/:id`} element={<Logement />} />
                    <Route path="/about" element={<About />} />
                    {/* Erreur URL */}
                    <Route path="*" element={<NotFound />} />
                    <Route path="/404" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
