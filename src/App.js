import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar.js";
import Login from "../src/components/pages/publicPages/auth/Login.js";
import SignUp from "../src/components/pages/publicPages/auth/Signup.js"
import Pharamacist from "./layouts/pharmacist/Pharamacist.js";
import  Table  from "./components/pages/privatePages/Table.js";
function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>

      <Route path='/navbar' element={<Navbar/>}/>
      <Route element={<Pharamacist />}>
      <Route path='/table' element={<Table/>}/>
      </Route>
    </Routes>
  </>
  );
}

export default App;
