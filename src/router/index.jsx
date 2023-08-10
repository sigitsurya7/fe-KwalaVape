// Import React
import React from "react"
import { Route, Routes } from "react-router-dom"

// Ecommerce Pages
import HomeEcommerce from "../pages/ecommerce/home"
import DetailProduct from "../pages/ecommerce/detail"
import ChartEcommer from "../pages/ecommerce/chart"
import WhisList from "../pages/ecommerce/wishlist"
import AllProduct from "../pages/ecommerce/product"
import Profile from "../pages/ecommerce/profile"
import PrivateUser from "../config/hook/privateUser"

// Error Page
import NotFound from "../pages/error/404"

// Auth Page
import SignIn from "../pages/auth/signIn"
import SignUp from "../pages/auth/signUp"

// Hooks Private
import ConfirmOder from "../pages/ecommerce/confirmOder"

function IndexRoutes() {
    return(
        <Routes>
            {/* Ecommerce Routes */}
            <Route path="/" element={<HomeEcommerce />} />
            <Route path="/product/:category/:nameProduct" element={<DetailProduct />} />
            <Route path="/product/:params" element={<AllProduct />} />
            <Route parh="/kategori/:category" element={<AllProduct />} />
            {/* Will be delete if i have backend */}
            <Route path="/keranjang" element={<ChartEcommer />} />
            <Route path="/wishlist" element={<WhisList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/confirm" element={<ConfirmOder />} />

            {/* Auth Routes */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* user routes */}
            <Route path="/user" element={<PrivateUser />}>
                <Route index element={<HomeEcommerce />} />
                <Route path="/user/keranjang" element={<ChartEcommer />} />
                <Route path="/user/wishlist" element={<WhisList />} />
                <Route path="/user/profile" element={<Profile />} />
            </Route>

            <Route path="/ngadimin">
                <Route index />
            </Route>

            {/* Error Page */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default IndexRoutes