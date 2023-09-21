import Navbar from "../Navbar"
import TextField from '@mui/material/TextField';
import Details_Navbar from "./Details_Navbar"
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { education_add } from "../../Redux/DummyDataActions";
import { education_complete } from "../../Redux/Disable/DisableAction";

const Education=()=>
{
    const navigate=useNavigate()
    const availableData=JSON.parse(localStorage.getItem("DummyData"))
    const dispatch=useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log(availableData)

    const onSubmit = (data) => {
        
        if(data.startYear===data.endYear)
        {
            alert("Start And End Date Must Not Same")
        }
        else
        {
            dispatch(education_add(data))
            dispatch(education_complete())
            navigate("/details/skills")
        }
      

 }
    return<>
    <Navbar/>
        <div className="grid-cols-12 grid  w-[85%] mb-[100px]  mx-auto mt-[5%]">
            
            <div className="col-span-12 lg:col-span-3 "><Details_Navbar /></div>
            <div className="col-span-12 lg:col-span-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <table>
                    <tr>
                            <td><label>Type</label><br/>
                            <TextField {...register("educationtype", { required: true })} id="outlined-basic" defaultValue={availableData.education ? availableData.education.type: ""} variant="outlined" />
                            <p className="text-[red]">{errors.educationtype && "This is Required"}</p>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td><label>University</label><br/>
                            <TextField {...register("university", { required: true })} id="outlined-basic" defaultValue={availableData.education ? availableData.education.university: ""} variant="outlined" />
                            <p className="text-[red]">{errors.university && "This is Required"}</p></td>
                            <td><label>Degree</label><br/>
                            <TextField {...register("degree", { required: true })} id="outlined-basic" defaultValue={availableData.education ? availableData.education.degree: ""} variant="outlined" />
                            <p className="text-[red]">{errors.degree && "This is Required"}</p></td>
                            </tr>
                            <tr>
                        <td><label>Start Year</label><br/>
                            <TextField type="date" defaultValue={availableData.education ? availableData.education.startYear: ""} className="w-[100%]" {...register("startYear", { required: true })} id="outlined-basic"   variant="outlined" />
                            <p className="text-[red]">{errors.startYear
                             && "This is Required"}</p>
                            </td>
                            <td><label>End Year</label><br/>
                            <TextField type="date" defaultValue={availableData.education ? availableData.education.endYear: ""} className="w-[100%]" {...register("endYear", { required: true })} id="outlined-basic"   variant="outlined" />
                            <p className="text-[red]">{errors.endYear && "This is Required"}</p>
                            </td>
                        </tr>

                        <tr>
                                <td></td>
                                <td>
                                <Button className="float-right" type="submit"  variant="contained" sx={{ margin: '5px' }}>Next</Button>
                                <Button className="float-right" onClick={() => {navigate(-1);}} variant="outlined" sx={{ margin: '5px' }}>Back</Button></td>
                                </tr>
                    </table>
                </form>
            </div>
            <div className="col-span-12 lg:col-span-3"></div>

        </div>

    
    </>
}

export default Education