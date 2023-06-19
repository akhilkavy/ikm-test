import React from 'react';
import { Routes, Route } from "react-router-dom";

const Pageone = React.lazy(() => import("../pages/pageone"));

export default function Routers() {
    return (
        <div>
            <Routes>
            <Route path="/" element={<Pageone />} />
            </Routes>
        </div>
    )
}