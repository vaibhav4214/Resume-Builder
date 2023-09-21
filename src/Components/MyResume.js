import { Button } from "@mui/material"
import Navbar from "./Navbar"
import Blue_Shark from "./Resume_Templates/Blue_Shark"
import Orange from "./Resume_Templates/Orange"
import Purple_Wine from "./Resume_Templates/Purple_wine"
import Yellow_Banana from "./Resume_Templates/Yellow_Banana"
import { useNavigate } from "react-router-dom"
import { useState } from "react"



const MyResume = () => {
    const navigate=useNavigate()
    const previewData = JSON.parse(localStorage.getItem("previousData"))
    const [count,setCount]=useState(0)


    const downloadBtn=(e)=>

    {
        console.log(e.target.value)
            navigate("/preview-template",{state:{pageName:"preview-template",index:e.target.value}})
    }

    const deleteBtn=(e)=>
    {
        const slectIndex=e.target.value
        const previewData = JSON.parse(localStorage.getItem("previousData"))
        const data=previewData.filter((e,i)=>
        {
                return slectIndex!=i
        })

        localStorage.setItem("previousData",JSON.stringify(data))
        setCount(count+1)
    }

    return (<>
        <Navbar />
        {
            previewData[0] ? <div className="grid lg:grid-cols-2  xl:grid-cols-3  sm:grid-cols-1 gap-5 w-[80%] mx-auto mt-[30px]">
            {
                previewData.map((dummydata, i) => 
                {
                    if (dummydata.template === "yellow_banana") {
                        return <div>
                            <p className="text-[#555050] text-[25px] w-[80%] font-[800] m-[5px] mx-auto text-center rounded-[5px] p-[5px] ">{dummydata.resumeName}</p>
                            <Yellow_Banana dummydata={dummydata} />
                               <div className="text-center">
                               <Button variant="contained" onClick={downloadBtn} sx={{ margin: '5px' }} value={i}>Download</Button>
                               <Button variant="contained" color="error" onClick={deleteBtn} sx={{ margin: '5px' }} value={i}>Delete</Button>
                               </div>
                              
                        </div>
                    }
                    else if (dummydata.template === "orange") {

                        return <div>
                            <p className="text-[#555050] text-[25px] w-[80%] font-[800] m-[5px] mx-auto text-center rounded-[5px] p-[5px] ">{dummydata.resumeName}</p>
                            <Orange dummydata={dummydata} />
                         <div className="text-center">
                               <Button variant="contained" onClick={downloadBtn} sx={{ margin: '5px' }} value={i}>Download</Button>
                               <Button variant="contained" color="error" onClick={deleteBtn} sx={{ margin: '5px' }} value={i}>Delete</Button>
                               </div>
                        </div>
                    }
                    else if (dummydata.template === "purple_wine") {

                        return <div>
                            <p className="text-[#555050] text-[25px] w-[80%] font-[800] m-[5px] mx-auto text-center rounded-[5px] p-[5px] ">{dummydata.resumeName}</p>
                            <Purple_Wine dummydata={dummydata} />
                            <div className="text-center">
                               <Button variant="contained" onClick={downloadBtn} sx={{ margin: '5px' }} value={i}>Download</Button>
                               <Button variant="contained" color="error" onClick={deleteBtn} sx={{ margin: '5px' }} value={i}>Delete</Button>
                               </div>
                        </div>
                    }
                    else if (dummydata.template === "blue_shark") {

                        return <div>
                            <p className="text-[#555050] text-[25px] w-[80%] font-[800] m-[5px] mx-auto text-center rounded-[5px] p-[5px] ">{dummydata.resumeName}</p>
                            <Blue_Shark dummydata={dummydata} />
                        <div className="text-center">
                               <Button variant="contained" onClick={downloadBtn} sx={{ margin: '5px' }} value={i}>Download</Button>
                               <Button variant="contained" color="error" onClick={deleteBtn} sx={{ margin: '5px' }} value={i}>Delete</Button>
                               </div>
                        </div>
                    }
                   

                })

            }

        </div> : 
        <p className="text-[red] text-[30px] text-center font-[900]">No Template Available</p>
        }
        
    </>)
}

export default MyResume