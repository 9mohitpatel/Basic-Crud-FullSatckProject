import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./User/AddUser";
import Update from "./User/Update";
import ViewUSer from "./User/ViewUSer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/update/:id" element={<Update />} />
          <Route exact path="/view/:id" element={<ViewUSer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
