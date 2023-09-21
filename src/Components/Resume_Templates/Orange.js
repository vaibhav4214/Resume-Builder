import "./Css/orange.css"

import TemplateHover from "./TemplateHover"
import {  useSelector } from "react-redux/es/hooks/useSelector"
import { useLocation } from "react-router-dom"






const Orange=(props)=>
{    
    const pathname = window.location.pathname
    let dummy_details=useSelector(state=>state.DummyDataReducer)
    const location=useLocation()

    const previewData = JSON.parse(localStorage.getItem("previousData"))
    console.log(previewData)
    let dummydata=""

    if(pathname==="/preview-template")
    {
                if(location.state.pageName=="preview-template")
                {
                           dummydata=previewData[location.state.index]
                }
                else
                {
                    dummydata=JSON.parse(localStorage.getItem("DummyData"))
                }
    
       
    }
   
    else if(pathname==="/my-resume")
    {
        dummydata=props.dummydata
    }
    else
    {
        dummydata=dummy_details

    }
   

    return(<>

            <div id="orange" class="  templates  relative border-2 rounded-[5px] border-[#ff7b00]  mx-[auto] max-w-[700px]">
            {pathname==="/preview-template" ? "" :  pathname==="/my-resume" ? "" :<TemplateHover template_val="orange" />}
            <div  className=" bg-[#ff7b00]  w-[100%] grid grid-cols-12  ">
               {/* profile image */}
               <img alt="profile" src={dummydata.profile} className=" p-[5px]  rounded-[100px] col-span-3 w-[100px] h-[100px] "/>
               {/* big-name */}
               <p class="col-span-6 text-[white] font-serif font-[900] text-[25px] self-center"> <span>{dummydata.details.firstName}</span>  <span>{dummydata.details.lastName}</span></p>
               {/* info-dive */}
               <div className="col-span-3 self-center text-[10px] text-white font-[700]">
                <p>{dummydata.details.email}</p>
                <p>{dummydata.details.mobile}</p>
                <p>{dummydata.details.state},{dummydata.details.city} </p>
                </div>
            </div>
              
                {/* experience div */}
                <div > 
                <p class="text-[#ff7b00] text-[20px] p-[20px] font-[900] py-[10px]">PROFFESSIONAL EXPERIENCE</p>
                    <hr class="border-[#ff7b00] border-[2px] px-[10px]"/>
                    {
                        dummydata.experience ? dummydata.experience.map((e)=>
                        {
                                return <li class="text-[15px] list-none pl-[50px] pt-[10px]  ">
                                    <p>Company Name: {e.companyName}</p>
                                    <p>Job Title: {e.jobTitle}</p>
                                    <p>Start Year: {e.startYear}</p>
                                    <p>End Year: {e.endYear}</p>
                                </li>
                        }) :""
                    }
                  
                </div>
                {/* education div */}
                <div>

                <p class="text-[#ff7b00] text-[20px] p-[20px] font-[900] py-[10px]">Education</p>
                <hr class="border-[#ff7b00] border-[2px]  "/>
                    <table>
                        <tr>
                            <th>Type</th>
                            <th>University</th>
                            <th>Start Year</th>
                            <th>End Year</th>
                        </tr>
                 
                            <tr>
                                    <td>{dummydata.education.type}</td>
                                    <td>{dummydata.education.university}</td>
                                    <td>{dummydata.education.startYear}</td>
                                    <td>{dummydata.education.endYear}</td>
                           
                                </tr>

                        
                 
                    </table>

                </div>
                {/* Skills Div */}
                <div>
               
                <p class="text-[#ff7b00] text-[20px] p-[20px] font-[900] py-[10px]">SKILLS</p>
                <hr class="border-[#ff7b00] border-[2px]  "/>
                    <ul class="pl-[50px] mt-[10px]">
                        {
                            dummydata.skills.map((e)=>
                            {
                                return <li>{e}</li>
                            })
                        }
                    </ul>
                </div>
                {/* date and place  */}
                <div className="grid grid-cols-2 p-[20px] mt-[20px]">
                    <div><b>Date:</b> {dummydata.date}</div>
                    <div ><p  className="float-right"><b >Place:</b> {dummydata.details.city}</p></div>

                </div>
            </div>
    
    </>)

}

export default  Orange