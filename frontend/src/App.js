import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import EditEmployeePage from "./pages/EditEmployeePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addemployee" element={<CreateEmployeePage />} />
        <Route path="/editUser/:id" element={<EditEmployeePage />} />
        <Route path="/updateUser/:id" element={<EditEmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;
