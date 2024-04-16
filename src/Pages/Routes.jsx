import styled from "styled-components";
import { Routes, Route, HashRouter } from "react-router-dom";

import Home from "./Home";
import Staff from "./Staff";
import Contact from "./Contact";

const MyRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Home />} path=" />
                <Route element={<Staff />} path="Staff" />
                <Route element={<Contact />} path="Contact" />
            <Routes>
        </HashRouter>
    );
};

export default MyRoutes;
