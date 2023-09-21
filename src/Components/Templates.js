import Navbar from "./Navbar"
import Blue_Shark from "./Resume_Templates/Blue_Shark";
import Purple_Wine from "./Resume_Templates/Purple_wine";
import Yellow_Banana from "./Resume_Templates/Yellow_Banana";
import Orange from "./Resume_Templates/Orange";
import { useEffect } from "react";
import { education_complete } from "../Redux/Disable/DisableAction";
import { work_experience_complete } from "../Redux/Disable/DisableAction";
import { personal_complete } from "../Redux/Disable/DisableAction";
import { skills_complete } from "../Redux/Disable/DisableAction";
import { useDispatch } from "react-redux";


const Templates=()=>
{

    const dispatch=useDispatch()
    useEffect(()=>
    {
        let page="template"
        dispatch(education_complete(page))
        dispatch(skills_complete(page))
        dispatch(personal_complete(page))
        dispatch(work_experience_complete(page))

    },[])
    
    
  
    return(<>
                <Navbar/>
                <div class="grid lg:grid-cols-2 xl:grid-cols-4  sm:grid-cols-1 gap-5 w-[98%] mx-auto mt-[30px]">
                    <div ><Blue_Shark/></div>
                    <div><Purple_Wine/></div>
                    <div><Yellow_Banana/></div>
                    <div> <Orange/> </div>

                </div>
      

    </>)
}

export default Templates