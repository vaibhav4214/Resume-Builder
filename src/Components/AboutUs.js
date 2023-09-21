import Navbar from "./Navbar"
import { useSelector } from "react-redux"
import img from "./about.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';



const AboutUs=()=>
{
    const dummydata=useSelector(state=>state.DummyDataReducer)
    console.log(dummydata)
    return(<>
                <Navbar/>
                <div className="grid w-[90%] mx-auto grid-cols-12 pt-[50px] xl:p-[100px]">
                    <div className="col-span-12 lg:col-span-7 text-[15px] font-[500]">
                        <p className="text-[50px] font-[900] text-[grey]">Resume Builder</p>
                    Our resume builder lets you easily and quickly create this important document using our resume wizard. 
                    Our text editor has everything you need to customize your resume.
                     Choose different fonts, sizes, bullets,
                      and much more. Download your resume and
                       send it straight to the hiring manager.
                    </div>
                    <div className="col-span-12 lg:col-span-5 p-[50px] "><img src={img} className="w-[50%] mx-auto"/></div>

                    <div className="col-span-12 lg:col-span-7 text-[15px]  font-[500]">
                    <a href="https://www.facebook.com/" target="_blank"  className="text-[#5656b8] p-[5px]"><FacebookIcon/></a>
                    <a href="https://www.whatsapp.com/" target="_blank"  className="text-[green] p-[5px]"><WhatsAppIcon /></a>
                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"  target="_blank"  className="text-[#2e97b1] p-[5px]"><TwitterIcon/></a>
                    <a href="https://in.linkedin.com/"  target="_blank"  className="text-[#216992] p-[5px]"><LinkedInIcon/></a>
                    <a href="https://www.mail.google.com/"  target="_blank"  className="text-[#fa3535] p-[5px]"><EmailIcon/></a>
                </div>
                </div>
                
             
    </>)
}

export default AboutUs