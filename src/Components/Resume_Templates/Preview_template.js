import Navbar from "../Navbar"
import Blue_Shark from "./Blue_Shark"
import Purple_Wine from "./Purple_wine"
import Yellow_Banana from "./Yellow_Banana"
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import jsPDF from 'jspdf'
import { useNavigate } from "react-router-dom";
import Orange from "./Orange";
import { useLocation } from "react-router-dom";







const Preview_template=()=>
{
  
    
   
    const navigate=useNavigate()
    const location=useLocation()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const previewData = JSON.parse(localStorage.getItem("previousData")) ? JSON.parse(localStorage.getItem("previousData")) : []
    let template_val=""
    if(location.state.pageName=="preview-template")
    {
             template_val=previewData[location.state.index]
    }
    else
    {
         template_val=JSON.parse(localStorage.getItem("DummyData"))
    }
   
    
   
  



    let template=""

    if(template_val.template==="blue_shark")
    {
        template=<Blue_Shark/>
      
        
    }
    else if(template_val.template==="purple_wine")
    {
        template=<Purple_Wine/>
    }
    else if(template_val.template==="yellow_banana")
    {
        template=<Yellow_Banana/>
    }

    else if(template_val.template==="orange")
    {
        template=<Orange/>
    }
    else{

    }
    const onSubmit=(e)=>
    {
    //     var doc = new jsPDF('p', 'pt','a4',true);
       
    //   doc.html(document.querySelector("#preview_template"), {
    //         callback: function (doc) {
               
    //             doc.save(`${document.querySelector("#resume_name").value}.pdf`);

    //         },
    //         x:1,
    //           y: 1,
    //          width: 595, 
    //          windowWidth: 650 ,
    //          height:800

           
    //     });

        let previewData=JSON.parse(localStorage.getItem("DummyData"))
        previewData.resumeName=e.resumeName

        
        if(JSON.parse(localStorage.getItem("previousData")))
        {
            const previousData=JSON.parse(localStorage.getItem("previousData"))
          
            previousData.push(previewData)
            localStorage.setItem("previousData",JSON.stringify(previousData))
            
        }

        else
        {
            const previousData=[]
            previousData.push(previewData)
            localStorage.setItem("previousData",JSON.stringify(previousData))
        }

        
        localStorage.removeItem("DummyData"); 
        navigate("/my-resume")
       
    }
    const secondBtn=()=>
    {
        const val=document.querySelector("#resume_name").value
        if(val==="")
        {
            console.log(document.querySelector("#resume_name").value)
            document.querySelector(".error_resume").innerHTML="Plz Enter Reume Name"
        }
        else
        {
            var doc = new jsPDF('p', 'pt','a4',true);
       
            doc.html(document.querySelector("#preview_template"), {
                  callback: function (doc) {
                     
                      doc.save(`${document.querySelector("#resume_name").value}.pdf`);
      
                  },
                  x:1,
                    y: 1,
                   width: 595, 
                   windowWidth: 650 ,
                   height:800
      
                 
              });
        }

      
    }
    return<>
            <Navbar/>
            <div  className=" grid grid-cols-12 w-[95%] lg:w-[80%] mx-auto mt-[5%]">
                <div className="col-span-12 lg:col-span-1 "></div>
                <div className="col-span-12 lg:col-span-7" id="preview_template"> {template}</div>
                <div className="col-span-12 lg:col-span-2 float-right">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="text-[#575353] font-[700]">Resume Name</label><br/>
                <TextField label="Resume_Name" id="resume_name" defaultValue={previewData[location.state.pageName]==="preview-template" ? previewData[location.state.index].resumeName : ""}  {...register("resumeName", { required: true })} variant="outlined" />
                <p className="text-[red]" >{errors.resumeName && "Resume name is required"}</p>
                <p  className="text-[red] error_resume text-center"> </p>
                
                <Button  onClick={() => {navigate(-1);}} variant="outlined" sx={{ margin: '5px' }}>Back</Button>
                {location.state.pageName=="preview-template" ? <Button   onClick={secondBtn}  variant="contained" sx={{ margin: '5px' }}>Download</Button>:           
                     <Button  type="submit"  variant="contained" sx={{ margin: '5px' }}>Save</Button> }

               
                </form>
                </div>
                <div className="col-span-12 lg:col-span-1">
                 
                </div>

            </div>
           
     
    </>
}

export default Preview_template