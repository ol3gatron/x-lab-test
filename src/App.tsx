import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import "./App.css"

import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </div>
  )
}
export default App
