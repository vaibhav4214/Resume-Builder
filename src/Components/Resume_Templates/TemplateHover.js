import { template_value } from "../../Redux/DummyDataActions";
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const TemplateHover=(props)=>{

   
    const navigate=useNavigate()
    const Dispatch=useDispatch()

    const get_template_value=(e)=>
    {

        Dispatch(template_value(e.target.value))


        navigate("/details/personal-details")
    }
   
    return(
<div class="hover-dive hidden templates-hover absolute bg-[#28252575;] text-center w-[100%] h-[100%]">           
         <Button className="font-[800]" variant="contained"  onClick={get_template_value} value={props.template_val}  >
             Use Template
         </Button>
         </div> 
    )

}
export default TemplateHover