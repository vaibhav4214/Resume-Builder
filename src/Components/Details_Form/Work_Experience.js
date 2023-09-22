import Navbar from "../Navbar"
import React, { useState,updateState } from 'react';
import Details_Navbar from "./Details_Navbar"
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add_work_exp } from "../../Redux/DummyDataActions";
import { delete_experience } from "../../Redux/DummyDataActions";
import { work_experience_complete } from "../../Redux/Disable/DisableAction";
const Work_Experience=()=>
{
    console.log(JSON.parse(localStorage.getItem("DummyData")))
    const navigate=useNavigate()
    const DummyData=JSON.parse(localStorage.getItem("DummyData")) ? JSON.parse(localStorage.getItem("DummyData")) :""
    const dispatch=useDispatch()
    const [afterDeleteExp,setAfterDeleteExp]=useState(1)

    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const next_experience=(e)=>
    {
        dispatch(work_experience_complete())
        navigate("/details/education")

    }

    const delete_experience1=(e)=>
    {
        dispatch(delete_experience(e.target.value))
        setAfterDeleteExp(afterDeleteExp+1)

    }

    const onSubmit = (data) => {

        
           
            if(data.startYear===data.endYear)
            {
                alert("Start And End Date Must Not Same")
            }
            else
            {
                dispatch(add_work_exp(data))
                document.querySelector("#jobTitle").value=""
                document.querySelector("#companyName").value=""
                document.querySelector("#startYear").value=""
                document.querySelector("#endYear").value=""
            }

           

           

        
     }
    return<>
     <Navbar />
        <div className="grid-cols-12 grid  w-[85%] mb-[100px]  mx-auto mt-[5%]">
            
            <div className="col-span-12 lg:col-span-3 "><Details_Navbar /></div>
            <div className="col-span-12 lg:col-span-6">
            <p className="text-center font-[900] text-[#292727] text-[20px]">Work Experience</p>
                {
                    DummyData.experience ?  
                    
                    DummyData.experience.map((e,i)=>
                    {
                        return <>   <p className="text-center">Experience {i+1}</p>
                                    <table id="work_exp_table">
                                        <tr><td>{e.jobTitle}</td>
                                        <td>{e.companyName}</td>
                                        </tr>
                                        <tr ><td >{e.startYear}</td>
                                        <td>{e.endYear}</td>
                                        </tr>
                                        <Button  className="w-[200%]" onClick={delete_experience1} variant="text" value={i}>Delete</Button>
                                    </table>
                        </>
                    })

                    :""
                }
                
                <form id="personal_details" onSubmit={handleSubmit(onSubmit)} >
                    <table>
                        <tr>
                            <td><label>Job Title</label><br/>
                            <TextField {...register("jobTitle", { required: true })} id="jobTitle" label="Job Title" variant="outlined" />
                            <p className="text-[red]">{errors.jobTitle && "This is Required"}</p>
                            </td>
                            <td><label>Company Name</label><br/>
                            <TextField {...register("companyName", { required: true })} id="companyName" label="Company Name" variant="outlined" />
                            <p className="text-[red]">{errors.companyName && "This is Required"}</p>
                            </td>
                        </tr>
                        <tr>
                        <td><label>Start Year</label><br/>
                            <TextField type="date" className="w-[100%]" {...register("startYear", { required: true })} id="startYear"   variant="outlined" />
                            <p className="text-[red]">{errors.startYear
                             && "This is Required"}</p>
                            </td>
                            <td><label>End Year</label><br/>
                            <TextField type="date" className="w-[100%]" {...register("endYear", { required: true })} id="endYear"   variant="outlined" />
                            <p className="text-[red]">{errors.endYear && "This is Required"}</p>
                            </td>
                        </tr>
                        <tr className="text-center  ">
                                    <Button type="submit" className="w-[200%]"  variant="text">Add New</Button>
                           
                          
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                <Button className="float-right" onClick={next_experience} variant="contained" sx={{ margin: '5px' }}>Next</Button>
                                <Button className="float-right" onClick={() => {navigate(-1);}} variant="outlined" sx={{ margin: '5px' }}>Back</Button></td></tr>
                     
                    </table>
                </form>
            </div>
            <div className="col-span-12 lg:col-span-3"></div>

        </div>

    </>
}

export default Work_Experience