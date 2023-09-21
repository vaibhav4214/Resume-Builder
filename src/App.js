
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Templates from './Components/Templates';
import MyResume from './Components/MyResume';
import AboutUs from './Components/AboutUs';
import Blue_Shark from './Components/Resume_Templates/Blue_Shark';
import Personal_Details from './Components/Details_Form/Personal_Details';
import Work_Experience from './Components/Details_Form/Work_Experience';
import Education from './Components/Details_Form/Education';
import Skills from './Components/Details_Form/Skills';
import Preview_template from './Components/Resume_Templates/Preview_template';
import Error404 from './Error404';
import { useSelector } from 'react-redux';


function App() {
  const disableData=useSelector(state=>state.DisableReducer)
  return (
          <>
          {/* <Blue_Shark/> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Templates/>}></Route>
              <Route path="my-resume" element={<MyResume/>}></Route>
              <Route path='about-us' element={<AboutUs/>}></Route>
              <Route path='preview-template' element={<Preview_template/>}></Route>
        
              <Route path='details'>
                <Route path="personal-details" element={<Personal_Details/>}/>
                <Route path="work-experience" element={disableData.personal_details ? <Work_Experience/> : <Personal_Details/>}/>
                <Route path="education" element={disableData.work_experience ? <Education/> :<Personal_Details/>}/>
                <Route path="skills" element={disableData.education ? <Skills/> : <Personal_Details/>}/>
              </Route>
              <Route path="*" element={<Error404/>}/>
            </Routes>
          </BrowserRouter>
             
          </>
  );
}

export default App;
