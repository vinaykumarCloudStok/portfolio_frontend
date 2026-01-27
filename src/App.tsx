import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import { HelmetProvider } from "react-helmet-async"


const App = () => {
  return (
      <HelmetProvider>
            <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
      </HelmetProvider>

  )
}

export default App