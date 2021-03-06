import React, {useState, useEffect, useContext} from "react";
import logo from "../../image/ecomm-logo.svg";
import { BiSearch, BiCart ,BiToggleLeft, BiToggleRight, BiUserCircle} from "react-icons/bi";
import { Link } from "react-router-dom";
import './Navbar.css'
import primaryContext, { usePrimaryContextProvider } from "../../context/primaryContext";

export default function Navbar() {
const [toggle, setToggle] = useState(false)
const {user} = usePrimaryContextProvider()

const setDark=()=>{
  setToggle(false)
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
}

useEffect(() => {
  console.log(user)
}, [user])


const setLight = () => {
  setToggle(true)
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");



  return (
    <div className="flex p-4 items-center justify-between">
      <ul className="flex items-center">
        <li className="px-4">
          <img src={logo} alt="" />
        </li>
        <li className="px-4">
          <Link to='/'>Home</Link>
          {/* Home */}
        </li>
        <li className="px-4">
          <Link to="/category">Category</Link>
          {/* Category */}
        </li>
        <li className="px-4">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="px-4">
          <Link to="/images" >Images</Link>
        </li>
      </ul>
      <ul className="flex items-center justify-end">
      <li className="px-4">
      {toggle?<BiToggleLeft size={"1.5rem"} className="cursor-pointer" onClick={setDark}/>:<BiToggleRight size={"1.5rem"} className="cursor-pointer" onClick={setLight} />}
        
      </li>
        <li className="px-4">
          <BiSearch size={"1.5rem"} />
        </li>
        <li className="px-4">
        <Link to="/mycart">

          <BiCart size={"1.5rem"} />
        </Link>
       
        </li>
        <li className="px-4 flex" >
          <BiUserCircle size={"1.5rem"}/>{user}
        </li>
        <li className="px-4"> Logout</li>
      </ul>
    </div>
  );
}
