import Navbar from "../Navbar"
import Details_Navbar from "./Details_Navbar"
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import { add_skills } from "../../Redux/DummyDataActions";
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { delete_skills } from "../../Redux/DummyDataActions";

const Skills = () => {
    const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch=useDispatch()
    const skills_data=JSON.parse(localStorage.getItem("DummyData"))
    const [afterDeleteExp,setAfterDeleteExp]=useState(1)

    const onSubmit=(data)=>
    {
        dispatch(add_skills(data))
        document.querySelector("#addSkills").value=""



    }
    const skillDelete=(e)=>
    {   console.log(e.target.value)
        dispatch(delete_skills(e.target.value))
        setAfterDeleteExp(afterDeleteExp+1)
    }
    return <>
        <Navbar />
        <div className="grid-cols-12 grid  w-[85%] mb-[100px]  mx-auto mt-[5%]">

            <div className="col-span-12 lg:col-span-3 "><Details_Navbar /></div>
            <div className="col-span-12 lg:col-span-6">


                <div className="grid grid-cols-12 p-[10px] gap-4">

                    {skills_data.skills ? skills_data.skills.map((e,i)=>
                    {
                        return <div className="col-span-6 ">
                        
                        <TextField 	inputProps={
					{ readOnly: true, }} width="100%"  id="outlined-basic" value={e} variant="outlined" />
                        <IconButton aria-label="delete" onClick={skillDelete} size="large" >
                        <Button variant="contained" value={i} size="small">Delete</Button>
                    </IconButton>

                       </div>
                    })
                    
                    :""}
                    
                           <div className="col-span-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField {...register("skills", { required: true })} id="addSkills" label="Add Skills" variant="outlined" />
                            <p className="text-[red]">{errors.skills && "Add Skills"}</p>
                            <Button type="submit"   variant="text">Add New</Button>
                            
                        </form>
                      
                               
                                <Button className="float-right" type="submit" onClick={()=>{navigate("/preview-template",{state:{pageName:"skillPage"}})}} variant="contained" sx={{ margin: '5px' }}>Next</Button>
                                <Button className="float-right" onClick={() => {navigate(-1);}} variant="outlined" sx={{ margin: '5px' }}>Back</Button>
                              
                           </div>

           

            </div>


        </div>
        <div className="col-span-12 lg:col-span-3"></div>

    </div >
    </>
}

export default Skills