import img from "./errorImage.jpg"

import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
const Error404=()=>
{
    return<>
        <div class="w-[80%] mx-auto text-center">
        <h1 className="text-center text-[30px] text-[red] font-[900]">This Page Not Font Our Server</h1>
        <NavLink to="/" className="p-[100px]" ><Button variant="contained"  color="success">
        Go To Home
      </Button></NavLink>
        
        <img src={img} className="w-[50%] mx-auto"/>
        </div>
    </>
}

export default Error404