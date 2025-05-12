import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import BaseLayout from "./views/BaseLayout";
import Add from "./views/Add";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
