// Import React
import React from "react"
import { Route, Routes } from "react-router-dom"

// Ecommerce Pages
import HomeEcommerce from "../pages/ecommerce/home"
import NotFound from "../pages/error/404"
import DetailProduct from "../pages/ecommerce/detail"
import ChartEcommer from "../pages/ecommerce/chart"
import WhisList from "../pages/ecommerce/wishlist"
import SignIn from "../pages/auth/signIn"
import SignUp from "../pages/auth/signUp"

function IndexRoutes() {
    return(
        <Routes>
            {/* Ecommerce Routes */}
            <Route path="/" element={<HomeEcommerce />} />
            <Route path="/:category/:nameProduct" element={<DetailProduct />} />
            <Route path="/keranjang" element={<ChartEcommer />} />
            <Route path="/wishlist" element={<WhisList />} />

            {/* Auth Layout */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Error Page */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default IndexRoutes