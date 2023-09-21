import { NavLink, Outlet } from "react-router-dom"
import "./Css/details_form.css"
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import GradeIcon from '@mui/icons-material/Grade';
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DisableReducer from "../../Redux/Disable/DisableReducer";



const Details_Navbar=()=>
{
    const disableData=useSelector(state=>state.DisableReducer)
    return <>
            <div class="detail_Navbar_Link shadow-sm flex lg:block justify-center lg:justify-end lg:float-right  ">
            <li className="text-[#575353]"><NavLink to="/details/personal-details"><PermContactCalendarIcon/> Personal</NavLink></li>
            
            <li className="text-[#575353]"> {disableData.personal_details ? <NavLink to="/details/work-experience"><WorkHistoryIcon/> Work_Experience</NavLink> :  <Tooltip title="You need to fill personal data first ">
      <span>
        <Button disabled><WorkHistoryIcon/>Work Experience</Button>
      </span>
    </Tooltip>}
    </li>
            
            <li className="text-[#575353]">{disableData.work_experience ? <NavLink to="/details/education"><SchoolIcon/> Education </NavLink>: <Tooltip title="You need to fill work experience data first ">
      <span>
        <Button disabled><SchoolIcon/>Education</Button>
      </span>
    </Tooltip>}</li>
            
            
            <li className="text-[#575353]">{ disableData.education ? <NavLink to="/details/skills"><GradeIcon/> Skills</NavLink> :<Tooltip title="You need to fill education data first ">
      <span>
        <Button disabled><GradeIcon/>Skills</Button>
      </span>
    </Tooltip>}</li>
            <Outlet/>
            </div>
    </>
}

export default Details_Navbar