import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Todo from "./Todo/Todo";
import User from "./Users/User";
import DetailUser from "./Users/DetailUser";
import Mycomponent from "./Examples/MyComponent";
import Home from "./Home/Home";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Blog from "./Blog/Blog";
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<DetailUser />} />
        <Route path="/about" element={<Mycomponent />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
