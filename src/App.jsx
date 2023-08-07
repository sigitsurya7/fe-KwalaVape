// Import React
import React, { Suspense } from "react"
import { BrowserRouter as Router } from "react-router-dom"

// Import Css
import './assets/tailwind.css'

// Import Routes
import IndexRoutes from "./router"

const App = () => {
  return(
    <Router>
      <Suspense>
        <IndexRoutes />
      </Suspense>
    </Router>
  )
}

export default App