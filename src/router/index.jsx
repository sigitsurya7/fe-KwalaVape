// Import React
import React from "react"
import { Route, Routes } from "react-router-dom"

// Ecommerce Pages
import HomeEcommerce from "../pages/ecommerce/home"
import NotFound from "../pages/error/404"
import DetailProduct from "../pages/ecommerce/detail"

function IndexRoutes() {
    return(
        <Routes>
            {/* Ecommerce Routes */}
            <Route path="/" element={<HomeEcommerce />} />
            <Route path="/:category/:nameProduct" element={<DetailProduct />} />


            {/* Error Page */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default IndexRoutes