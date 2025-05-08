import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import BaseLayout from "./views/BaseLayout";
import Add from "./views/Add";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/add" element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
