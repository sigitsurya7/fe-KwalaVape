// Import React
import React from "react"
import { Route, Routes } from "react-router-dom"

// Ecommerce Pages
import HomeEcommerce from "../pages/ecommerce/home"

function IndexRoutes() {
    return(
        <Routes>
            {/* Ecommerce Routes */}
            <Route path="/" element={<HomeEcommerce />} />
        </Routes>
    )
}

export default IndexRoutes