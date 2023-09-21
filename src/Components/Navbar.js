import Grid from "@mui/material/Grid"
import { NavLink } from "react-router-dom"
import "../Css/navbar.css"

import DehazeIcon from '@mui/icons-material/Dehaze';
const Navbar=()=>
{

  const vertical_navbar_link_div_cls_btn=()=>
  {

    document.getElementById("vertical-navbar-link-div").style.animation = "navbar-close-animation 1s 1"; 
    setTimeout(()=>
    {
      document.querySelector("#vertical-navbar-link-div").style.display="none"
    },999)
  }
  const vertical_navbar_link_div_open_btn=()=>
  {
    document.querySelector("#vertical-navbar-link-div").style.display="block"
    document.getElementById("vertical-navbar-link-div").style.animation = "navbar-come-animation 1s 1"; 

    
  
    
  }
    return(<>
    
           <Grid container padding="10px"  boxShadow="1px 1px 2px 0px grey" spacing={2}>
  <Grid  item xs={4}>
    <p class="text-[30px] font-[900] text-[#2b2a2a]"><span className="bg-[red] text-[white] px-[10px]">Al</span>maBetter</p>
  </Grid>
  <Grid item xs={8} alignSelf={"center"}>
    {/* Hori ZOntal Nav bar links */}
  <div id="nav-link-div" className=" hidden  lg:flex float-right mr-[50px] ">
    <li class="px-[20px] list-none font-[700] text-[#575353]"> <NavLink to="/">Templates</NavLink></li>
    <li class="px-[20px] list-none font-[700] text-[#575353]"> <NavLink to="/my-resume">My Resume</NavLink></li>
    <li class="px-[20px] list-none font-[700] text-[#575353]"> <NavLink to="/about-us">About Us</NavLink></li>
  </div>
      
      <button onClick={vertical_navbar_link_div_open_btn} id="vertical-navbar-open-btn" className="float-right lg:hidden shadow-[1px_1px_2px_0px_grey] rounded-[1px] active:scale-[1.1] p-[10px] ">
      <DehazeIcon />
      </button>
      {/* vertical navbarlink */}
      <div id="vertical-navbar-link-div" className="fixed hidden z-10 text-center top-0 left-0 shadow-[1px_1px_2px_0px_grey] bg-[white] h-[100%] w-[50%]">
          <p class="w-[100%] h-[50px]"><span onClick={vertical_navbar_link_div_cls_btn} class="float-right cursor-pointer px-[20px] shadow-[1px_1px_2px_0px_grey] rounded-[1px] active:scale-[1.1] p-[10px] ">X</span></p>
          <div id="nav-link-div" className=" flex-col flex  mr-[10px] ">
    <li class="px-[20px] list-none font-[700] text-[#575353]"> <NavLink to="/">Templates</NavLink></li>
    <li class="px-[20px] list-none font-[700] text-[#575353]"> <NavLink to="/my-resume">My Resume</NavLink></li>
    <li class="px-[20px] list-none font-[700] text-[#575353]"> <NavLink to="/about-us">About Us</NavLink></li>
  </div>
      </div>

  </Grid>
</Grid>
    </>)
}

export default Navbar