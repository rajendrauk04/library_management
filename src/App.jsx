import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Course from './components/Course';
import Categories from './components/Categories';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import Registration from './components/Registration';

function App() {
  const data = "Hello Devs, you are learning React Js and the topic is Props.";
  const numbers = 123456789;
  const sidebar = [
    { id: 1, title: "Dashboard", url: "/dashboard" },
    { id: 2, title: "Students", url: "/students" },
    { id: 3, title: "Course", url: "/course" },
    { id: 4, title: "Syllabus", url: "/syllabus" },
    { id: 5, title: "Attendance", url: "/attendance" },
    { id: 5, title: "Categories", url: "/categories" },
    { id: 6, title: "Registration", url: "/registration" },
  ];


  return (
    <>
      {/* Routing */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 sidebar p-0">
            <Sidebar menus={sidebar} />
          </div>
          <div className="col-lg-10 dashboard">
            {/* Routes */}
            <Navbar />
            <Routes>
              <Route path="/course" element={<Course />} />
              <Route path="/dashboard" element={<Dashboard val={data} num={numbers} />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products/:id" element={<AllProducts />} />
              <Route path='/product-details/:id' element={<ProductDetails />} />
              <Route path='/registration' element={<Registration />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;