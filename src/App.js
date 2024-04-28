import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Component/Foooter/Footer";
import { Header } from "./Component/Header/Header";
import { Dashboard } from "./Component/Dashboard/Dashboard";
import Sidebar from "./Component/Sidebar/Sidebar";
import { Order } from "./Component/Orders/Order";
import { Employee } from "./Component/Employee/Employee";
import { Product } from "./Component/Product/Product";
import { AddEmployee } from "./Component/Employee/AddEmployee";
import { Pagenotfound } from "./Component/PagenotFound/Pagenotfound";
import { LoginPage } from "./Component/auth/LoginPage";
import Signup from "./Component/auth/Signup";
import { UserProfile } from "./Component/auth/UserProfile";

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
      <Header />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/employee" element={<Employee/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/addemployee" element={<AddEmployee/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/*" element={<Pagenotfound/>} />
        </Routes>
      <Footer />
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;
