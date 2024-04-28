import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  Home,
  Login,
  Profile,
  Register,
  RegisterThree,
  RegisterTwo,
} from "./pages"
import { Navbar } from "./components"
import Jobs from "./pages/jobs/Jobs"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-two" element={<RegisterTwo />} />
          <Route path="/register-three" element={<RegisterThree />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
