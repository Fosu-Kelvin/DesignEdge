import { Route, Routes } from "react-router-dom";

import Menu from "./menu/menu";
import EnrollmentsList from "./EnrollmentsList";
import Enroll from "./enroll/Enroll";
import Company from "./company/company";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Menu />} />
        <Route path="company" element={<Company />} />
        <Route path="enroll" element={<Enroll />} />
        <Route path="admin" element={<EnrollmentsList />}/>
      </Route>
    </Routes>
  );
}

export default App;
