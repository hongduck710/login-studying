import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import "./firebase.config";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />}/>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />}/>
        </Routes>
        <Navbar />
      </Router>
    </>
  )
}

export default App
